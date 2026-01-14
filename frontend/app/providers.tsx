"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={60} refetchOnWindowFocus={true} >
      <Toaster position="top-center" /> 
        {children}
    </SessionProvider>
  );
}