"use client";

import { useEffect } from "react";

export function useSessionHeartbeat() {
  useEffect(() => {
    const interval = setInterval(
      async () => {
        try {
          const res = await fetch("/api/auth/refresh-session", {
            credentials: "include",
          });
          console.log("Session heartbeat response status:", res.status,"at",new Date().toISOString());
          if (res.status === 401) {
            window.location.href = "/login";
          }
        } catch {
          // network issue → ignore
        }
      },
      5 * 60 * 1000,
    ); // every 5 minutes

    return () => clearInterval(interval);
  }, []);
}
