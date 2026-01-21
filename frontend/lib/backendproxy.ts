import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

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

  const headers: HeadersInit = {
    Authorization: `Bearer ${token.backendjwt}`,
  };

  if (method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  const body =
    method === "GET" ? undefined : await req.text();

  return fetch(`${process.env.BACKEND_URL}${path}`, {
    method,
    headers,
    body,
  });
}
