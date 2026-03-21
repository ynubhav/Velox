"use client";

import { Terminal, Clock, Activity } from "lucide-react";

export default function RecentActivity({ logs }: { logs: any[] }) {
  return (
    <div className="flex flex-col h-full bg-card border-2 border-primary/10 overflow-hidden font-mono">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-primary/10 bg-primary/5">
        <Terminal size={14} className="text-accent" />
        <span className="text-[10px] font-bold tracking-[.4em] text-primary uppercase">
          LIVE_TELEMETRY_FEED
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
        {logs?.length === 0 ? (
          <div className="h-full flex items-center justify-center opacity-20 text-[8px] uppercase tracking-widest text-center">
             // No_Recent_IO_Events
          </div>
        ) : (
          logs?.map((log, i) => (
            <div key={i} className="flex flex-col gap-1 border-l border-primary/20 pl-4 py-1 hover:border-accent transition-colors">
              <div className="flex items-center justify-between gap-4">
                <span className={`text-[10px] font-bold ${log.status >= 400 ? 'text-red-500' : 'text-emerald-500'} uppercase tracking-widest`}>
                  {log.method} {log.status}
                </span>
                <span className="text-[8px] font-bold text-muted-foreground/30 tabular-nums">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-[10px] text-primary/70 break-all font-bold">
                {log.path.toUpperCase()}
              </div>
              <div className="text-[8px] text-muted-foreground/40 uppercase tracking-widest">
                LATENCY: {log.latency}MS // ORIGIN: {log.ip || 'ANON_RELAY'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
