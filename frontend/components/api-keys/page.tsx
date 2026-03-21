"use client";

import { Plus, Trash2, ToggleLeft, ToggleRight, Loader, Key, ChevronRight, ShieldCheck, AlertTriangle } from "lucide-react";
import { ApiKeyRow } from "@/components/api-keys/apikeyrow";
import { ApiKey } from "./types";
import { GenerateKeyModal } from "@/components/api-keys/generateapi";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function ApiKeysPage({
  projectId,
  apiKeys,
}: {
  projectId: string;
  apiKeys: ApiKey[];
}) {
  const [label, setlabel] = useState<string>(""); 
  const [open, setopen] = useState(false); 
  const [loading, setloading] = useState(false);
  const [seen, setseen] = useState(false);
  const [apikey, setapikey] = useState("");
  const [newapilabel, setnewapilabel] = useState("");

  const handleCreateKey = async () => {
    if (label === "") return toast.error("VALIDATION_ERROR: LABEL_REQUIRED");

    setloading(true);
    try {
      const response = await fetch(`/api/api_key/generate/${projectId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });

      if (!response.ok) throw new Error("PROVISION_ERROR");

      const data = await response.json();
      setapikey(data.key_Info.apikey);
      setnewapilabel(data.key_Info.label);
      setseen(false);
      setopen(false);
      setlabel("");
      toast.success("IDENTITY_KEY_PROVISIONED_SUCCESSFULLY");
    } catch (err) {
      toast.error("PROVISION_FAILED: SYSTEM_REJECTION");
    } finally {
      setloading(false);
    }
  };

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
          <span className="text-primary/60">API_KEYS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter text-primary uppercase">
              Access_Credentials
            </h1>
          </div>

          <div className="flex gap-4">
            <AnimatePresence mode="wait">
              {!open ? (
                <motion.button
                  key="open-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setopen(true)}
                  className="btn-primary flex items-center gap-3 px-8 text-[10px] py-4"
                >
                  <Plus size={16} />
                  [ GENERATE_NEW_IDENTITY ]
                </motion.button>
              ) : (
                <motion.div 
                  key="input-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-2"
                >
                  <input
                    value={label}
                    onChange={(e) => setlabel(e.target.value)}
                    autoFocus
                    placeholder="INSTANCE_LABEL (e.g. PROD_SERVER_01)"
                    className="bg-muted border-2 border-primary/20 px-6 py-2 text-[10px] text-primary uppercase font-bold outline-none focus:border-accent/40 w-[300px]"
                  />
                  <button 
                    onClick={handleCreateKey} 
                    disabled={loading}
                    className="btn-primary px-8 text-[10px]"
                  >
                    {loading ? <Loader size={14} className="animate-spin" /> : "[ COMMIT ]"}
                  </button>
                  <button 
                    onClick={() => setopen(false)}
                    className="btn-secondary px-4 text-[10px]"
                  >
                    [ X ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Keys Master Table */}
      <section className="flex-1 min-h-0 bg-card border-2 border-primary/10 relative overflow-hidden flex flex-col">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none z-10" />
        
        <div className="overflow-auto flex-1 custom-scrollbar overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px] lg:min-w-0">
            <thead className="sticky top-0 bg-card/95 backdrop-blur-md z-20 border-b-2 border-primary/10">
              <tr className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <th className="px-6 py-4">Credential_Label</th>
                <th className="px-6 py-4">Status_Logic</th>
                <th className="px-6 py-4">Last_Access_Timestamp</th>
                <th className="px-6 py-4 text-right">Operations</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-primary/5">
              {!apiKeys || apiKeys.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center">
                    <p className="text-[10px] text-muted-foreground/30 font-bold tracking-[.5em] uppercase">
                      // No_Identity_Keys_Initialized
                    </p>
                  </td>
                </tr>
              ) : (
                apiKeys.map((key) => (
                  <ApiKeyRow key={key._id} apiKey={key} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal for showing generated key */}
      <AnimatePresence>
        {!seen && apikey && (
          <GenerateKeyModal 
            label={newapilabel} 
            apiKey={apikey} 
            onClose={() => {
              setapikey("");
              setseen(true);
            }} 
          />
        )}
      </AnimatePresence>
      
      <footer className="shrink-0 pt-4 flex items-center justify-between text-[8px] font-bold text-muted-foreground/20 uppercase tracking-[.4em]">
         <div>Integrity_Seal: AES-256-GCM</div>
         <div>Total_Active_Certs: {apiKeys?.length || 0}</div>
      </footer>
    </div>
  );
}
