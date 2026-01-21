import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
    token? :string;
    error?: "RefreshAccessTokenError"; // Allows the session callback to return/check for errors
  }

  interface User {
    id: string;
    role: string;
    backendjwt: string;
    refreshjwt: string;
    jwtexpiry: number;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    role: string;
    backendjwt: string;
    refreshjwt: string;
    jwtexpiry: number;
    error?: "RefreshAccessTokenError";
  }
}