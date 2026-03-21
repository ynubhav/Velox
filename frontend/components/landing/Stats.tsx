"use client";

import { motion } from "framer-motion";
import { Activity, Timer, Zap, ShieldCheck } from "lucide-react";

const stats = [
  {
    label: "REQ_PROCESSED",
    value: "5.42M+",
    icon: Activity,
    status: "OPTIMAL",
  },
  {
    label: "AVG_LATENCY",
    value: "<85MS",
    icon: Timer,
    status: "FAST",
  },
  {
    label: "SYS_UPTIME",
    value: "99.98%",
    icon: Zap,
    status: "STABLE",
  },
  {
    label: "AUTH_NODES",
    value: "100+",
    icon: ShieldCheck,
    status: "SECURE",
  },
];

export default function Stats() {
  return (
    <section className="w-full py-24 bg-card/50 border-b border-primary/10 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border-2 border-primary/10 bg-card hover:border-accent/40 transition-all group relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-10">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-accent" />
              </div>

              <div className="flex justify-between items-start mb-4">
                <stat.icon size={18} className="text-primary/60 group-hover:text-accent transition-colors" />
                <span className="text-[10px] font-bold text-accent px-2 py-0.5 border border-accent/20 bg-accent/5">
                  {stat.status}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tighter text-primary group-hover:text-accent transition-colors">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>

              <div className="mt-6 flex gap-1 h-[2px] w-full bg-primary/5">
                <div className="h-full bg-accent/30 w-1/3 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Global Node Distribution // Active Clusters: 08</div>
           <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
             <span>AWS // US-EAST-1</span>
             <span>GCP // EUROPE-WEST1</span>
             <span>AZURE // ASIA-SOUTH1</span>
           </div>
        </div>
      </div>
    </section>
  );
}
