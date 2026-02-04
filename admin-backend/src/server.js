import express from "express";
import cors from "cors";
import logger from "node-color-log";
import { config } from "dotenv";
import { connectdb } from "./configs/connectdb.js";
import { appRouter } from "./routes/index.js";
import create_routes_cache from "./cache/create-routes-cache.js";
import { gatewayConfigRouter } from "./routes/gateway.route.js";
import { startGatewayLogConsumer } from "./workers/gatewayLogsConsumer.js";
import { healthRouter } from "./routes/health.route.js";
import { setupGracefulShutdown } from "./shutdown.js";

startGatewayLogConsumer();

config();

const app = express();

await connectdb();
await create_routes_cache();

app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
  const route = req.originalUrl;
  const method = req.method;
  logger.color('blue').log("🔃","route:",method,route,"request received at", new Date().toISOString());
  return next();
});

app.use('/', healthRouter)
app.use("/api", appRouter); // this backend's apis
app.use("/internal", gatewayConfigRouter); // gateway for apis

app.use(async (req, res) => {
  res.json({ message: "hello from api server" });
});

const server = app.listen(process.env.SERVER_PORT, () => {
  logger.color('green').log(`server running on port ${process.env.SERVER_PORT}`);
});

setupGracefulShutdown(server);      