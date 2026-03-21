"use client";

import { Activity } from "lucide-react";

export default function TrafficTrends({ data }: { data: any }) {
  return (
    <div className="flex flex-col h-full bg-card border-2 border-primary/10 overflow-hidden font-mono">
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <Activity size={14} className="text-blue-400" />
          <span className="text-[10px] font-bold tracking-[.4em] text-primary uppercase">
            TRAFFIC_VECTOR_ANALYSIS
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center text-center opacity-30 text-[10px] uppercase tracking-widest leading-relaxed">
        Visualizing throughput trends...<br/>
        // Core_Engine_v4.2_Feeds
      </div>
    </div>
  );
}
