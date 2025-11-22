import { redis } from "../configs/connectredis";

export const cache = {
  async get(key) {
    const value = await redis.get(key);
    return value ? JSON.parse(value) : null;
  },

  async set(key, value, ttlSeconds = 60) {
    await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
  },

  async del(key) {
    await redis.del(key);
  }
};

// helper key builders
const responseKey = (projectId, method, pathWithQuery) =>
  `safeapi:cache:${projectId}:${method}:${normalizeUrl(pathWithQuery)}`;

const keysSet = (projectId) => `safeapi:cache:keys:${projectId}`;
const channel = "safeapi:cache:channel";

export async function getCachedResponse(projectId, method, pathWithQuery) {
  const key = responseKey(projectId, method, pathWithQuery);
  const raw = await redis.get(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw); // {status, headers, body}
  } catch (e) {
    await redis.del(key); // corrupt -> drop
    return null;
  }
}

export async function setCachedResponse(projectId, method, pathWithQuery, responseObj, ttlSec) {
  const key = responseKey(projectId, method, pathWithQuery);
  const raw = JSON.stringify(responseObj);
  await redis.setex(key, ttlSec, raw);
  // track key for project invalidation
  await redis.sadd(keysSet(projectId), key);
  // optional: publish that cache key exists (for metrics)
}

export async function invalidateProjectCache(projectId) {
  const setKey = keysSet(projectId);
  // iterate and delete keys in batches:
  let cursor = 0;
  do {
    const [nextCursor, members] = await redis.sscan(setKey, cursor, "COUNT", 500);
    cursor = Number(nextCursor);
    if (members.length) {
      const pipe = redis.pipeline();
      members.forEach(k => pipe.del(k));
      pipe.del(setKey);
      await pipe.exec();
    }
  } while (cursor !== 0);
  // publish event so all gateways know (optional)
  await redis.publish(channel, JSON.stringify({ action: "invalidateProject", projectId }));
}

export async function invalidateCacheKey(key) {
  await redis.del(key);
  // also remove from any sets (if you stored them)
  // publish for sync
  await redis.publish(channel, JSON.stringify({ action: "invalidateKey", key }));
}

export function subscriberSetup(onMessage) {
  // if you want this instance to subscribe to invalidation
  const sub = new Redis(process.env.REDIS_URL);
  sub.subscribe(channel);
  sub.on("message", (_, msg) => {
    try {
      const data = JSON.parse(msg);
      onMessage(data);
    } catch {}
  });
  return sub;
}
