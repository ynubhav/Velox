"use client";

import { Project } from "@/types/client-types";
import {
  ArrowDownCircle,
  Edit,
  KeyRound,
  LucideMonitorPlay,
  Plus,
  Route,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Terminal,
  Activity,
  ShieldCheck,
  Globe,
  Clock,
  ExternalLink,
  ChevronRight,
  Copy,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  projectId: string;
  project: Project;
};

const rateLimitoptions = [10, 50, 100, 200];

export default function ProjectPage({ projectId, project }: Props) {
  const {
    name,
    description,
    proxyUrl,
    status,
    originUrl,
    rateLimit,
    allowedOrigins,
    createdAt,
  } = project;

  const isActive = status === "active";
  const requiredActions = 3; 
  const router = useRouter();
  const [saved, setSaved] = useState(true);

  const [initial, setInitial] = useState({
    allowedOrigins: allowedOrigins,
    description: description ?? "",
    rateLimit: rateLimit,
  });

  const [changes, setChanges] = useState({
    allowedOrigins: allowedOrigins,
    description: description ?? "",
    rateLimit: rateLimit,
  });

  const [currentAllowedOrigin, setCurrentAllowedOrigin] = useState("");

  const isDirty =
    changes.allowedOrigins !== initial.allowedOrigins ||
    changes.description !== initial.description ||
    changes.rateLimit !== initial.rateLimit;

  useEffect(() => {
    setInitial({
      allowedOrigins: allowedOrigins,
      description: description ?? "",
      rateLimit: rateLimit,
    });
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("METADATA_COPIED_TO_CLIPBOARD");
  };

  return (
    <div className="min-h-screen bg-background font-mono p-6 md:p-10 space-y-12 max-w-7xl mx-auto">
      {/* Breadcrumbs & Header */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[.3em]">
          <Link href="/dashboard" className="hover:text-primary transition-colors">DASHBOARD</Link>
          <ChevronRight size={10} />
          <Link href="/dashboard" className="hover:text-primary transition-colors">PROJECTS</Link>
          <ChevronRight size={10} />
          <span className="text-primary/60 truncate">{projectId}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary uppercase leading-none">
                {name}
              </h1>
              <span className={`text-[10px] font-bold px-3 py-1 border uppercase tracking-widest ${
                isActive 
                  ? "border-accent/40 text-accent bg-accent/5" 
                  : "border-amber-500/40 text-amber-500 bg-amber-500/5"
              }`}>
                {isActive ? "STATUS: OPTIMAL" : "STATUS: SUSPENDED"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-muted-foreground/60 tracking-widest uppercase">
               <span className="flex items-center gap-2"><Globe size={12} /> REGION: GLOBAL_EDGE</span>
               <span className="flex items-center gap-2"><Clock size={12} /> INIT: {new Date(createdAt).toLocaleDateString()}</span>
               <div className="flex items-center gap-2 px-2 py-1 bg-red-500/5 border border-red-500/20 text-red-500">
                  <AlertTriangle size={12} /> ACTIONS_REQUIRED: {requiredActions}
               </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {saved ? (
              <button
                onClick={() => setSaved(false)}
                className="btn-secondary px-6 text-[10px] py-3"
              >
                [ MODIFY_CONFIG ]
              </button>
            ) : (
              <button
                onClick={async () => {
                  if (!isDirty) { setSaved(true); return; }
                  try {
                    await handleSaveChanges({
                      projectId,
                      description: changes.description,
                      allowedOrigins: changes.allowedOrigins,
                      rateLimit: changes.rateLimit,
                      status: status,
                    });
                    toast.success("CONFIG_UPDATED_SUCCESSFULLY");
                    setInitial(changes);
                    setSaved(true);
                  } catch (err) {
                    toast.error("DEPLOYMENT_FAILED: IO_TIMEOUT");
                  }
                }}
                disabled={!isDirty}
                className="btn-primary px-8 text-[10px] py-3 disabled:opacity-50"
              >
                [ DEPLOY_CHANGES ]
              </button>
            )}

            <button
              onClick={async () => {
                const newstatus = isActive ? "suspended" : "active";
                await handleSaveChanges({
                  projectId,
                  description: changes.description,
                  allowedOrigins: changes.allowedOrigins,
                  rateLimit: changes.rateLimit,
                  status: newstatus,
                });
                toast.success(`SERVICE_${isActive ? "DEACTIVATED" : "ACTIVATED"}`);
                router.refresh();
              }}
              className="btn-secondary px-6 text-[10px] py-3 flex items-center gap-2"
            >
              {isActive ? <ToggleLeft size={16} /> : <ToggleRight size={16} />}
              {isActive ? "[ SUSPEND ]" : "[ ACTIVATE ]"}
            </button>
          </div>
        </div>
      </header>

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Connection Intel */}
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-card border-2 border-primary/10 p-8 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:opacity-10 transition-opacity pointer-events-none z-0">
                <Terminal size={100} />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.4em] uppercase">
                  <Activity size={14} />
                  Connection_Endpoint_Manifest
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                     <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest pl-1">// PUBLIC_PROXY_INTERFACE</p>
                     <div className="flex items-center gap-3 bg-muted border-2 border-primary/5 p-4 group/item">
                        <code className="text-sm text-primary flex-1 truncate">{proxyUrl}</code>
                        <button onClick={() => handleCopy(proxyUrl)} className="text-muted-foreground hover:text-accent transition-colors">
                          <Copy size={14} />
                        </button>
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest pl-1">// UPSTREAM_ORIGIN_TARGET</p>
                     <div className="flex items-center gap-3 bg-muted border-2 border-primary/5 p-4">
                        <code className="text-sm text-primary flex-1 truncate">{originUrl}</code>
                        <div className="flex items-center gap-1 text-[8px] text-accent font-bold"><ShieldCheck size={10} /> SECURE</div>
                     </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest pl-1">// SYSTEM_DOCUMENTATION_OVERRRIDE</p>
                  {!saved && <span className="text-[8px] text-accent font-bold tracking-[.3em] uppercase animate-pulse">EDITING_MODE_ACTIVE</span>}
                </div>
                <textarea
                  value={changes.description}
                  disabled={saved}
                  onChange={(e) => setChanges({ ...changes, description: e.target.value })}
                  className="w-full bg-muted border-2 border-primary/5 p-4 text-sm text-primary placeholder:text-muted-foreground/10 outline-none focus:border-accent/30 transition-all min-h-[100px] uppercase font-mono"
                  placeholder="NO_DESCRIPTION_PROVIDED"
                />
              </div>
           </section>

           {/* Allowed Origins Controlled Panel */}
           <section className="bg-card border-2 border-primary/10 p-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.4em] uppercase">
                    <Globe size={14} />
                    CORS_POLICY_CONTROLS
                  </div>
                  <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">// WHITELISTED_ORIGIN_ENTRIES</p>
                </div>
                
                <div className="flex gap-3">
                  <input
                    value={currentAllowedOrigin}
                    disabled={saved}
                    placeholder="HTTPS://APP.EXAMPLE.COM"
                    onChange={(e) => setCurrentAllowedOrigin(e.target.value)}
                    className="bg-muted border-2 border-primary/5 px-4 py-2 text-[10px] text-primary outline-none focus:border-accent/30 min-w-[200px]"
                  />
                  <button
                    onClick={() => {
                      if (!currentAllowedOrigin.startsWith("https://")) return toast.warning("HTTPS_REQUIRED");
                      if (changes.allowedOrigins.includes(currentAllowedOrigin)) return toast.warning("IDENTICAL_ORIGIN_DETECTED");
                      setChanges({ ...changes, allowedOrigins: [...changes.allowedOrigins, currentAllowedOrigin] });
                      setCurrentAllowedOrigin("");
                    }}
                    disabled={saved}
                    className="btn-primary px-4 text-[10px] disabled:opacity-20"
                  >
                    [ ADD ]
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {changes.allowedOrigins.length === 0 ? (
                  <div className="p-10 border border-dashed border-primary/10 text-center">
                    <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[.4em]">All_Traffic_Permitted // Default_Policy</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {changes.allowedOrigins.map((origin, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted border border-primary/5 p-3 group">
                        <code className="text-xs text-primary/70">{origin}</code>
                        {!saved && (
                          <button
                            onClick={() => setChanges({ ...changes, allowedOrigins: changes.allowedOrigins.filter((_, i) => i !== index) })}
                            className="text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
           </section>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-8">
           {/* Rate Limit Module */}
           <section className="bg-card border-2 border-primary/10 p-8 space-y-6">
              <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.4em] uppercase">
                <Activity size={14} />
                TRAFFIC_SHRUBBERY_CONFIG
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest pl-1">// REQ_LIMIT_PER_MINUTE</p>
                <div className="grid grid-cols-2 gap-2">
                  {rateLimitoptions.map((opt) => (
                    <button
                      key={opt}
                      disabled={saved}
                      onClick={() => setChanges({ ...changes, rateLimit: opt })}
                      className={`py-3 text-[10px] font-bold border-2 transition-all ${
                        changes.rateLimit === opt 
                          ? "border-accent text-accent bg-accent/5" 
                          : "border-primary/5 text-muted-foreground hover:border-primary/20"
                      } disabled:opacity-50`}
                    >
                      {opt} RPM
                    </button>
                  ))}
                </div>
              </div>
           </section>

           {/* Quick Navigation Hooks */}
           <section className="bg-card border-2 border-primary/10 p-8 space-y-6">
              <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[.4em] uppercase">
                <Terminal size={14} />
                MANAGEMENT_INTERFACE
              </div>
              
              <div className="flex flex-col gap-3">
                <NavButton href={`/dashboard/projects/${projectId}/routes`} label="ROUTE_TRANSFORMERS" icon={<Route size={14}/>} />
                <NavButton href={`/dashboard/projects/${projectId}/api-keys`} label="IDENTITY_KEYS" icon={<KeyRound size={14}/>} />
                <NavButton href={`/dashboard/projects/${projectId}/analytics`} label="TELEMETRY_FEED" icon={<LucideMonitorPlay size={14}/>} />
              </div>
           </section>

           {/* Danger Zone */}
           <section className="bg-red-500/5 border-2 border-red-500/10 p-8 space-y-6">
              <div className="flex items-center gap-3 text-red-500 text-[10px] font-bold tracking-[.4em] uppercase">
                <AlertTriangle size={14} />
                DESTRUCTIVE_COMMANDS
              </div>
              <button className="w-full text-center py-4 border-2 border-red-500/20 text-red-500 text-[10px] font-bold tracking-widest hover:bg-red-500 hover:text-foreground transition-all uppercase">
                [ TERMINATE_PROJECT_PERMANENTLY ]
              </button>
           </section>
        </div>
      </div>
      
      <div className="opacity-10 text-center py-10 uppercase text-[10px] tracking-[.5em]">
        Velox_Project_Kernel_v1.0.42 // Integrity_Check: Pass
      </div>
    </div>
  );
}

function NavButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="flex items-center justify-between p-4 bg-muted border-2 border-primary/5 hover:border-accent/40 group transition-all"
    >
      <span className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors">{label}</span>
      <div className="text-muted-foreground/30 group-hover:text-accent transition-colors">
        {icon}
      </div>
    </Link>
  );
}

const AlertTriangle = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
)

const handleSaveChanges = async ({
  projectId,
  description,
  allowedOrigins,
  status,
  rateLimit,
}: {
  projectId: string;
  description?: string;
  allowedOrigins?: string[];
  status?: string;
  rateLimit?: number;
}) => {
  const response = await fetch(`/api/project/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description, allowedOrigins, status, rateLimit }),
  });

  if (!response.ok) {
    throw new Error("PROVISION_FAILED");
  }
  return await response.json();
};
