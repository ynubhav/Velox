"use client";

import { Plus, Trash2, ToggleLeft, ToggleRight, Loader } from "lucide-react";
import { ApiKeyRow } from "@/components/api-keys/apikeyrow";
import { ApiKey } from "./types";
import { GenerateKeyModal } from "@/components/api-keys/generateapi";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function ApiKeysPage({
  projectId,
  apiKeys,
}: {
  projectId: string;
  apiKeys: ApiKey[];
}) {
  const [label, setlabel] = useState<string>(""); // label for the api key to generte
  const [open, setopen] = useState(false); // open or close the generate box
  const [loading, setloading] = useState(false);
  const [seen, setseen] = useState(false);
  const [opensebox, setseebox] = useState(false); // to see the generated api key
  const [apikey, setapikey] = useState("");
  const [newapilabel,setnewapilabel]=useState("");

  console.log(apiKeys);

  const handleCreateKey = async () => {
    // call the create api
    if (label === "") return toast.error("label not added");

    setloading(true);
    const response = await fetch(`/api/api_key/generate/${projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ label }),
    });

    if (!response.ok) {
      setloading(false);
      return toast.error("Unable to create key");
    }

    setloading(false);
    const data=await response.json();
    setapikey(data.key_Info.apikey);
    setnewapilabel(data.key_Info.label);
    return toast.success(data.message);
  };

  return (
    <div className="space-y-8 px-4 min-h-screen max-w-5xl">
      {/* Header */}
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          <Link className="hover:underline" href="/dashboard">
            /dashboard
          </Link>
          <Link className="hover:underline" href="/dashboard/projects">
            /projects
          </Link>
          <Link
            className="hover:underline"
            href={`/dashboard/projects/${projectId}`}
          >
            /{projectId}
          </Link>
          /api-keys
        </p>

        <h1 className="text-2xl font-semibold text-slate-900">API Keys</h1>

        <p className="text-sm text-slate-600 max-w-2xl">
          API keys are used to authenticate requests to your gateway. Keep them
          secret. You will only see a key once.
        </p>
      </header>

      {/* Actions */}
      <section className="flex items-center gap-2">
        <button
          onClick={() => setopen(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="size-4" />
          Generate New Key
        </button>
        {open && (
          <div className="flex gap-2">
            <input
              onChange={(e) => setlabel(e.target.value)}
              type="text"
              placeholder="label for the key"
              className="rounded border border-gray-400 p-2"
            />
            <button onClick={handleCreateKey} className="btn-primary">
              {loading ? (
                <Loader className="size-4 animate-spin duration-1000" />
              ) : (
                "Generate"
              )}
            </button>
          </div>
        )}
      </section>

      {/* API Keys Table */}
      <section className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr className="text-left text-slate-600">
              <th className="px-4 py-2">Label</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Last Used</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {!apiKeys || apiKeys.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No API keys created
                </td>
              </tr>
            ) : (
              apiKeys.map((key) => <ApiKeyRow key={key._id} apiKey={key} />)
            )}
          </tbody>
        </table>
      </section>
      {!seen && <GenerateKeyModal label={newapilabel} apiKey={apikey} />}
    </div>
  );
}
