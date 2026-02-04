import express from "express";
import { APIProject } from "../models/Project.model.js";
import { Route } from "../models/Route.model.js";
import { APIKey } from "../models/Apikey.model.js";

export const gatewayConfigRouter = express.Router();

/**
 * GET /internal/gateway/config
 * Returns compiled gateway configuration for ALL active projects
 *
 * This endpoint is INTERNAL ONLY.
 */

gatewayConfigRouter.get("/gateway/config", async (req, res) => {
  try {
    // Internal admin secret check
    if (
      !req.headers["internal-admin-secret"] ||
      req.headers["internal-admin-secret"] !== process.env.INTERNAL_ADMIN_SECRET
    ) {
      // console.log(process.env.INTERNAL_ADMIN_SECRET);
      return res.status(403).json({ error: "Forbidden" });
    }

    // get active projects
    const projects = await APIProject.find({ status: "active" })
      .select("projectId originUrl allowedOrigins rateLimit status")
      .lean();

    if (!projects.length) {
      return res.json({ projects: [] });
    }

    const projectIds = projects.map((p) => p.projectId);

    // get routes 
    const routes = await Route.find({
      projectId: { $in: projectIds },
    })
      .select("projectId method path cacheEnabled cacheTTL")
      .lean();

    // get api keys
    const apiKeys = await APIKey.find({
      projectId: { $in: projectIds },
      keystatus: "active",
    })
      .select("_id projectId key label")
      .lean();

    // Group routes by project
    const routesByProject = {};
    for (const r of routes) {
      if (!routesByProject[r.projectId]) {
        routesByProject[r.projectId] = [];
      }
      routesByProject[r.projectId].push({
        method: r.method,
        path: r.path,
        cacheEnabled: r.cacheEnabled,
        cacheTTL: r.cacheTTL,
      });
    }

    // Group keys by project
    const keysByProject = {};
    for (const k of apiKeys) {
      if (!keysByProject[k.projectId]) {
        keysByProject[k.projectId] = [];
      }
      keysByProject[k.projectId].push({
        keyId: k._id,
        key: k.key,
        label: k.label,
        active: true,
      });
    }

    // Build gateway configs
    const gatewayProjects = projects.map((project) => ({
      projectId: project.projectId,
      originUrl: project.originUrl,
      status: project.status,
      allowedOrigins: project.allowedOrigins ?? [],
      rateLimit: project.rateLimit ?? 0,
      routes: routesByProject[project.projectId] ?? [],
      apiKeys: keysByProject[project.projectId] ?? [],
    }));

    return res.json({ projects: gatewayProjects });
  } catch (err) {
    console.error("Gateway config build failed:", err.message);
    return res.status(500).json({
      error: "Failed to build gateway config",
    });
  }
});
