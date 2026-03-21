type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
};

export async function rateLimit(
  redis: any,
  identifier: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const key = `ratelimit:${identifier}`;

  try {
    const pipeline = redis.pipeline();
    pipeline.incr(key);
    pipeline.ttl(key);

    const [current, ttl] = await pipeline.exec() as [number, number];

    // set expiry on first hit or if key was deleted
    if (current === 1 || ttl === -1) {
      await redis.expire(key, windowSeconds);
    }

    if (current > limit) {
      return {
        allowed: false,
        remaining: 0,
        retryAfter: ttl > 0 ? ttl : windowSeconds
      };
    }

    return {
      allowed: true,
      remaining: Math.max(limit - current, 0),
      retryAfter: ttl > 0 ? ttl : windowSeconds
    };
  } catch (err) {
    return {
      allowed: true,
      remaining: limit,
      retryAfter: 0
    };
  }
}
