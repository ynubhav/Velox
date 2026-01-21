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
  Trash,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
  const requiredActions = 3; // Placeholder for required actions count
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

  console.log({ isDirty });
  useEffect(() => {
    setInitial({
      allowedOrigins: allowedOrigins,
      description: description ?? "",
      rateLimit: rateLimit,
    });
  }, []);

  return (
    <div className="space-y-6 px-4 min-h-screen">
      {/* Header */}
      <header className="space-y-1">
        <div className="text-sm font-light text-gray-500">
          <Link href="/dashboard" className="hover:underline">
            /dashboard
          </Link>
          <Link href="/dashboard/projects" className="hover:underline">
            /projects
          </Link>
          <span>/{projectId}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl font-semibold">{name}</h1>
            <StatusBadge active={isActive} />
          </span>

          <div className="flex gap-2">
            {saved ? (
              <button
                onClick={() => setSaved(false)}
                className="btn-second flex items-center gap-2"
              >
                Edit <Edit className="size-4" />
              </button>
            ) : (
              <button
                onClick={async () => {
                  if (!isDirty) {
                    setSaved(true);
                    return;
                  }
                  // TODO: call server action here
                  // await updateProject({ description: changes.description })
                  try {
                    const response = await handleSaveChanges({
                      projectId,
                      description: changes.description,
                      allowedOrigins: changes.allowedOrigins,
                      rateLimit: changes.rateLimit,
                      status: status,
                    });
                    console.log("Response from save:", response);
                    toast.success("Changes saved successfully");

                    setInitial(changes); // sync snapshot
                    setSaved(true);
                  } catch (err) {
                    toast.error("Failed to save changes");
                  }
                }}
                disabled={!isDirty}
                className="btn-second flex items-center gap-2 disabled:opacity-50"
              >
                Save Changes <ArrowDownCircle className="size-4" />
              </button>
            )}

            <button
              onClick={async () => {
                const newstatus = isActive ? "suspended" : "active";
                const response=await handleSaveChanges({
                  projectId,
                  description: changes.description,
                  allowedOrigins: changes.allowedOrigins,
                  rateLimit: changes.rateLimit,
                  status:newstatus,
                });
                console.log("Response from toggle status:", response);
                toast.success(
                  `Service ${isActive ? "deactivated" : "activated"} successfully`,
                );
                router.refresh();
              }}
              className={`${status === "active" ? "btn-second" : "btn-primary"} flex items-center gap-2`}
            >
              {status === "active" ? (
                <ToggleLeft className="size-4 transition-all duration-500" />
              ) : (
                <ToggleRight className="size-4 transition-all duration-500" />
              )}
              {status === "active" ? "Deactivate Service" : "Activate Service"}
            </button>
            <button className="btn-danger-second flex items-center gap-2">
              Delete <Trash2 className="size-4" />
            </button>
          </div>
        </div>
        <section className="flex flex-col gap-1">
          <p className="text-sm text-gray-700">Description</p>

          <textarea
            value={changes.description}
            disabled={saved}
            onFocus={() => setSaved(false)}
            onChange={(e) =>
              setChanges({ ...changes, description: e.target.value })
            }
            className="border px-2 py-1 max-w-xs max-h-10 border-black rounded"
            placeholder="Enter description"
          />
        </section>
      </header>

      {/* Project Info */}
      <section className="rounded-md border p-4 space-y-3">
        <InfoRow label="Proxy URL" value={proxyUrl} copy />
        <InfoRow label="Origin URL" value={originUrl} />
        <InfoRow
          label="Rate Limit"
          value={`${changes.rateLimit}`}
          options={rateLimitoptions}
          onChange={(e) => {
            console.log(e);
            setChanges({ ...changes, rateLimit: e });
            console.log(e);
          }}
          disabled={saved}
        />
        <InfoRow
          label="Created"
          value={new Date(createdAt).toLocaleString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        />
      </section>

      {/* Allowed Origins */}
      <section className="rounded-md border p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Allowed Origins</h2>
          <span className="flex gap-1">
            <input
              value={currentAllowedOrigin}
              disabled={saved}
              onFocus={() => setSaved(false)}
              placeholder="https://example.com"
              onChange={(e) => {
                setCurrentAllowedOrigin(e.target.value);
              }}
              type="url"
              className="border-2 px-2 py-1 max-w-xs border-gray-400 rounded"
            />
            <button
              onClick={() => {
                if (
                  currentAllowedOrigin.trim() === "" ||
                  currentAllowedOrigin.startsWith("http://") ||
                  !currentAllowedOrigin.startsWith("https://")
                )
                  return toast.warning("Please enter a valid origin");
                if (changes.allowedOrigins.includes(currentAllowedOrigin))
                  return toast.warning("Origin already exists");
                setChanges({
                  ...changes,
                  allowedOrigins: [
                    ...changes.allowedOrigins,
                    currentAllowedOrigin,
                  ],
                });
              }}
              className="flex gap-2 items-center rounded btn-primary"
            >
              <Plus className="size-4" />
              Add
            </button>
          </span>
        </div>

        {changes.allowedOrigins.length === 0 ? (
          <p className="text-sm text-gray-500">No origin restrictions</p>
        ) : (
          <ul className="list-disc pl-5 text-sm">
            {changes.allowedOrigins.map((origin, index) => (
              <div
                className="flex group-first:hover:text-gray-700 justify-between bg-gray-200 rounded px-2 py-1 mb-1 hover:bg-gray-300"
                key={index}
              >
                <li key={index}>{origin}</li>
                {!saved&&<Trash
                  onClick={() => {
                    if( saved )
                    return;
                    setChanges({
                      ...changes,
                      allowedOrigins: changes.allowedOrigins.filter(
                        (_, i) => i !== index,
                      ),
                    });
                  }}
                  className="size-6 text-gray-900 rounded p-1 group-hover:text-gray-700"
                />}
              </div>
            ))}
          </ul>
        )}
      </section>

      <div className="flex gap-4 justify-between">
        <div>
          <label htmlFor="actions" className="text-xl font-bold my-2 px-4">
            Management & Actions
          </label>
          {/* Actions (future-proof) */}
          <section className="flex-col w-max space-y-2 gap-3 justify-start p-4 ">
            <button
              onClick={() =>
                router.push(`/dashboard/projects/${projectId}/routes`)
              }
              className="btn-second flex items-center gap-2"
            >
              Routes Management <Route className="size-4" />
            </button>
            <button
              onClick={() =>
                router.push(`/dashboard/projects/${projectId}/api-keys`)
              }
              className="btn-second flex items-center gap-2"
            >
              API Keys Management
              <KeyRound className="size-4" />
            </button>
            <button
              onClick={() =>
                router.push(`/dashboard/projects/${projectId}/analytics`)
              }
              className="btn-second flex items-center gap-2"
            >
              Analytics and Monitoring <LucideMonitorPlay className="size-4" />
            </button>
          </section>
        </div>

        {/* Action Required Section */}
        <section>
          <div>
            <button
              onClick={() =>
                router.push(`/dashboard/projects/${projectId}/problems`)
              }
              className="btn-danger-second flex items-center gap-2"
            >
              Action Required{" "}
              <span className="w-4 h-4 rounded-full justify-center flex items-center full p-2.75 bg-red-600 text-white">
                {requiredActions}
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ---------------- Small Components ---------------- */

function StatusBadge({ active }: { active: boolean }) {
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${
        active ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}

function InfoRow({
  label,
  value,
  copy = false,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value: string | number;
  copy?: boolean;
  options?: number[];
  onChange?: (newValue: number) => void;
  disabled?: boolean;
}) {
  const isSelectable = options && onChange;

  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-500">{label}</span>

      <div className="flex items-center gap-2">
        {isSelectable ? (
          <select
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="font-mono border border-gray-300 rounded px-2 py-1 pr-6 bg-lime-50 appearance-none transition-all duration-300 hover:border-gray-400 focus:border-gray-500 focus:outline-none disabled:opacity-50"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt} req/min
              </option>
            ))}
          </select>
        ) : (
          <span className="font-mono">{value}</span>
        )}

        {copy && typeof value === "string" && (
          <button
            onClick={() => navigator.clipboard.writeText(value)}
            className="text-xs text-blue-600 hover:underline"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}

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
  console.log("Saving changes...", {
    description,
    allowedOrigins,
    status,
    rateLimit,
  });
  // Implement the actual save logic here, e.g., call an API endpoint to update the project details.
  const response = await fetch(`/api/project/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description, allowedOrigins, status, rateLimit }),
  });

  if (!response.ok) {
    toast.error("Failed to save changes");
  }
  return await response.json();
};
