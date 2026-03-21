"use client";

import { Activity, Clock, ShieldCheck, Zap } from "lucide-react";

export default function HealthSummary({ data }: { data: any }) {
  const stats = [
    { label: "REQUEST_VOLUME", value: data?.totalRequests || "0", icon: <Activity size={12}/> },
    { label: "SUCCESS_RATE", value: `${data?.successRate || "0"}%`, icon: <ShieldCheck size={12}/> },
    { label: "AVG_LATENCY", value: `${data?.avgLatency || "0"}MS`, icon: <Clock size={12}/> },
    { label: "CACHE_HIT", value: `${data?.cacheHitRate || "0"}%`, icon: <Zap size={12}/> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0 font-mono">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className="bg-card border-2 border-primary/10 p-5 space-y-3 hover:border-accent/40 transition-all group"
        >
          <div className="flex items-center gap-2 text-[8px] font-bold text-muted-foreground/40 uppercase tracking-[.3em] group-hover:text-accent/60">
            {stat.icon}
            {stat.label}
          </div>
          <div className="text-2xl font-bold text-primary tracking-tighter uppercase">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
