import { Hono } from "hono";
// import axios from "axios";
// import https from "https";
// import dns from "dns";

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

export const proxyrouter = new Hono();

// const httpsAgent = new https.Agent({ rejectUnauthorized: false });

proxyrouter.all("/:projectId/*", async (c) => {
  const requestStart = Date.now();

  const projectId = c.req.param("projectId");
  const method = c.req.method.toUpperCase();
  const apiKey = c.req.header("x-safeapi-key") ?? "";
  const origin = c.req.header("origin") ?? "null";

  // Parse path without query to match routing rules
  const fullUrl = new URL(c.req.url);
  const pathOnly = fullUrl.pathname.replace(`/${projectId}`, "");

  const normalizedQuery: Record<string, string> = c.req.query();
  const queryString = toSortedQueryString(normalizedQuery);

  try {
    // service unavailable during startup
    if (!hasProjectConfig(projectId)) {
      return c.json({ message: "Gateway warming up" }, 503);
    }

    // Project retrieval & status check
    const project = getProjectConfig(projectId);
    if (!project) {
      return c.json({ error: "Project not found" }, 404);
    }

    if (project.status === "suspended") {
      return c.json({ message: "API suspended" }, 503);
    }

    //lets pass origin check even if no origins are set to allow all origins
    if (
      origin && origin !== "null" &&
      project.allowedOrigins.length > 0 &&
      !project.allowedOrigins.includes(origin)
    ) {
      return c.json({ message: "This Origin was not allowed" }, 403);
    }

    // api key validation
    const apiKeyHash = cachekeyhash(apiKey);
    const key = project.apiKeys.find((k) => k.key === apiKey && k.active);

    if (!key) {
      return c.json({ message: "Invalid API key" }, 403);
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
      return c.json({ message: "Invalid route" }, 404);
    }

    // rate limiting
    const rl = await rateLimit(
      redis,
      `${projectId}:${apiKeyHash}`,
      project.rateLimit,
      60,
    );

    if (!rl.allowed) {
      return c.json({
        message: "Rate limit exceeded",
        retryAfter: rl.retryAfter,
      }, 429);
    }

    // constructing target URL
    const targetUrl = `${project.originUrl}${pathOnly}${queryString}`;
    const parsed = new URL(targetUrl);

    if (parsed.protocol !== "https:") {
      return c.json({ error: "Only HTTPS targets allowed" }, 400);
    }

    // await new Promise<void>((resolve, reject) => {
    //   dns.lookup(parsed.hostname, (err) => (err ? reject(err) : resolve()));
    // });

    const cacheKey = cachekeyhash(`${method} ${targetUrl}`);

    // checking the redis cache
    const cacheStart = Date.now();
    const cachedValue = await redis.get(cacheKey);

    if (cachedValue) {
      const payload = typeof cachedValue === "string" ? JSON.parse(cachedValue) : cachedValue;
      const cacheEnd = Date.now();

      // Setting headers to Hono response
      for (const [key, val] of Object.entries(payload.headers)) {
        if (typeof val === "string") {
          c.header(key, val);
        }
      }

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

      return c.body(payload.data, payload.status);
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
    } = c.req.header();

    // forwarding the request using native fetch (Workers compatible)
    const options: RequestInit = {
      method,
      headers: {
        ...forwardHeaders,
        host: parsed.hostname,
      },
      signal: AbortSignal.timeout(10_000),
    };

    if (method !== "GET") {
      try {
        const bodyContent = await c.req.arrayBuffer();
        if (bodyContent && bodyContent.byteLength > 0) {
          options.body = bodyContent;
        }
      } catch (e) {
        // Body was likely empty
      }
    }

    const response = await fetch(targetUrl, options);

    const upstreamEnd = Date.now();
    //console.log(`Upstream response status: ${response.status}`);
    
    // Setting headers to Hono response
    response.headers.forEach((val, key) => {
        c.header(key, val);
    });

    const data = await response.arrayBuffer();

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
      // For caching we convert buffer to something serializable
      const decoder = new TextDecoder();
      const stringData = decoder.decode(data);
      
      const headersObj: Record<string, string> = {};
      response.headers.forEach((v, k) => { headersObj[k] = v; });

      await redis.set(
        cacheKey,
        JSON.stringify({
          status: response.status,
          headers: headersObj,
          data: stringData,
        }),
        { ex: matchedRoute.cacheTTL }
      );
    }
    
    return c.body(data, response.status as any);
  } catch (err: any) {
    console.error("Gateway error:", err.message);
    return c.json({ error: "Bad Gateway", message: err.message }, 502);
  }
});
