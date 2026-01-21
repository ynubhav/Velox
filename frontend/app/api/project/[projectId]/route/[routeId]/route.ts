import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, context: any) {
  const { projectId, routeId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}/route/${routeId}`, "PATCH");
}

export async function DELETE(req: NextRequest, context: any) {
  const { projectId, routeId } = await context.params;
  return proxyToBackend(req, `/project/${projectId}/route/${routeId}`, "DELETE",);
}
