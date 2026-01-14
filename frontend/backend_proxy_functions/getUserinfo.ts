"use server";

import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../lib/auth";

export default async function getuserinfo() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);
  if (!session) return { authenticated: false };
  return {
    id: session?.user.id,
    email: session?.user.email,
    name: session?.user.name,
    role: session?.user.role,
    authenticated: true,
  };
}
//returns the session data on server
