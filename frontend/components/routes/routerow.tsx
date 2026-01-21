import { Pencil, Trash2 } from "lucide-react";

type Route = {
  id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

export function RouteRow({ route }: { route: Route }) {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-2 font-mono">{route.method}</td>
      <td className="px-4 py-2 font-mono">{route.path}</td>

      <td className="px-4 py-2">
        {route.authRequired ? "Required" : "Public"}
      </td>

      <td className="px-4 py-2">
        {route.cacheEnabled ? "Enabled" : "Disabled"}
      </td>

      <td className="px-4 py-2">
        {route.cacheEnabled ? `${route.ttl}s` : "—"}
      </td>

      <td className="px-4 py-2 flex justify-end gap-2">
        <button className="text-slate-600 hover:text-slate-900">
          <Pencil className="size-4" />
        </button>
        <button className="text-slate-600 hover:text-slate-900">
          <Trash2 className="size-4" />
        </button>
      </td>
    </tr>
  );
}
