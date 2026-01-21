import { NextRequest } from "next/server";
import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";

export async function GET(req: NextRequest, context: any) {
  const { projectId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}`, "GET");
}

export async function PUT(req: NextRequest, context: any) {
  const { projectId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}`, "PUT");
}

export async function DELETE(req: NextRequest, context: any) {
  const { projectId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}`, "DELETE");
}
