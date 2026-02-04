import express from "express";
import mongoose from "mongoose";
import { redis } from "../configs/redis.js";

const healthRouter=express.Router();

healthRouter.get("/_health", async (_req, res) => {
  let mongo = false;
  let redisOk = false;

  // mongo check
  mongo = mongoose.connection.readyState === 1;

  // redis check
  try {
    await redis.ping();
    redisOk = true;
  } catch {
    redisOk = false;
  }

  const healthy = mongo && redisOk;

  res.status(healthy ? 200 : 503).json({
    status: healthy ? "ok" : "degraded",
    mongo,
    redis: redisOk,
    timestamp: Date.now()
  });
});

export { healthRouter };
