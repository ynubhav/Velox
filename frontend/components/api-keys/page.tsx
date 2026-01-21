"use client";

import { Plus, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { ApiKeyRow } from "@/components/api-keys/apikeyrow";
import { ApiKey } from "./types";
import { GenerateKeyModal } from "@/components/api-keys/generateapi";
import Link from "next/link";

export function ApiKeysPage({
  projectId,
  apiKeys,
}: {
  projectId: string;
  apiKeys: ApiKey[];
}) {
  return (
    <div className="space-y-8 px-4 min-h-screen max-w-5xl">
      {/* Header */}
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          <Link className="hover:underline" href="/dashboard">/dashboard</Link>
          <Link className="hover:underline" href="/dashboard/projects">/projects</Link>
          <Link className="hover:underline" href={`/dashboard/projects/${projectId}`}>/{projectId}</Link>
          /api-keys
        </p>

        <h1 className="text-2xl font-semibold text-slate-900">
          API Keys
        </h1>

        <p className="text-sm text-slate-600 max-w-2xl">
          API keys are used to authenticate requests to your gateway.
          Keep them secret. You will only see a key once.
        </p>
      </header>

      {/* Actions */}
      <section>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="size-4" />
          Generate New Key
        </button>
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
            {apiKeys.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No API keys created
                </td>
              </tr>
            ) : (
              apiKeys.map((key) => (
                <ApiKeyRow key={key.id} apiKey={key} />
              ))
            )}
          </tbody>
        </table>
      </section>
      <GenerateKeyModal apiKey={'ahfuifadh892q9rqdhuhq8qio'} />
    </div>
  );
}
