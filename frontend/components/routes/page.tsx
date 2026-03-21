"use client";

import { Plus, Upload, Pencil, Trash2, Terminal, ChevronRight, Activity, Map, ArrowRight } from "lucide-react";
import { RouteRow } from "./routerow";
import { AddRouteSection } from "./addroute";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export default function RoutesPage({
  projectId,
  routes,
}: {
  projectId: string;
  routes: Route[];
}) {
  const router = useRouter();
  
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
          <span className="text-primary/60">ROUTES</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter text-primary uppercase">
              Routes_Registry
            </h1>
          </div>

          <button
            onClick={() => router.push(`/dashboard/projects/${projectId}/routes/flow`)}
            className="btn-secondary flex items-center gap-3 px-8 text-[10px]"
          >
            [ VIEW_LOGICAL_FLOW ]
            <ArrowRight size={14} />
          </button>
        </div>
      </header>

      {/* Routes Master Table */}
      <section className="flex-1 min-h-0 bg-card border-2 border-primary/10 relative overflow-hidden flex flex-col">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none z-10" />
        
        <div className="overflow-auto flex-1 custom-scrollbar overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
            <thead className="sticky top-0 bg-card/95 backdrop-blur-md z-20 border-b-2 border-primary/10">
              <tr className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <th className="px-6 py-4">Method_Verb</th>
                <th className="px-6 py-4">Internal_Path_Hook</th>
                <th className="px-6 py-4">Auth_Shield</th>
                <th className="px-6 py-4">Cache_Policy</th>
                <th className="px-6 py-4">TTL_MS</th>
                <th className="px-6 py-4 text-right">Operations</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-primary/5">
              {routes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <p className="text-[10px] text-muted-foreground/30 font-bold tracking-[.5em] uppercase">
                      // No_Active_Routes_Mapped
                    </p>
                  </td>
                </tr>
              ) : (
                routes.map((route, idx) => (
                  <RouteRow key={route._id} route={route} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer / Add Route Hook */}
      <footer className="shrink-0 pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-primary/5">
        <AddRouteSection projectId={projectId} />
        
        <div className="text-[8px] font-bold text-muted-foreground/20 uppercase tracking-[.4em]">
          Route_Engine_v4.2 // Active_Hooks: {routes.length}
        </div>
      </footer>
    </div>
  );
}
