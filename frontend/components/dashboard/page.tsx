"use client";

import { CreateProjectModal } from "@/components/dashboard/CreateProjectModal";
import { Dashnavbar } from "@/components/dashboard/navbar";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Project = {
  name: string;
  projectId: string;
  proxyUrl: string;
  status: "active" | "suspended";
  createdAt: string;
};

export default function DashboardPage({
  session,
  projects,
}: {
  session: Session;
  projects: Project[];
}) {
  const router = useRouter();
  //   const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handledeleteProject = async (projectId: string) => {
    // cofirm delete
    if (!projectId) return;
    toast.warning("Confirm Deletion, this action cannot be undo-ed", {
      action: {
        label: "Continue",
        onClick: async () => {
          // call the delete end point
          try{
            const res = await fetch(`/api/project/${projectId}`, {
              method: "DELETE",
            });
            if (res.ok) {
              toast.success("Project deleted successfully");
              router.refresh();
            } else {
              console.log("Failed to delete project", await res.json());
              const data = await res.json();
              if(res.status === 404){
                toast.error("Project not found");
                return;
              }
              toast.error("Failed to delete project");
            }
          }
          catch(err){
            console.error("Error deleting project:", err);
            toast.error("Failed to delete project");
          }
        },
      },
      cancel: {
        label: "Cancel",
        onClick: async () => {
          return;
        },
      },
      duration: 10000,
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <Dashnavbar />
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-sm text-slate-500">
              Manage your APIs behind Velox
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary hover:scale-101 flex items-center gap-2"
          >
           <FolderPlus className="size-5" /> Create Project
          </button>
        </div>

        {/* Loading */}
        {loading && <p className="text-slate-400">Loading projects...</p>}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-24 gap-4">
            <p className="text-slate-400">You don’t have any projects yet</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 btn-primary rounded px-3 py-2"
            >
              <FolderPlus className="size-5" />Create your first Project
            </button>
          </div>
        )}

        {/* Projects List */}
        {!loading && projects.length > 0 && (
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.projectId}
                className="border border-gray-400 rounded p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <Link href={project.proxyUrl} className="text-sm font-mono text-slate-500 hover:underline hover:text-blue-500">{project.proxyUrl}</Link>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "active"
                        ? "bg-green-300"
                        : "bg-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded `}>
                    {timeAgo(project.createdAt)}
                  </span>

                  <button
                    onClick={() =>
                      router.push(`/dashboard/projects/${project.projectId}`)
                    }
                    className="text-white btn-primary rounded bg-blue-500 py-2 px-3 hover:bg-blue-600 hover:cursor-pointer hover:underline"
                  >
                    Open
                  </button>
                  <button
                    onClick={async () =>
                      await handledeleteProject(project.projectId)
                    }
                    className="text-sm text-red-700 hover:bg-red-100 p-2 rounded hover:underline"
                  >
                    <Trash className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreateProjectModal
        session={session}
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}

import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { FolderPlus, PlusSquare, Trash } from "lucide-react";
import Link from "next/link";

export function timeAgo(iso: string) {
  return formatDistanceToNow(new Date(iso), { addSuffix: true });
}
