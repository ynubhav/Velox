import express from "express";
import axios from "axios";
import https from "https";
import dns from "dns";

import {
  getProjectConfig,
  hasProjectConfig,
  GatewayRoute,
} from "./configs/gatewayConfig.js";

import { matchRoute } from "./utils/pathMatcher.js";
import { toSortedQueryString } from "./utils/querynormaliser.js";
import { redis } from "./configs/connectredis.js";
import { cachekeyhash } from "./utils/cacheKeyHasher.js";
import { emitRequestLog } from "./services/emit-request-log.js";
import { rateLimit } from "./utils/redisRatelimit.js";

export const proxyrouter = express.Router();

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

proxyrouter.use("/:projectId", async (req, res) => {
  const requestStart = Date.now();

  const { projectId } = req.params;
  const method = req.method.toUpperCase();
  const apiKey = req.get("x-safeapi-key") ?? "";
  const origin = req.get("origin") ?? "null";

  const pathOnly = req.url.split("?")[0];

  const normalizedQuery: Record<string, string> = {};
  for (const [k, v] of Object.entries(req.query)) {
    if (typeof v === "string") normalizedQuery[k] = v;
  }
  const queryString = toSortedQueryString(normalizedQuery);

  try {
    // service unavailable during startup
    if (!hasProjectConfig(projectId)) {
      return res.status(503).json({ message: "Gateway warming up" });
    }

    // Project retrieval & status check
    const project = getProjectConfig(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    if (project.status === "suspended") {
      return res.status(503).json({ message: "API suspended" });
    }

    //lets pass origin check even if no origins are set to allow all origins
    if (
      origin &&
      project.allowedOrigins.length > 0 &&
      !project.allowedOrigins.includes(origin)
    ) {
      return res.status(403).json({ message: "This Origin was not allowed" });
    }

    // api key validation
    const apiKeyHash = cachekeyhash(apiKey);
    const key = project.apiKeys.find((k) => k.key === apiKey && k.active);

    if (!key) {
      return res.status(403).json({ message: "Invalid API key" });
    }

    // dynamic route matching
    let matchedRoute: GatewayRoute | null = null;

    for (const r of project.routes) {
      if (r.method === method && matchRoute(r.path, pathOnly).matched) {
        matchedRoute = r;
        break;
      }
    }

    if (!matchedRoute) {
      return res.status(404).json({ message: "Invalid route" });
    }

    // rate limiting
    const rl = await rateLimit(
      redis,
      `${projectId}:${apiKeyHash}`,
      project.rateLimit,
      60,
    );

    if (!rl.allowed) {
      return res.status(429).json({
        message: "Rate limit exceeded",
        retryAfter: rl.retryAfter,
      });
    }

    // constructing target URL
    const targetUrl = `${project.originUrl}${pathOnly}${queryString}`;
    const parsed = new URL(targetUrl);

    if (parsed.protocol !== "https:") {
      return res.status(400).json({ error: "Only HTTPS targets allowed" });
    }

    // await new Promise<void>((resolve, reject) => {
    //   dns.lookup(parsed.hostname, (err) => (err ? reject(err) : resolve()));
    // });

    const cacheKey = cachekeyhash(`${method} ${targetUrl}`);

    // checking the redis cache
    const cacheStart = Date.now();
    const cachedValue = await redis.get(cacheKey);

    if (cachedValue) {
      const payload = JSON.parse(cachedValue);
      const cacheEnd = Date.now();

      res.status(payload.status).set(payload.headers).send(payload.data);

      emitRequestLog({
        projectId,
        keyId: key.keyId,
        route: matchedRoute.path,
        method,
        statusCode: payload.status,
        user_api_latency: cacheEnd - cacheStart,
        cached: true,
        latency: cacheEnd - requestStart,
        origin,
        timestamp: Date.now(),
      });

      return;
    }

    // forwarding the request to the upstream server
    const upstreamStart = Date.now();
    console.log(`Proxying request to: ${targetUrl}`);

    const {
      host,
      connection,
      "content-length": contentLength,
      "transfer-encoding": transferEncoding,
      "accept-encoding": acceptEncoding,
      expect,
      ...forwardHeaders
    } = req.headers;

    const axiosConfig: any = {
      method,
      url: targetUrl,
      headers: {
        ...forwardHeaders,
        host: parsed.hostname,
      },
      timeout: 10_000,
      validateStatus: () => true,
    };

    // only forward body for non-GET requests and if body is present
    if (method !== "GET" && req.body && Object.keys(req.body).length > 0) {
      axiosConfig.data = req.body;
    }

    const response = await axios(axiosConfig);

    const upstreamEnd = Date.now();
    //console.log(`Upstream response status: ${response.status}`);
    res.status(response.status).set(response.headers).send(response.data);

    //console.log(`Response sent to client.`);
    emitRequestLog({
      projectId,
      keyId: key.keyId,
      route: matchedRoute.path,
      method,
      statusCode: response.status,
      user_api_latency: upstreamEnd - upstreamStart,
      cached: false,
      latency: upstreamEnd - requestStart,
      origin,
      timestamp: Date.now(),
    });

    // caching the response in redis if cache is enabled for the route and status is 2xx
    if (
      matchedRoute.cacheEnabled &&
      response.status >= 200 &&
      response.status < 300
    ) {
      await redis.set(
        cacheKey,
        JSON.stringify({
          status: response.status,
          headers: response.headers,
          data: response.data,
        }),
        "EX",
        matchedRoute.cacheTTL,
      );
    }
  } catch (err: any) {
    console.error("Gateway error:", err.message);
    if (!res.headersSent) {
      res.status(502).json({ error: "Bad Gateway" });
    }
  }
});
