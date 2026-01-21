"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

type Props = {
  open: boolean;
  onClose: () => void;
  session: Session;
};

export function CreateProjectModal({ open, onClose ,session }: Props) {
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
      setError("Name and Origin URL are required");
      return;
    }

    if (!originUrl.startsWith("https://")) {
      setError("Origin URL must start with https://");
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
        throw new Error(data.message || "Failed to create project");
      }

      onClose();
      router.push(`/dashboard/projects/${data.projectId}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md bg-slate-900 text-white rounded-lg p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
        >
          <X className="size-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Create Project</h2>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 rounded bg-slate-800 px-3 py-2 outline-none"
              placeholder="My API"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 rounded bg-slate-800 px-3 py-2 outline-none"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Origin URL *</label>
            <input
              value={originUrl}
              onChange={(e) => setOriginUrl(e.target.value)}
              className="w-full mt-1 rounded bg-slate-800 px-3 py-2 outline-none"
              placeholder="https://api.example.com"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={loading}
            className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
