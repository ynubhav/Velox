"use client";
import { RefreshAuthWatcher } from "@/components/authwatcher";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider refetchInterval={60} refetchOnWindowFocus={true}>
        <Toaster
          theme="system"
          position="top-center"
          hotkey={["alt", "t"]}
          toastOptions={{
            className:
              "font-mono border-2 border-primary/20 bg-card text-primary rounded-none shadow-[4px_4px_0px_0px_rgba(148,163,184,0.1)]",
            descriptionClassName:
              "text-muted-foreground text-[10px] uppercase tracking-widest",
            actionButtonStyle: {
              backgroundColor: "transparent",
              border: "1px solid var(--primary)",
              borderRadius: "0px",
              color: "var(--primary)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            },
            cancelButtonStyle: {
              backgroundColor: "transparent",
              borderRadius: "0px",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            },
          }}
        />
        <RefreshAuthWatcher />
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
}