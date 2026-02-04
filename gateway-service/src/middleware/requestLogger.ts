import { Request, Response, NextFunction } from "express";
import { emitRequestLog } from "../services/emit-request-log.js";

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const start = process.hrtime.bigint();

  res.on("finish", () => {
    const end = process.hrtime.bigint();
    const latencyMs = Number(end - start) / 1_000_000;

    const projectId = (req as any).projectId;
    const keyId = (req as any).keyId;
    const route = (req as any).route;
    const userApiLatency = (res as any).user_api_latency;
    const cached = (res as any).cached ?? false;

    // check for required metadata before emitting log
    if (!projectId || !keyId || !route) {
      return;
    }

    emitRequestLog({
      projectId,
      keyId,
      route,
      method: req.method,
      statusCode: res.statusCode,
      user_api_latency: Number(userApiLatency) || 0,
      cached,
      latency: Math.round(latencyMs),
      origin: req.get("origin") ?? "null",
      timestamp: Date.now()
    }).catch(() => {
      // best-effort logging only
    });
  });

  next();
}
