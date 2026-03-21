"use client";

import { Clock } from "lucide-react";

export default function LatencyBreakdown({ data }: { data: any }) {
  return (
    <div className="flex flex-col h-full bg-card border-2 border-primary/10 overflow-hidden font-mono">
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <Clock size={14} className="text-amber-500" />
          <span className="text-[10px] font-bold tracking-[.4em] text-primary uppercase">
            LATENCY_DISTRIBUTION_LOG
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center text-center opacity-30 text-[10px] uppercase tracking-widest leading-relaxed">
        Computing percentile distributions...<br/>
        // P99: CALCULATING // P50: CALCULATING
      </div>
    </div>
  );
}
