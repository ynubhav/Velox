import { NextRequest } from "next/server";
import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";

export async function GET(req: NextRequest, context: any) {
  const { projectId } = await context.params;
  return proxyToBackend(req, `/api_key/project/${projectId}`, "GET");
}
