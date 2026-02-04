import { redis } from "../configs/redis.js";
import { APIKey } from "../models/Apikey.model.js";
import { RequestLog } from "../models/Apilogs.model.js";
import logger from "node-color-log";

const STREAM = "gateway:request-logs";
const GROUP = "admin-log-workers";
const CONSUMER = `consumer-${process.pid}`;

/* Ensure consumer group exists (idempotent) */
async function ensureConsumerGroup() {
  try {
    await redis.xgroup(
      "CREATE",
      STREAM,
      GROUP,
      "$",
      "MKSTREAM"
    );
    logger.color('green').log("Redis consumer group ensured");
  } catch (err) {
    // BUSYGROUP = already exists → safe
    if (!err.message.includes("BUSYGROUP")) {
      throw err;
    }
  }
}

export async function startGatewayLogConsumer() {
  await ensureConsumerGroup();

  logger.color('green').log("Gateway log consumer started");

  while (true) {
    try {
      const res = await redis.xreadgroup(
        "GROUP",
        GROUP,
        CONSUMER,
        "BLOCK",
        5000,
        "COUNT",
        100,
        "STREAMS",
        STREAM,
        ">"
      );

      if (!res) continue;

      const [, messages] = res[0];

      for (const [id, fields] of messages) {
        const log = parseStreamFields(fields);

        // Persist to Mongo (durable)
        await RequestLog.create(log);

        await APIKey.findOneAndUpdate(
          { _id: log.keyId },
          { lastUsed: new Date(log.timestamp) }
        );

        // ACK only after successful DB write
        await redis.xack(STREAM, GROUP, id);
      }

    } catch (err) {
      logger.color('red').log("Log consumer error:", err);
      await sleep(1000); // backoff, don't spin
    }
  }
}

function parseStreamFields(fields) {
  const obj = {};

  for (let i = 0; i < fields.length; i += 2) {
    obj[fields[i]] = fields[i + 1];
  }

  return {
    projectId: obj.projectId,
    keyId: obj.keyId,
    route: obj.route,
    method: obj.method,
    statusCode: Number(obj.statusCode),
    user_api_latency: Number(obj.user_api_latency),
    cached: obj.cached === "true",
    latency: Number(obj.latency),
    origin: obj.origin === "null" ? null : obj.origin,
    timestamp: new Date(Number(obj.timestamp)) // explicit
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
