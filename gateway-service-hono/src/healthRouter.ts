import { Hono } from "hono";
import { redis } from "./configs/connectredis.js";
import { getLoadedProjectIds } from "./configs/gatewayConfig.js";

const healthRouter = new Hono();

healthRouter.get("/", async (c) => {
  const ProjectConfisLoaded = getLoadedProjectIds().length > 0;

  let redisAlive = false;
  try {
    await redis.ping();
    redisAlive = true;
  } catch (err) {
    console.error("Redis ping failed:", err);
  }

  if (redisAlive && ProjectConfisLoaded) {
    return c.json({
      status: "ok",
      message: "Service is healthy",
      loadedProjectConfigs: getLoadedProjectIds().length,
      redisStatus: "connected",
    }, 200);
  } else {
    return c.json({
      status: "error",
      message: "Service is unhealthy",
      loadedProjectConfigs: getLoadedProjectIds().length,
      redisStatus: redisAlive ? "connected" : "disconnected",
    }, 503);
  }
});

export { healthRouter };
