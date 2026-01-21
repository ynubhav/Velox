export type Project = {
  _id: string;
  name: string;
  projectId: string;
  proxyUrl: string;
  status: "active" | "suspended";
  createdAt: string;
  rateLimit: number;
  description: string;
  originUrl: string;
  allowedOrigins: string[];
};