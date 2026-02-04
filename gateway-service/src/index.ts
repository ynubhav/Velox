import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import logger from "node-color-log";
import { proxyrouter } from "./router.js";
import { startGatewayConfigLoader } from "./configs/loadGatewayConfig.js";
import { healthRouter } from "./healthRouter.js";
import { setupGracefulShutdown } from "./shutdown.js";

const app = express();

app.use(express.json());
app.use(cors());

// start background config loader
startGatewayConfigLoader();

// health check route
app.use('/_health',healthRouter);

// gateway router
app.use(proxyrouter);

const PORT = process.env.PORT || 7432;

const server = app.listen(PORT, () => {
  logger.color('green').log(`Velox API Gateway running on port ${PORT}`);
});

// gracefull shutdown 
setupGracefulShutdown(server);