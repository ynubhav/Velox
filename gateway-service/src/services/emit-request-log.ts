import { redis } from "../configs/connectredis.js";

const STREAM_KEY = "gateway:request-logs";

type GatewayRequestLog = {
  projectId: string;
  keyId: string;
  route: string;
  method: string;
  statusCode: number;
  user_api_latency: number;
  cached: boolean;
  latency: number;
  origin: string | null;
  timestamp: number;
};

export async function emitRequestLog(log: GatewayRequestLog) {
  try {
    await redis.xadd(
      STREAM_KEY,
      "*",
      "projectId", log.projectId,
      "keyId", log.keyId,
      "route", log.route,
      "method", log.method,
      "statusCode", String(log.statusCode),
      "user_api_latency", String(log.user_api_latency),
      "cached", log.cached ? "true" : "false",
      "latency", String(log.latency),
      "origin", log.origin ?? "null",
      "timestamp", Number(log.timestamp)
    );
  } catch {
    // error handling is intentionally omitted to avoid impacting request flow
  }
}
