import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (!response.ok) return null;

        // Return object must match the 'User' interface defined in d.ts
        return {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.usertype,
          backendjwt: data.token,
          refreshjwt: data.refreshToken,
          jwtexpiry: Date.now() + 5 * 60 * 1000,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/auth/${account?.provider}_auth`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: user.email,
                name: user.name,
                provider: account?.provider,
                providerId: account?.providerAccountId,
              }),
            }
          );

          const message = await response.json();
          if (!response.ok) return false;

          user.id = message.user.id;
          user.role = message.user.role;
          user.backendjwt = message.token;
          user.refreshjwt = message.refreshToken;
          user.jwtexpiry = Date.now() + 15 * 60 * 1000;
        } catch (error) {
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          userId: user.id,
          role: user.role,
          backendjwt: user.backendjwt,
          refreshjwt: user.refreshjwt,
          jwtexpiry: user.jwtexpiry,
        };
      }

      // Check if token is still valid
      if (Date.now() < token.jwtexpiry) {
        return token;
      }

      // Refresh token
      try {
        const res = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: token.refreshjwt }),
        });

        const data = await res.json();
        if (!res.ok) throw data;

        return {
          ...token,
          backendjwt: data.token,
          refreshjwt: data.refreshToken ?? token.refreshjwt, // Fallback to old refresh token if not provided
          jwtexpiry: Date.now() + 15 * 60 * 1000,
        };
      } catch (error) {
        return { ...token, error: "RefreshAccessTokenError" as const };
      }
    },

    async session({ session, token }) {
      // Pass data from token to session
      session.user.id = token.userId;
      session.user.role = token.role;
      session.token = token.backendjwt;
      session.error = token.error;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
