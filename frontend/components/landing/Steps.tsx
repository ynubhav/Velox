"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Globe, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "PROVISION_GATEWAY",
    desc: "Initialize isolated gateway nodes with cryptographically secure credentials and unique namespace mapping.",
    icon: Cpu,
  },
  {
    step: "02",
    title: "MAP_ENDPOINTS",
    desc: "Register upstream backend services via unified API console. automated collision detection for all proxy routes.",
    icon: Globe,
  },
  {
    step: "03",
    title: "LOCKDOWN_ACCESS",
    desc: "Deploy origin-whitelisting and cryptographically signed API keys. Grant granular access control at route level.",
    icon: Terminal,
  },
  {
    step: "04",
    title: "OPTIMIZE_FLOW",
    desc: "Configuring Redis cache TTLs and Token-Bucket rate limiters. Ensure sub-ms overhead on your data aircraft.",
    icon: Code,
  },
  {
    step: "05",
    title: "LAUNCH_OPERATIONS",
    desc: "Migrate traffic to your Velox production endpoint. Monitor live metrics through real-time telemetry dashboard.",
    icon: Rocket,
  },
];

export default function Steps() {
  return (
    <section className="w-full py-32 bg-card/50 border-y border-primary/10 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <p className="text-accent text-xs font-bold tracking-[0.5em] uppercase">Deployment_Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary uppercase">
            From Init To Global Scale.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Tablet+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/10 hidden lg:block" />

          <div className="space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Info */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                   <div className={`flex items-center gap-4 justify-center ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                     <span className="text-4xl font-bold text-accent/20">#{s.step}</span>
                     <h3 className="text-2xl font-bold text-primary uppercase">{s.title}</h3>
                   </div>
                   <p className={`text-sm text-muted-foreground uppercase leading-relaxed max-w-md mx-auto ${i % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0'}`}>
                     {s.desc}
                   </p>
                </div>

                {/* Central Icon Point */}
                <div className="relative z-10 flex items-center justify-center h-20 w-20 bg-card border-2 border-primary/20 rounded-none shadow-[0_0_30px_rgba(148,163,184,0.1)] group hover:border-accent transition-colors">
                  <s.icon size={24} className="text-primary/50 group-hover:text-accent transition-colors" />
                </div>

                {/* Spacer for reverse layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
