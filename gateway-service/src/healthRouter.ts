import express from "express";
import { redis } from "./configs/connectredis.js";
import { getLoadedProjectIds } from "./configs/gatewayConfig.js";

const healthRouter = express.Router();

healthRouter.get("/", async (req, res) => {
  const processAlive = process.uptime() > 0;

  const ProjectConfisLoaded = getLoadedProjectIds().length > 0;

  let redisAlive = false;
  try {
    await redis.ping();
    redisAlive = true;
  } catch (err) {
    console.error("Redis ping failed:", err);
  }

  if (processAlive && redisAlive && ProjectConfisLoaded) {
    return res
      .status(200)
      .json({
        status: "ok",
        message: "Service is healthy",
        processUptime: process.uptime(),
        loadedProjectConfigs: getLoadedProjectIds().length,
        redisStatus: "connected",
      });
  } else {
    return res
      .status(503)
      .json({
        status: "error",
        message: "Service is unhealthy",
        processUptime: process.uptime(),
        loadedProjectConfigs: getLoadedProjectIds().length,
        redisStatus: redisAlive ? "connected" : "disconnected",
      });
  }
});

export { healthRouter };
