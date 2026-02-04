import { Server } from "http";
import { redis } from "./configs/connectredis.js";

export function setupGracefulShutdown(server: Server) {
  let shuttingDown = false;

  const shutdown = async (signal: string) => {
    if (shuttingDown) return;
    shuttingDown = true;

    console.log(`${signal} received. Starting graceful shutdown...`);

    // close the server
    server.close(async () => {
      console.log("HTTP server closed");

      try {
        await redis.quit();
        console.log("Redis connection closed");
      } catch (err) {
        console.error("Redis shutdown error", err);
      }

      process.exit(0);
    });

    // exit forcefully after 10 seconds
    setTimeout(() => {
      console.error("⏱️ Forced shutdown");
      process.exit(1);
    }, 10_000);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}
