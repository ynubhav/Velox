import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export async function proxyToBackend(
  req: NextRequest,
  path: string,
  method: Method
) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.backendjwt) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body =
    method === "GET" || method === "DELETE"
      ? undefined
      : await req.text();

  const backendRes = await fetch(`${process.env.BACKEND_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token.backendjwt}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body,
  });

  const responseBody = await backendRes.arrayBuffer();

  const headers = new Headers(backendRes.headers);

  // Kill compression-related headers
  headers.delete("content-encoding");
  headers.delete("content-length");

  return new Response(responseBody, {
    status: backendRes.status,
    headers,
  });
}
