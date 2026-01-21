import { NextRequest } from "next/server";
import { proxyToBackend } from "@/app/api/_utils/proxyToBackend";

export async function GET(req: NextRequest) {
  return proxyToBackend(req, "/project", "GET");
}

export async function POST(req: NextRequest) {
  return proxyToBackend(req, "/project", "POST");
}