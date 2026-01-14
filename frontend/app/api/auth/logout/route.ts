import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token?.backendjwt) {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.backendjwt}`,
      },
    });
    console.log(response);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
