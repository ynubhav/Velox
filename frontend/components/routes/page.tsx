"use client";

import { Plus, Upload, Pencil, Trash2 } from "lucide-react";
import { RouteRow } from "./routerow";
import { AddRouteSection } from "./addroute";
import { useRouter } from "next/navigation";
import Link from "next/link";

 type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export default function RoutesPage({
  projectId,
  routes,
}: {
  projectId: string;
  routes: Route[];
}) {
  const router = useRouter();
  return (
    <div className="space-y-8 px-4 min-h-screen max-w-6xl">
      {/* Header */}
      <header className="space-y-2">
        <p className="text-sm text-slate-500">
          <Link
            href={"/dashboard"}
            className="hover:underline hover:cursor-pointer"
          >
            /dashboard
          </Link>
          <Link
            href={"/dashboard/projects"}
            className="hover:underline hover:cursor-pointer"
          >
            /projects
          </Link>
          <Link
            href={`/dashboard/projects/${projectId}`}
            className="hover:underline hover:cursor-pointer"
          >
            /{projectId}
          </Link>
          /routes
        </p>

        <h1 className="text-2xl font-semibold text-slate-900">
          Routes Management
        </h1>

        <p className="text-sm text-slate-600 max-w-2xl">
          Configure how requests are proxied through your gateway. Each route
          defines auth, caching, and rate behavior.
        </p>
      </header>

      {/* Actions */}
      {/* <section className="flex gap-3">
        <button className="btn-primary flex items-center gap-2">
          <Plus className="size-4" />
          Add Route
        </button>

        <button className="btn-second flex items-center gap-2">
          <Upload className="size-4" />
          Bulk Upload
        </button>
      </section> */}

      {/* Routes Table */}
      <section className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr className="text-left text-slate-600">
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Path</th>
              <th className="px-4 py-2">Auth</th>
              <th className="px-4 py-2">Cache</th>
              <th className="px-4 py-2">TTL</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {routes.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No routes configured
                </td>
              </tr>
            ) : (
              routes.map((route,idx) => <RouteRow key={idx} route={route} />)
            )}
          </tbody>
        </table>
      </section>

      {/* Add Route */}
      <AddRouteSection projectId={projectId} />
    </div>
  );
}
