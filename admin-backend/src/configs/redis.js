import Redis from "ioredis";
import logger from "node-color-log";

const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";

export const redis = new Redis.default(redisUrl, {
  maxRetriesPerRequest: 1,
  enableReadyCheck: true,
  lazyConnect: false,
});

redis.on("connect", () => {
  logger.color('green').log("✅ Redis connected");
});

redis.on("ready", () => {
  logger.color('green').log("🟢 Redis ready");
});

redis.on("error", (err) => {
  logger.color('red').log("🔴 Redis error:", err.message);
});

redis.on("reconnecting", () => {
  logger.color('yellow').log("♻️ Redis reconnecting...");
});
