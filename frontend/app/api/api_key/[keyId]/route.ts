import { NextRequest } from "next/server";
import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";

export async function DELETE(req: NextRequest, context: any) {
  const { keyId } = await context.params;
  return proxyToBackend(req, `/api_key/${keyId}`, "DELETE");
}