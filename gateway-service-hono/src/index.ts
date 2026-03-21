// import * as dotenv from "dotenv";
// dotenv.config();

import { Hono } from "hono";
import { cors } from "hono/cors";
// import { serve } from "@hono/node-server";
import logger from "node-color-log";
import { proxyrouter } from "./router.js";
import { loadGatewayConfig } from "./configs/loadGatewayConfig.js";
import { healthRouter } from "./healthRouter.js";
import { initializeRedis } from "./configs/connectredis.js";

const app = new Hono();

app.use('*', cors());

// Setup middleware for initialization (Workers style)
app.use('*', async (c, next) => {
  // Initialize Redis with env bindings
  initializeRedis(c.env);
  
  // Load config if needed (now uses env from context)
  await loadGatewayConfig(c.env);
  
  await next();
});

// health check route
app.route('/_health', healthRouter);

// gateway router
app.route('/', proxyrouter);

// In Cloudflare Workers, we export the app
export default app;