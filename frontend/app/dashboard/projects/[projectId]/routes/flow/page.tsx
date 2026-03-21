import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { RouteFlowChart } from "@/components/routes/route-flow-chart.client";
import { ChevronRight, Map, Terminal, Info } from "lucide-react";

type Params = {
  projectId: string;
};

type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export default async function RoutesFlowPage(context: { params: Promise<Params> }) {
  const { projectId } = await context.params;
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  
  if (!session || session.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  const Routes = await fetchRoutes(projectId, session);
  const routes: Route[] = [...Routes];

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
          <Link href={`/dashboard/projects/${projectId}/routes`} className="hover:text-primary transition-colors">ROUTES</Link>
          <ChevronRight size={10} />
          <span className="text-primary/60">LOGIC_FLOW</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.4em] uppercase">
              <Map size={14} />
              Spatial_Traffic_Architecture
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-primary uppercase leading-tight">
              Route_Flow
            </h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              Hierarchical visualization of mapped gateway endpoints and their inheritance chains. 
              Nodes represent URL segments; badges indicate configured operational policies.
            </p>
          </div>
        </div>
      </header>

      {/* Main Flow Chart Area */}
      <section className="flex-1 min-h-0 bg-card border-2 border-primary/10 relative overflow-hidden flex flex-col group">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-40 pointer-events-none z-10" />
        
        <RouteFlowChart routes={routes} />
        
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-muted/80 backdrop-blur-md opacity-40 group-hover:opacity-100 transition-opacity">
           <Info size={10} className="text-accent" />
           <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
             Canvas: Interactive // Use_Mouse_To_Pan_And_Zoom
           </span>
        </div>
      </section>

      <footer className="shrink-0 pt-4 flex items-center justify-between text-[8px] font-bold text-muted-foreground/20 uppercase tracking-[.4em]">
         <div>Visualization_Kernel: v2.0.1 (SVG_CORE)</div>
         <div>Active_Segments: {routes.length} // Memory_Load: Optimal</div>
      </footer>
    </div>
  );
}

async function fetchRoutes(projectId: string, session: Session) {
  const cookie = (await headers()).get("cookie");

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/project/${projectId}/routes`,
    {
      method: "GET",
      headers: {
        cookie: cookie ?? "",
        "Content-Type": "application/json",
        authorization: `${session?.token}`,
      },
      cache: "no-store",
    },
  );

  const data = await res.json();

  if (res.status === 401) {
    redirect("/login");
  }

  if (!res.ok) {
    throw new Error("Routes fetch failed");
  }

  if (!data?.Routes) {
    throw new Error("Malformed API response");
  }

  return data.Routes;
}
