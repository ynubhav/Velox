"use client";

import { CreateProjectModal } from "@/components/dashboard/CreateProjectModal";
import { Dashnavbar } from "@/components/dashboard/navbar";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { FolderPlus, Trash, Terminal, ExternalLink, Activity, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  name: string;
  projectId: string;
  proxyUrl: string;
  status: "active" | "suspended";
  createdAt: string;
};

export function timeAgo(iso: string) {
  try {
    return formatDistanceToNow(new Date(iso), { addSuffix: true }).toUpperCase();
  } catch (e) {
    return "UNKNOWN_TIME";
  }
}

export default function DashboardPage({
  session,
  projects,
}: {
  session: Session;
  projects: Project[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handledeleteProject = async (projectId: string) => {
    if (!projectId) return;
    toast.warning("CRITICAL_ACTION: CONFIRM_DELETION", {
      description: "This will permanently terminate all gateway nodes for this project.",
      action: {
        label: "[ DELETE ]",
        onClick: async () => {
          try {
            const res = await fetch(`/api/project/${projectId}`, {
              method: "DELETE",
            });
            if (res.ok) {
              toast.success("PROJECT_TERMINATED_SUCCESSFULLY");
              router.refresh();
            } else {
              toast.error("TERMINATION_FAILED: ACCESS_DENIED");
            }
          } catch (err) {
            toast.error("TERMINATION_FAILED: IO_ERROR");
          }
        },
      },
      cancel: {
        label: "[ ABORT ]",
        onClick: () => {},
      },
      duration: 10000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-mono">
      <Dashnavbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-10 space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.4em] uppercase">
              <Terminal size={14} />
              Infrastructure_Overview
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-primary uppercase">
              Project_Grid
            </h1>
            <p className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
              Managing {projects.length} Active Gateway Nodes
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center gap-3 px-8 group"
          >
            [ INITIALIZE_PROJECT ]
            <FolderPlus size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* Projects Grid/List */}
        <section className="space-y-6">
          {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-primary/10 bg-primary/5">
              <p className="text-[10px] text-muted-foreground font-bold tracking-[.3em] uppercase mb-8">
                // No_Active_Deployments_Found
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="btn-primary px-10"
              >
                [ PROVISION_FIRST_NODE ]
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, i) => (
                <motion.div
                  key={project.projectId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-card border-2 border-primary/10 hover:border-accent/40 transition-all p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
                >
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-accent" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-primary uppercase tracking-tight">
                        {project.name}
                      </h3>
                      <span className={`text-[8px] font-bold px-2 py-0.5 border uppercase tracking-widest ${
                        project.status === "active" 
                          ? "border-accent/40 text-accent bg-accent/5" 
                          : "border-amber-500/40 text-amber-500 bg-amber-500/5"
                      }`}>
                        {project.status === "active" ? "OPTIMAL" : "SUSPENDED"}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[10px] font-bold text-muted-foreground/60 tracking-widest">
                       <Link 
                        href={project.proxyUrl} 
                        target="_blank"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors truncate max-w-xs"
                       >
                         <ExternalLink size={12} />
                         {project.proxyUrl.replace('https://', '')}
                       </Link>
                       <span className="hidden sm:block opacity-20">|</span>
                       <span className="flex items-center gap-2">
                         <Clock size={12} />
                         INIT: {timeAgo(project.createdAt)}
                       </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-primary/10">
                    <button
                      onClick={() =>
                        router.push(`/dashboard/projects/${project.projectId}`)
                      }
                      className="btn-primary flex-1 md:flex-none px-8 text-[10px]"
                    >
                      [ ACCESS_NODE ]
                    </button>
                    <button
                      onClick={() => handledeleteProject(project.projectId)}
                      className="p-3 text-muted-foreground hover:text-red-500 transition-colors border-2 border-transparent hover:border-red-500/20"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        
        <footer className="pt-20 opacity-20 text-[8px] font-bold uppercase tracking-[.5em] text-center">
          Velox_Grid_Manager // Session_ID: {session.user?.email?.split('@')[0].toUpperCase()}
        </footer>
      </main>

      <CreateProjectModal
        session={session}
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}
