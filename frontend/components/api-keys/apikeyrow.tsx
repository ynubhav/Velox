import { ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { ApiKey } from "./types";

export function ApiKeyRow({ apiKey }: { apiKey: ApiKey }) {

  const handledelete = async ()=>{

  };

  const handlediasble = async ()=>{

  }
  
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-2 font-mono">
        {apiKey.label}
      </td>

      <td className="px-4 py-2">
        {apiKey.keystatus==='active' ? "Enabled" : "Disabled"}
      </td>

      <td className="px-4 py-2">
        {apiKey.lastUsed
          ? new Date(apiKey.lastUsed).toLocaleString("en-GB")
          : "Never"}
      </td>

      <td className="px-4 py-2 flex justify-end gap-3">
        <button className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
          {apiKey.keystatus ? (
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
