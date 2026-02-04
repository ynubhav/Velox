export async function rateLimit(redis, identifier, limit, windowSeconds) {
  const key = `ratelimit:${identifier}`;
  
  const current = await redis.incr(key);

  if (current === 1) {
    // first hit start window
    await redis.expire(key, windowSeconds);
  }

  if (current > limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: await redis.ttl(key),
    };
  }

  return {
    allowed: true,
    remaining: limit - current,
    retryAfter: await redis.ttl(key),
  };
}
