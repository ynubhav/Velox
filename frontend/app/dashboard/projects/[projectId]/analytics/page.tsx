import CacheEfficiency from "@/components/analytics/cache-efficiency.server";
import Link from "next/link";
import HealthSummary from "@/components/analytics/health-summary.server";
import LatencyBreakdown from "@/components/analytics/latency-breakdown.server";
import RecentActivity from "@/components/analytics/recent-activity.server";
import TrafficTrends from "@/components/analytics/traffic-trends.server";
import { Suspense } from "react";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { ChevronRight, Activity, Terminal, Info } from "lucide-react";

async function getAnalyticsData(projectId: string) {
  try {
    const session: any = await getServerSession(NEXT_AUTH_CONFIG);
    if (!session) return null;
    
    // We import headers here so that we can pass cookies to local next API
    const { headers } = await import("next/headers");
    const cookie = (await headers()).get("cookie");
    const localApiUrl = process.env.NEXTAUTH_URL || "http://localhost:3000/";

    const res = await fetch(`${localApiUrl}api/project/${projectId}/analytics`, {
      method: "GET",
      headers: {
        cookie: cookie ?? "",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch analytics, code:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return null;
  }
}

export default async function AnalyticsPage(props: { params: { projectId: string } }) {
  const { projectId } = await props.params;
  const data = await getAnalyticsData(projectId);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-background font-mono px-6">
        <div className="p-8 border-2 border-red-500/20 bg-red-500/5 text-red-500 uppercase tracking-widest text-[10px] font-bold flex items-center gap-4">
           <Info size={16} />
           DATA_LINK_FAILURE: SOURCE_UNREACHABLE_OR_EMPTY
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background font-mono p-6 md:p-10 gap-8 overflow-hidden">
      {/* Navigation & Header */}
      <header className="space-y-6 shrink-0">
        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[.3em]">
          <Link href="/dashboard" className="hover:text-primary transition-colors">DASHBOARD</Link>
          <ChevronRight size={10} />
          <Link href="/dashboard" className="hover:text-primary transition-colors">PROJECTS</Link>
          <ChevronRight size={10} />
          <Link href={`/dashboard/projects/${projectId}`} className="hover:text-primary transition-colors">{projectId}</Link>
          <ChevronRight size={10} />
          <span className="text-primary/60">TELEMETRY</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter text-primary uppercase leading-tight">
              Telemetry_Ingestion
            </h1>
          </div>
        </div>
      </header>

      {/* KPI Blocks */}
      <HealthSummary data={data.kpis} />

      {/* Analytics Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0 overflow-y-auto lg:overflow-hidden pr-2 lg:pr-0">
        <div className="lg:col-span-1 min-h-[400px] lg:min-h-0 bg-card border-2 border-primary/10 overflow-hidden group">
          <RecentActivity logs={data.recentActivity} />
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-6 min-h-0">
          <div className="min-h-[300px] lg:min-h-0 bg-card border-2 border-primary/10 hover:border-accent/40 transition-colors">
            <TrafficTrends data={data.trafficTrends} />
          </div>
          <div className="min-h-[300px] lg:min-h-0 bg-card border-2 border-primary/10 hover:border-accent/40 transition-colors">
            <CacheEfficiency data={data.cacheEfficiency} />
          </div>
          <div className="md:col-span-2 min-h-[300px] lg:min-h-0 bg-card border-2 border-primary/10 hover:border-accent/40 transition-colors">
            <LatencyBreakdown data={data.latencyBreakdown} />
          </div>
        </div>
      </div>
      
      <footer className="shrink-0 pt-4 flex items-center justify-between text-[8px] font-bold text-muted-foreground/20 uppercase tracking-[.4em]">
         <div>Telemetry_Engine: v3.4.0 (GRAFANA_CORE_EMULATION)</div>
         <div>Ingestion_Status: ACTIVE // Sample_Rate: 1:1</div>
      </footer>
    </div>
  );
}
