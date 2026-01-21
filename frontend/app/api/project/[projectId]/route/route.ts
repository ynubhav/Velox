import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, context: any) {
  const { projectId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}/route`, "POST");
}
