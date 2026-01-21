import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("LOGOUT TOKEN", token);

  if (!token?.backendjwt) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  // OPTIONAL: you actually don't need this call
  await fetch(`${process.env.BACKEND_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.backendjwt}`,
    },
  });

  return NextResponse.json({ ok: true });
}
