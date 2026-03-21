"use client";

import { useState } from "react";
import { Plus, Terminal, Activity, ShieldCheck, Zap, ArrowRight, Loader } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function AddRouteSection({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [method, setMethod] = useState("GET");
  const [path, setPath] = useState("");
  const [authRequired, setAuthRequired] = useState(true);
  const [cacheEnabled, setCacheEnabled] = useState(false);
  const [ttl, setTtl] = useState(3600);

  const handleAddRoute = async () => {
    if (!path.startsWith("/")) {
      return toast.error("VALIDATION_ERROR: PATH_MUST_START_WITH_SLASH");
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/project/${projectId}/route`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method, path, authRequired, cacheEnabled, ttl }),
      });

      if (!response.ok) throw new Error("UPSTREAM_PROVISION_ERROR");

      toast.success("ROUTE_MAPPED_SUCCESSFULLY");
      setPath("");
      router.refresh();
    } catch (err) {
      toast.error("DEPLOYMENT_FAILED: SYSTEM_IO_REJECTED");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-card border-2 border-primary/10 p-6 relative group overflow-hidden">
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-5">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-accent" />
      </div>

      <div className="flex flex-col lg:flex-row items-end gap-6 relative z-10">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {/* Method */}
          <div className="space-y-2">
            <label className="text-[8px] font-bold text-muted-foreground uppercase tracking-[.3em] pl-1">VERB_METHOD</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-muted border-2 border-primary/5 p-3 text-[10px] text-primary uppercase font-bold outline-none focus:border-accent/40 rounded-none appearance-none"
            >
              {["GET", "POST", "PUT", "DELETE", "PATCH"].map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Path */}
          <div className="lg:col-span-2 space-y-2">
            <label className="text-[8px] font-bold text-muted-foreground uppercase tracking-[.3em] pl-1">ENDPOINT_PATH_HOOK</label>
            <input
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="/V1/RESOURCES"
              className="w-full bg-muted border-2 border-primary/5 p-3 text-[10px] text-primary uppercase font-bold outline-none focus:border-accent/40 rounded-none placeholder:text-muted-foreground/10"
            />
          </div>

          {/* Toggle Flags */}
          <div className="lg:col-span-2 flex items-center gap-6 pt-6">
            <label
              className={`flex items-center gap-3 cursor-pointer group/toggle border-2 p-3 flex-1 transition-all ${authRequired ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-primary/5'}`}
              onClick={() => setAuthRequired(!authRequired)}
            >
              <div className={`w-3 h-3 border-2 ${authRequired ? 'bg-emerald-500 border-emerald-500' : 'border-primary/20'}`} />
              <span className={`text-[8px] font-bold tracking-[.2em] uppercase ${authRequired ? 'text-emerald-500' : 'text-muted-foreground'}`}>[ AUTH_SHIELD ]</span>
            </label>

            <label
              className={`flex items-center gap-3 cursor-pointer group/toggle border-2 p-3 flex-1 transition-all ${cacheEnabled ? 'border-accent/20 bg-accent/5' : 'border-primary/5'}`}
              onClick={() => setCacheEnabled(!cacheEnabled)}
            >
              <div className={`w-3 h-3 border-2 ${cacheEnabled ? 'bg-accent border-accent' : 'border-primary/20'}`} />
              <span className={`text-[8px] font-bold tracking-[.2em] uppercase ${cacheEnabled ? 'text-accent' : 'text-muted-foreground'}`}>[ ACCELERATE ]</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleAddRoute}
          disabled={loading || !path}
          className="btn-primary px-10 py-3.5 text-[10px] flex items-center gap-3 w-full lg:w-auto min-w-[180px] justify-center"
        >
          {loading ? (
            <><Loader size={14} className="animate-spin" /> PROVISIONING...</>
          ) : (
            <><Plus size={16} /> [ MAP_NEW_ROUTE ]</>
          )}
        </button>
      </div>

      {!cacheEnabled ? (
        <div className="mt-4 text-[8px] font-bold text-muted-foreground/20 uppercase tracking-widest pl-1">
           // Direct_Pipe: Latency governed by upstream origin.
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-4 text-[8px] font-bold text-accent uppercase tracking-widest pl-1">
          <Zap size={10} /> Edge_Caching_Active // TTL:
          <input
            type="number"
            value={ttl}
            onChange={(e) => setTtl(Number(e.target.value))}
            className="bg-transparent border-b border-accent/20 outline-none w-16 text-center"
          /> MS
        </div>
      )}
    </div>
  );
}
