"use client";

import { motion } from "framer-motion";
import { Shield, Gauge, Activity, KeyRound, BarChart2, Server, Terminal } from "lucide-react";

const features = [
  {
    title: "REVERSE_PROXY",
    desc: "Unified gateway cluster for multi-backend services with protocol translation.",
    icon: Server,
    id: "MOD_01",
  },
  {
    title: "RATE_LIMITER",
    desc: "Adaptive throttling per-route with token bucket algorithm execution.",
    icon: Gauge,
    id: "MOD_02",
  },
  {
    title: "REDIS_CACHE",
    desc: "Sub-millisecond GET caching with automated TTL and invalidation hooks.",
    icon: Activity,
    id: "MOD_03",
  },
  {
    title: "IDENTITY_VAULT",
    desc: "SHA-256 hashed API key management with granular privilege levels.",
    icon: KeyRound,
    id: "MOD_04",
  },
  {
    title: "TELEMETRY_ENGINE",
    desc: "Real-time request indexing, latency histograms, and system logs.",
    icon: BarChart2,
    id: "MOD_05",
  },
  {
    title: "SECURITY_PROTOCOL",
    desc: "JWT verification, Origin whitelisting, and automated DDoS mitigation.",
    icon: Shield,
    id: "MOD_06",
  },
];

export default function Features() {
  return (
    <section className="w-full py-32 bg-card font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3 text-accent text-xs font-bold tracking-[0.4em] uppercase">
            <Terminal size={14} />
            System_Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary uppercase">
            Architecture Optimized <br /> For Performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-primary/20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 border-r border-b border-primary/20 hover:bg-primary/5 transition-colors group flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <feature.icon className="text-primary/40 group-hover:text-accent transition-colors" size={32} />
                <span className="text-[10px] text-muted-foreground/30 font-bold">{feature.id}</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed uppercase">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {">"} EXECUTE_INIT
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
