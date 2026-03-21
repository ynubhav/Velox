"use client";

import { ToggleLeft, ToggleRight, Trash2, Key, ShieldCheck, ShieldAlert, Clock, Loader } from "lucide-react";
import { ApiKey } from "./types";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function ApiKeyRow({ apiKey }: { apiKey: ApiKey }) {
  const router = useRouter();
  const [keyStatus, setKeyStatus] = useState(apiKey.keystatus);
  const [loading, setLoading] = useState(false);

  const handleDeleteKey = async () => {
    toast.warning("TERM_AUTH: CONFIRM_DELETION", {
      description: "Permanently revoking access for this identity.",
      action: {
        label: "[ REVOKE ]",
        onClick: async () => {
          setLoading(true);
          try {
            const response = await fetch(`/api/api_key/${apiKey._id}`, {
              method: "DELETE",
            });
            if (response.ok) {
              toast.success("IDENTITY_REVOKED_SUCCESSFULLY");
              router.refresh();
            } else {
              throw new Error();
            }
          } catch (e) {
            toast.error("REVOCATION_FAILED: SYSTEM_ERROR");
          } finally {
            setLoading(false);
          }
        }
      },
      cancel: { label: "[ ABORT ]", onClick: () => {} }
    });
  };

  const handletoggle = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/api_key/${apiKey._id}/toggle`, {
        method: "PATCH",
      });
      if (!response.ok) throw new Error();
      
      const data = await response.json();
      const newStatus = data.key_Status === "active" ? "active" : "disabled";
      setKeyStatus(newStatus);
      toast.success(`IDENTITY_${newStatus === 'active' ? 'RESTORED' : 'QUARANTINED'}`);
    } catch (err) {
      toast.error("STATUS_UPDATE_FAILED");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <motion.tr 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="group hover:bg-primary/5 transition-colors border-l-2 border-transparent hover:border-accent"
    >
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <Key size={14} className="text-muted-foreground/30 group-hover:text-accent transition-colors" />
          <span className="text-sm font-bold text-primary tracking-tight uppercase">
            {apiKey.label}
          </span>
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          {keyStatus === 'active' ? (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/20">
              <ShieldCheck size={10} /> ACCESS_GRANTED
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-red-400 uppercase tracking-widest bg-red-400/5 px-2 py-0.5 border border-red-400/20">
              <ShieldAlert size={10} /> QUARANTINED
            </div>
          )}
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 tracking-widest uppercase">
          <Clock size={12} className="opacity-50" />
          {apiKey.lastUsed
            ? new Date(apiKey.lastUsed).toLocaleString("en-GB").toUpperCase()
            : "NO_RECORDED_ACCESS"}
        </div>
      </td>

      <td className="px-6 py-5 text-right">
        <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handletoggle} 
            disabled={loading}
            className={`flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-colors ${
              keyStatus === "active" ? "text-muted-foreground hover:text-amber-500" : "text-emerald-500 hover:text-emerald-400"
            }`}
          >
            {keyStatus === "active" ? (
              <>[ SUSPEND ]</>
            ) : (
              <>[ ACTIVATE ]</>
            )}
          </button>

          <button 
            onClick={handleDeleteKey} 
            disabled={loading}
            className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/5 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}
