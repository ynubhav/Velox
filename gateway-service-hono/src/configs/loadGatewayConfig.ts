import axios from "axios";
import {
  GatewayProjectConfig,
  setProjectConfig,
  clearGatewayConfig,
  getLoadedProjectIds,
} from "./gatewayConfig.js";
import logger from "node-color-log";

const CONFIG_ENDPOINT = "/internal/gateway/config";
let lastLoaded = 0;
const REFRESH_INTERVAL = 30_000;

export async function loadGatewayConfig(env: any): Promise<void> {
  // Check if we need to refresh (simple TTL check)
  if (Date.now() - lastLoaded < REFRESH_INTERVAL && getLoadedProjectIds().length > 0) {
    return;
  }

  const ADMIN_BASE_URL = env.ADMIN_BASE_URL;
  const INTERNAL_ADMIN_SECRET = env.INTERNAL_ADMIN_SECRET;
  
  if (!ADMIN_BASE_URL) {
    logger.color('red').log("ADMIN_BASE_URL not set in env");
    return;
  }

  try {
    const res = await fetch(`${ADMIN_BASE_URL}${CONFIG_ENDPOINT}`, {
      signal: AbortSignal.timeout(5000),
      headers: {
        "Internal-Admin-Secret": INTERNAL_ADMIN_SECRET || "",
      },
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const data: any = await res.json();
    const projects: GatewayProjectConfig[] = data.projects;
    if (!Array.isArray(projects)) {
      throw new Error("Invalid gateway config payload");
    }

    clearGatewayConfig();
    for (const project of projects) {
      setProjectConfig({
        ...project,
        updatedAt: Date.now(),
      });
    }

    lastLoaded = Date.now();
    logger.color('green').log(`🔄 Gateway config loaded (${projects.length} projects)`);
  } catch (err: any) {
    logger.color('red').log("Failed to load gateway config: " + err.message);
  }
}

// startGatewayConfigLoader is removed as it doesn't work in Workers global scope
