// ===============================
// NEXTAUTH CONFIGURATION
// ===============================

import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth"

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  /**
   * ==========================
   * SESSION STRATEGY
   * ==========================
   */
  session: {
    strategy: "jwt",
  },

  /**
   * ==========================
   * AUTH PROVIDERS
   * ==========================
   */
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const response = await fetch(
          `${process.env.BACKEND_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        )

        const data = await response.json()

        if (!response.ok) {
          return null
        }

        return {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.usertype,
        }
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

  /**
   * ==========================
   * SECURITY
   * ==========================
   */
  secret: process.env.NEXTAUTH_SECRET,

  /**
   * ==========================
   * CALLBACKS
   * ==========================
   */
  callbacks: {
    /**
     * --------------------------
     * SIGN-IN CALLBACK (1️⃣ FIRST)
     * --------------------------
     */
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
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
        )
      const message = await response.json();
      if (!response.ok) 
      return false
      user.id = message.user.id;
      user.name = message.user.name;
      user.email = message.user.email;
      user.role = message.user.role;
      delete user.image;
      }

      return true
    },

    /**
     * --------------------------
     * JWT CALLBACK (2️⃣ SECOND)
     * --------------------------
     */
    async jwt({ token, user }) {
      if (user) {
        console.log(user)
        token.userId = user.id
        token.name = user.name
        token.email = user.email
        token.role = user.role
      }

      return token
    },

    /**
     * --------------------------
     * SESSION CALLBACK (3️⃣ THIRD)
     * --------------------------
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.role = token.role as string
      }

      return session
    },
  },

  /**
   * ==========================
   * CUSTOM PAGES
   * ==========================
   */
  pages: {
    signIn: "/login",
  },
}
