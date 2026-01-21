import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  if (!session || session.error === "RefreshAccessTokenError") {
    return NextResponse.json(
      { ok: false },
      { status: 401 }
    );
  }

  // If token was expired, it is NOW refreshed
  return NextResponse.json({ ok: true });
}
