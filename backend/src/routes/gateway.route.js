import express from "express";
import axios from "axios";
import https from "https";
import dns from "dns";
import { APIProject } from "../models/Project.model.js";

const gatewayRouter = express.Router();

//  agent to ignore SSL issues (only temporary for dev)
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

gatewayRouter.use("/:projectId", async (req, res) => {
  const initTime = Date.now();
  const { projectId } = req.params;
  const method = req.method.toUpperCase();
  const apiKey = req.get("x-safeapi-key");
  const origin = req.get("origin");

  try {
    // validate project
    const project = await APIProject.findOne({ projectId }).select(
      "apiKey originUrl status allowedOrigins publicRoutes PrivateRoutes"
    );
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // check if origin allowed
    if (origin != undefined && !project.allowedOrigins.includes(origin)) {
      return res.status(503).json({ message: "origin not allowed" });
    }

    console.log(1);
    // authorize
    if (project.apiKey != apiKey) {
      return res.status(403).json({ error: "Invalid API key" });
    }
    console.log(2);
    // optional: restrict who can call the gateway
    if (origin && project.originUrl && !origin.startsWith(project.originUrl)) {
      return res.status(403).json({ error: "Unauthorized origin" });
    }
    console.log(3);
    // redirect only if active status
    if (project.status === "suspended") {
      return res.status(503).json({ message: "API Status : Suspended" });
    }
    // prepare redirect target
    const redirectUrl = `${project.originUrl}${req.url}`;
    console.log(redirectUrl);
    const parsed = new URL(redirectUrl);
    if (parsed.protocol !== "https:") {
      return res.status(400).json({ error: "Only HTTPS URLs allowed" });
    }
    console.log(4);
    // optional: DNS check to avoid SSRF
    await new Promise((resolve, reject) => {
      dns.lookup(parsed.hostname, (err, addr) => {
        if (err || !addr) reject("DNS lookup failed");
        else resolve();
      });
    });
    console.log(5);
    // build axios config
    const config = {
      method,
      url: redirectUrl,
      headers: {
        ...req.headers,
        host: parsed.hostname,
      },
      httpsAgent,
      timeout: 10000,
      validateStatus: () => true, // let non-200 responses pass through
    };
    console.log(6);
    if (method !== "GET" && req.body && Object.keys(req.body).length > 0) {
      config.data = req.body;
    }
    console.log(7);
    // send request
    const response = await axios(config);
    console.log(8);
    // forward response
    res.status(response.status).set(response.headers).send(response.data);

    // 🪵 future steps:
    // - log the request in Mongo
    // - store cache in Redis if cacheable
    // - increment usage counter
    const finalTime = Date.now();
    console.log(finalTime - initTime);
  } catch (err) {
    console.error("Gateway error:", err.message);
    res.status(502).json({
      error: "Bad Gateway — could not fetch target API",
      details: err.message,
    });
  }
});

export { gatewayRouter };
