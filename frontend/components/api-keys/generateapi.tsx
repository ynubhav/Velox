"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy, Eye, EyeOff, ShieldCheck, Terminal, X, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  apiKey: string;
  label: string;
  onClose: () => void;
};

export function GenerateKeyModal({ apiKey, label, onClose }: Props) {
  const [show, setShow] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success("IDENTITY_KEY_COPIED_TO_CLIPBOARD");
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 font-mono">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/90 backdrop-blur-md" 
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-2xl bg-card border-2 border-accent/30 shadow-[40px_40px_0px_0px_rgba(16,185,129,0.02)] relative z-10 overflow-hidden p-10 space-y-10"
      >
        {/* Terminal Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[.5em] uppercase">
            <ShieldCheck size={18} />
            IDENTITY_PROVISIONING_COMPLETE
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-primary uppercase">
            Access_Key_Generated
          </h2>
          
          <div className="p-4 border border-amber-500/30 bg-amber-500/5 flex items-start gap-4">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
            <p className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest leading-relaxed">
              SECURITY_NOTICE: This credential is cryptographic in nature and will NEVER be displayed again. Failure to store this key will result in permanent loss of access for current identity label.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[8px] font-bold text-muted-foreground/40 uppercase tracking-widest pl-1">// CREDENTIAL_LABEL</label>
            <div className="bg-muted border-2 border-primary/10 p-4 text-sm font-bold text-primary tracking-widest">
              {label.toUpperCase()}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold text-muted-foreground/40 uppercase tracking-widest pl-1">// SECRET_IDENTITY_KEY</label>
            <div className="flex items-center gap-4 bg-muted border-2 border-accent/20 p-6 group transition-all">
              <code className={`flex-1 text-sm font-bold tracking-wider ${show ? 'text-accent' : 'text-accent/20 blur-sm'} transition-all duration-500 truncate`}>
                {show ? apiKey : "●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●"}
              </code>
              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={() => setShow(!show)}
                  className="p-3 text-muted-foreground hover:text-primary transition-colors hover:bg-white/5 border border-transparent hover:border-border/10"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button 
                  onClick={handleCopy}
                  className="p-3 text-accent hover:bg-accent/10 transition-all border border-accent/20"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center gap-6">
          <button 
            onClick={onClose} 
            className="w-full btn-primary py-5 text-[10px] group"
          >
            [ I_HAVE_SECURED_THIS_KEY_COMMIT_SESSION ]
          </button>
          
          <p className="text-[8px] font-bold text-muted-foreground/20 uppercase tracking-[.4em]">
            Vault_Session_ID: {Math.random().toString(36).substring(2, 12).toUpperCase()} // Encrypted: True
          </p>
        </div>
      </motion.div>
    </div>
  );
}
