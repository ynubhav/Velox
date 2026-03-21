"use client";

import { Logout } from "@/lib/logout";
import { LogOut, Terminal, User } from "lucide-react";
import { toast } from "sonner";

export function Dashnavbar() {
  return (
    <nav className="px-6 py-4 w-full flex justify-between items-center bg-card border-b-2 border-primary/10 font-mono">
      <div className="flex items-center gap-3">
        <div className="bg-accent/10 p-1.5 border border-accent/20">
          <Terminal size={18} className="text-accent" />
        </div>
        <p className="text-sm font-bold tracking-[.3em] text-primary uppercase">
          Velox // Control_Center
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
           <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
           System_Status: Optimal
        </div>

        <button
          onClick={() =>
            toast("TERMINATE_SESSION_COMMAND", {
              description: "Are you sure you want to end this connection?",
              action: {
                label: "[ CONFIRM ]",
                onClick: async () => await Logout(),
              },
              cancel: {
                label: "[ CANCEL ]",
                onClick: async () => {},
              },
            })
          }
          className="btn-secondary flex items-center gap-2 text-[10px] py-2"
        >
          <LogOut size={14} />
          [ LOGOUT ]
        </button>
      </div>
    </nav>
  );
}
