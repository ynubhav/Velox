import axios from "axios";
import {
  GatewayProjectConfig,
  setProjectConfig,
  clearGatewayConfig,
  getLoadedProjectIds,
} from "./gatewayConfig.js";
import logger from "node-color-log";

const CONFIG_ENDPOINT = "/internal/gateway/config";
const REFRESH_INTERVAL = 30_000;

export async function loadGatewayConfig(): Promise<void> {
  const ADMIN_BASE_URL = process.env.ADMIN_BASE_URL;
  const INTERNAL_ADMIN_SECRET = process.env.INTERNAL_ADMIN_SECRET;
  if (!ADMIN_BASE_URL) {
    logger.color('red').log("ADMIN_BASE_URL not set");
    return;
  }

  try {
    const res = await axios.get(`${ADMIN_BASE_URL}${CONFIG_ENDPOINT}`, {
      timeout: 5000,
      headers: {
        "Internal-Admin-Secret": INTERNAL_ADMIN_SECRET || "",
      },
    });

    const projects: GatewayProjectConfig[] = res.data.projects;
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

    logger.color('green').log(`🔄 Gateway config loaded (${projects.length} projects)`);
  } catch (err: any) {
    logger.color('red').log("Failed to load gateway config:", err.message);
    logger.color('yellow').log("Using last known config:", getLoadedProjectIds());
  }
}

export function startGatewayConfigLoader(): void {
  loadGatewayConfig();
  setInterval(loadGatewayConfig, REFRESH_INTERVAL);
}
