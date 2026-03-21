import { Context, Next } from "hono";
import { emitRequestLog } from "../services/emit-request-log.js";

/**
 * requestLogger middleware for Hono
 * (Originally migrated from Express)
 */
export async function requestLogger(c: Context, next: Next) {
  const start = Date.now();
  
  await next();
  
  const end = Date.now();
  const latencyMs = end - start;

  // NOTE: Metadata like projectId and keyId must be set in context elsewhere
  // to be emitted here. Currently this is handled directly in the route handler.
  const projectId = c.get("projectId");
  const keyId = c.get("keyId");
  const route = c.get("route");
  const userApiLatency = (c.res as any).user_api_latency;
  const cached = (c.res as any).cached ?? false;

  if (projectId && keyId && route) {
    emitRequestLog({
      projectId,
      keyId,
      route,
      method: c.req.method,
      statusCode: c.res.status,
      user_api_latency: Number(userApiLatency) || 0,
      cached,
      latency: Math.round(latencyMs),
      origin: c.req.header("origin") ?? "null",
      timestamp: Date.now()
    }).catch(() => {
      // best-effort logging only
    });
  }
}
