"use client";

import { useSessionHeartbeat } from "@/hooks/SessionHeartbeat";

export default function DashboardClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useSessionHeartbeat();

  return <>{children}</>;
}
