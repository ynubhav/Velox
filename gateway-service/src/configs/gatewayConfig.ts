/**
 * Gateway-owned project configuration.
 * This is a READ-ONLY snapshot pushed/pulled from admin.
 */

export type GatewayApiKey = {
  keyId: string;         // unique key identifier // object id in admin
  key: string;          // hashed API key
  label?: string;
  active: boolean;
};

export type GatewayRoute = {
  method: string;         // GET | POST | PUT | DELETE
  path: string;          // /users/:id
  cacheEnabled: boolean;
  cacheTTL: number;      // seconds
};

export type GatewayProjectConfig = {
  projectId: string;
  originUrl: string;

  status: "active" | "suspended";

  allowedOrigins: string[];
  rateLimit: number;     // requests per window

  apiKeys: GatewayApiKey[];
  routes: GatewayRoute[];

  updatedAt?: number;
};

/**
 * In-memory gateway config cache
 * Keyed by projectId
 */

const configCache = new Map<string, GatewayProjectConfig>();

export function getProjectConfig(
  projectId: string
): GatewayProjectConfig | undefined {
  return configCache.get(projectId);
}

export function setProjectConfig(
  config: GatewayProjectConfig
): void {
  configCache.set(config.projectId, config);
}

export function deleteProjectConfig(projectId: string): void {
  configCache.delete(projectId);
}

export function hasProjectConfig(projectId: string): boolean {
  return configCache.has(projectId);
}

export function clearGatewayConfig(): void {
  configCache.clear();
}

export function getLoadedProjectIds(): string[] {
  return Array.from(configCache.keys());
}
