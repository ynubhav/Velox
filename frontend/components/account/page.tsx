"use client";

import { Logout } from "@/lib/logout";
import { LogOut, User, Mail, Shield, ShieldCheck, Activity } from "lucide-react";
import { Session } from "next-auth";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function AccountPage({ session }: { session: Session }) {
  const handlelogout = async () => {
    toast("TERMINATE SESSION?", {
      description: "You will be signed out of the current node.",
      action: {
        label: "TERMINATE",
        onClick: async () => await Logout(),
      },
      cancel: {
        label: "CANCEL",
        onClick: () => {},
      },
      position: "top-center",
      richColors: true,
    });
  };

  const accountDetails = [
    { label: "USER_ID", value: session.user.id || "N/A", icon: <User size={16} /> },
    { label: "IDENTITY", value: session.user.name, icon: <User size={16} /> },
    { label: "COMM_CHANNEL", value: session.user.email, icon: <Mail size={16} /> },
    { label: "AUTH_LEVEL", value: session.user.role, icon: <ShieldCheck size={16} /> },
  ];

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center p-4 font-mono">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full border-2 border-primary/20 bg-card shadow-[10px_10px_0px_0px_rgba(148,163,184,0.1)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="bg-primary/10 border-b-2 border-primary/20 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] text-primary">SESSION_ACTIVE: node_042</span>
          </div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
            {new Date().toISOString().split('T')[0]}
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8 space-y-8">
          <div className="flex items-center gap-6 mb-10 pb-6 border-b border-primary/10">
            <div className="h-20 w-20 border-2 border-accent flex items-center justify-center text-4xl font-bold text-accent bg-accent/5">
              {session.user.name?.[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter text-primary uppercase">
                {session.user.name}
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                // System Operator // {session.user.role}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accountDetails.map((detail) => (
              <div key={detail.label} className="p-4 border border-primary/10 bg-muted/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-2">
                  {detail.icon}
                  {detail.label}
                </div>
                <div className="text-sm text-primary/80 truncate font-bold">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          {/* Danger Zone */}
          <div className="mt-12 pt-8 border-t-2 border-red-900/20">
            <div className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <Activity size={12} />
              DANGER_ZONE: CRITICAL_ACTIONS
            </div>
            <div className="p-6 border-2 border-red-900/30 bg-red-900/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-red-400/70 uppercase leading-relaxed max-w-sm">
                Warning: Terminating this session will invalidate all local cache and authentication tokens.
              </div>
              <button
                onClick={handlelogout}
                className="flex gap-3 items-center px-6 py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-foreground transition-all text-xs font-bold uppercase tracking-widest"
              >
                <LogOut size={16} />
                TERMINATE_LOG
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-muted text-[8px] text-muted-foreground/30 flex justify-between items-center border-t border-primary/10">
          <span>MD5_HASH: {Math.random().toString(36).substring(7).toUpperCase()}</span>
          <span>ENCRYPTION: AES-256-GCM</span>
        </div>
      </motion.div>
    </div>
  );
}
