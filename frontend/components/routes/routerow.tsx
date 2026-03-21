"use client";

import { Pencil, Trash2, Link as LinkIcon, Shield, Zap, Lock, Unlock, Clock } from "lucide-react";
import { motion } from "framer-motion";

type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export function RouteRow({ route }: { route: Route }) {
  const methodColors: Record<string, string> = {
    GET: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    POST: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    PUT: "text-amber-400 border-amber-400/20 bg-amber-400/5",
    DELETE: "text-red-400 border-red-400/20 bg-red-400/5",
    PATCH: "text-purple-400 border-purple-400/20 bg-purple-400/5",
  };

  return (
    <motion.tr 
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      className="group hover:bg-primary/5 transition-colors border-l-2 border-transparent hover:border-accent"
    >
      <td className="px-6 py-4">
        <span className={`text-[10px] font-bold px-3 py-1 border uppercase tracking-widest ${methodColors[route.method] || "text-zinc-400 border-zinc-400/20"}`}>
          {route.method}
        </span>
      </td>
      
      <td className="px-6 py-4 font-mono">
        <div className="flex items-center gap-2 group/text">
          <LinkIcon size={12} className="text-muted-foreground/30 group-hover/text:text-accent transition-colors" />
          <span className="text-sm font-bold text-primary tracking-tight">
            {route.path.toUpperCase()}
          </span>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {route.authRequired ? (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/20">
              <Lock size={10} /> SHIELD_ON
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-red-400/60 uppercase tracking-widest px-2 py-0.5 border border-red-400/10">
              <Unlock size={10} /> INSECURE
            </div>
          )}
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {route.cacheEnabled ? (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-0.5 border border-accent/20">
              <Zap size={10} /> ACCELERATED
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-muted-foreground/30 uppercase tracking-widest px-2 py-0.5 border border-primary/5">
              DIRECT_BYPASS
            </div>
          )}
        </div>
      </td>

      <td className="px-6 py-4">
        <span className="text-[10px] font-bold text-muted-foreground/60 tabular-nums uppercase tracking-widest">
           {route.cacheEnabled ? `${route.ttl || 0}MS` : "--"}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <button className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/5 transition-all">
            <Pencil size={14} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/5 transition-all">
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}
