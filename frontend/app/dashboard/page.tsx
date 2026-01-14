"use client";

import { CreateProjectModal } from "@/components/dashboard/CreateProjectModal";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Project = {
  name: string;
  projectId: string;
  proxyUrl: string;
  status: "active" | "suspended";
};

export default function DashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // 🔹 fetch projects
  useEffect(() => {
    async function fetchProjects() {
      try {
        // TODO: replace with your real API call
        // const res = await fetch("/api/project");
        // const data = await res.json();
        // setProjects(data.projects);

        // mock for now
        setProjects([
          {
            name: "something",
            projectId: "xyx1",
            proxyUrl: "asss",
            status: "active",
          },
          {
            name: "something",
            projectId: "xyx2",
            proxyUrl: "asss",
            status: "suspended",
          },
          {
            name: "something",
            projectId: "xyx3",
            proxyUrl: "asss",
            status: "suspended",
          },
          {
            name: "something",
            projectId: "xyx4",
            proxyUrl: "asss",
            status: "suspended",
          },
          {
            name: "something",
            projectId: "xyx5",
            proxyUrl: "asss",
            status: "suspended",
          },
        ]);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-slate-800 text-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-sm text-slate-300">
              Manage your APIs behind Velox
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 rounded px-3 py-2"
          >
            Create Project
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
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 rounded px-3 py-2"
            >
              Create your first Project
            </button>
          </div>
        )}

        {/* Projects List */}
        {!loading && projects.length > 0 && (
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.projectId}
                className="bg-slate-900 rounded p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="text-sm text-slate-400">{project.proxyUrl}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "active"
                        ? "bg-green-700"
                        : "bg-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>

                  <button
                    onClick={() =>
                      router.push(`/dashboard/projects/${project.projectId}`)
                    }
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreateProjectModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}
