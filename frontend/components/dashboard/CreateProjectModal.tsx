"use client";

import { useState } from "react";
import { X, Terminal, Rocket, AlertTriangle, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  session: Session;
};

export function CreateProjectModal({ open, onClose, session }: Props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [originUrl, setOriginUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  async function handleCreate() {
    setError(null);

    if (!name || !originUrl) {
      setError("VALIDATION_ERROR: NAME_AND_ORIGIN_REQUIRED");
      return;
    }

    if (!originUrl.startsWith("https://")) {
      setError("PROTOCOL_ERROR: HTTPS_REQUIRED_FOR_ORIGIN");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          originUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "PROVISION_FAILED: SYSTEM_IO_ERROR");
      }

      onClose();
      router.push(`/dashboard/projects/${data.projectId}`);
    } catch (err: any) {
      setError(err.message.toUpperCase().replace(/ /g, "_"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-mono">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-lg bg-card border-2 border-primary/20 shadow-[20px_20px_0px_0px_rgba(148,163,184,0.05)] relative z-10 overflow-hidden"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none" />

          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-primary/20 bg-primary/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-accent" />
              <span className="text-[10px] font-bold tracking-[.3em] text-primary uppercase">
                [ INITIALIZE_NEW_PROJECT ]
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-red-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Form Fields */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                  Field: Project_Identifier*
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="MY_NEW_GATEWAY"
                  className="w-full bg-muted border-2 border-primary/10 p-3 text-sm text-primary placeholder:text-muted-foreground/20 focus:border-accent/50 outline-none transition-colors rounded-none"
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                  Field: System_Description
                </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="OPTIONAL_METADATA"
                  className="w-full bg-muted border-2 border-primary/10 p-3 text-sm text-primary placeholder:text-muted-foreground/20 focus:border-accent/50 outline-none transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pr-1">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                    Field: Upstream_Origin_URL*
                  </label>
                  <span className="text-[8px] text-accent/50 font-bold uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck size={8} /> PROTOCOL: HTTPS
                  </span>
                </div>
                <input
                  value={originUrl}
                  onChange={(e) => setOriginUrl(e.target.value)}
                  placeholder="HTTPS://API.PROD.INTERNAL"
                  className="w-full bg-muted border-2 border-primary/10 p-3 text-sm text-primary placeholder:text-muted-foreground/20 focus:border-accent/50 outline-none transition-colors rounded-none font-mono"
                />
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 border border-red-500/30 bg-red-500/5 flex items-center gap-3"
                >
                  <AlertTriangle size={14} className="text-red-500 shrink-0" />
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    {error}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onClose}
                disabled={loading}
                className="btn-secondary flex-1 py-4 text-[10px]"
              >
                [ ABORT_SESSION ]
              </button>
              <button
                onClick={handleCreate}
                disabled={loading}
                className="btn-primary flex-1 py-4 text-[10px] flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>SYSTEM_INITIALIZING...</>
                ) : (
                  <>
                    [ EXECUTE_PROVISION ]
                    <Rocket size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-[9px] text-muted-foreground/40 text-center uppercase tracking-[0.4em]">
              Velox_Provisioner_v1.0.42 // Memory_Isolated: True
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
