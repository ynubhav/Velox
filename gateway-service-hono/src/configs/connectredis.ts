import { Redis } from "@upstash/redis";
import logger from "node-color-log";

export let redis: Redis;

export function initializeRedis(env: any) {
  if (!redis) {
    redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL || "",
      token: env.UPSTASH_REDIS_REST_TOKEN || "",
    });
  }
  return redis;
}
