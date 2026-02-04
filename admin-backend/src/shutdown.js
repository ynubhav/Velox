import mongoose from "mongoose";
import { redis } from "./configs/redis.js";

export function setupGracefulShutdown(server) {
  let shuttingDown = false;

  const shutdown = async (signal) => {
    if (shuttingDown) return;
    shuttingDown = true;

    console.log(`🛑 ${signal} received. Starting graceful shutdown...`);

    server.close(async () => {
      console.log("✅ HTTP server closed");

      try {
        await redis.quit();
        console.log("✅ Redis connection closed");
      } catch (err) {
        console.error("❌ Redis shutdown error", err);
      }

      try {
        await mongoose.disconnect();
        console.log("✅ MongoDB disconnected");
      } catch (err) {
        console.error("❌ MongoDB shutdown error", err);
      }

      process.exit(0);
    });

    setTimeout(() => {
      console.error("⏱️ Forced shutdown");
      process.exit(1);
    }, 10_000);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}
