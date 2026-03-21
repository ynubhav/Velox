"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Activity, CheckCircle2 } from "lucide-react";

const manifestItems = [
  { text: "Initialize secure proxy gateway cluster", icon: <Zap size={14} /> },
  { text: "Deploy adaptive token-bucket rate limiting", icon: <Activity size={14} /> },
  { text: "Enable cryptographic API key validation", icon: <Shield size={14} /> },
  { text: "Aggregate real-time telemetry and logs", icon: <CheckCircle2 size={14} /> },
];

export default function SideComponent() {
  return (
    <div className="hidden lg:flex flex-col justify-center max-w-md space-y-12 p-8 font-mono">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 text-accent text-xs font-bold tracking-[0.4em] uppercase">
          <Terminal size={14} />
          System_Manifesto
        </div>
        <h2 className="text-4xl font-bold tracking-tighter text-primary uppercase leading-tight">
          The Unified <br /> API Control Plane.
        </h2>
        <p className="text-sm text-muted-foreground uppercase leading-relaxed tracking-wider">
          Velox provides the fastest, most secure way to provision, monitor, and scale 
          your microservices architecture.
        </p>
      </div>

      <div className="space-y-6">
        {manifestItems.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 group"
          >
            <div className="mt-1 text-primary/40 group-hover:text-accent transition-colors">
              {item.icon}
            </div>
            <p className="text-sm text-primary uppercase tracking-tight group-hover:text-primary transition-colors">
              // {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="pt-12 border-t border-primary/10">
        <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.3em]">
          Loved by infrastructure teams // Trusted by enterprises
        </p>
        <div className="mt-6 flex gap-8 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <span className="font-bold text-lg tracking-tighter">NODE_JS</span>
           <span className="font-bold text-lg tracking-tighter">REDIS</span>
           <span className="font-bold text-lg tracking-tighter">GO_STACK</span>
        </div>
      </div>
    </div>
  );
}
