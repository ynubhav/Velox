import { ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { ApiKey } from "./types";

export function ApiKeyRow({ apiKey }: { apiKey: ApiKey }) {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-2 font-mono">
        {apiKey.label}
      </td>

      <td className="px-4 py-2">
        {apiKey.enabled ? "Enabled" : "Disabled"}
      </td>

      <td className="px-4 py-2">
        {apiKey.lastUsedAt
          ? new Date(apiKey.lastUsedAt).toLocaleString("en-GB")
          : "Never"}
      </td>

      <td className="px-4 py-2 flex justify-end gap-3">
        <button className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
          {apiKey.enabled ? (
            <>
              <ToggleLeft className="size-4" />
              Disable
            </>
          ) : (
            <>
              <ToggleRight className="size-4" />
              Enable
            </>
          )}
        </button>

        <button className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
          <Trash2 className="size-4" />
          Delete
        </button>
      </td>
    </tr>
  );
}
