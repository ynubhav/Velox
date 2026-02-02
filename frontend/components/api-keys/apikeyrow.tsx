import { ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { ApiKey } from "./types";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ApiKeyRow({ apiKey }: { apiKey: ApiKey }) {
  const [keyStatus, setKeyStatus] = useState(apiKey.keystatus);

  const handleDeleteKey = async () => {
    // call the delete api
    const id=toast.loading("Deleting key...");
    const response = await fetch(`/api/api_key/${apiKey._id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      toast.dismiss(id);
      return toast.error("Unable to delete key");
    }
    const data=await response.json();
    toast.dismiss(id);
    toast.success(data.message);
    //router.refresh();
    return 
  };

  const handlediasble = async ()=>{
    // call the disable api
    const id=toast.loading("Updating key status...");
    const response = await fetch(`/api/api_key/${apiKey._id}/toggle`, {
      method: "PATCH",
    });
    if (!response.ok) {
      toast.dismiss(id);
      return toast.error("Unable to update key status");
    }
    const data=await response.json();
    toast.dismiss(id);
    setKeyStatus(data.key_Status==="active" ? "active" : "disabled");
    return toast.success(data.message);
  }
  
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-2 font-mono">
        {apiKey.label}
      </td>

      <td className="px-4 py-2">
        {keyStatus==='active' ? "Enabled" : "Disabled"}
      </td>

      <td className="px-4 py-2">
        {apiKey.lastUsed
          ? new Date(apiKey.lastUsed).toLocaleString("en-GB")
          : "Never"}
      </td>

      <td className="px-4 py-2 flex justify-end gap-3">
        <button onClick={handlediasble} className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
          {keyStatus==="active" ? (
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

        <button onClick={handleDeleteKey} className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
          <Trash2 className="size-4" />
          Delete
        </button>
      </td>
    </tr>
  );
}
