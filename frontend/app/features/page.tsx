"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Database, BarChart3, Key, Globe } from "lucide-react";

const features = [
  {
    title: "SECURE_PROXY",
    icon: <Shield className="w-6 h-6" />,
    description: "Advanced request mapping with deep header inspection and malicious pattern detection.",
    tag: "STABLE",
  },
  {
    title: "REDIS_CACHING",
    icon: <Database className="w-6 h-6" />,
    description: "Global low-latency caching powered by Upstash. Reduce origin load by up to 90%.",
    tag: "READY",
  },
  {
    title: "RATE_LIMITING",
    icon: <Zap className="w-6 h-6" />,
    description: "Precise control over request throughput with sliding window algorithms.",
    tag: "STABLE",
  },
  {
    title: "REAL_TIME_ANALYTICS",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Monitor every request, error, and latency peak in real-time through our stream processor.",
    tag: "ACTIVE",
  },
  {
    title: "API_KEY_MGMT",
    icon: <Key className="w-6 h-6" />,
    description: "Issue, rotate, and revoke API keys with granular permission scopes and TTLs.",
    tag: "STABLE",
  },
  {
    title: "GLOBAL_DEPLOY",
    icon: <Globe className="w-6 h-6" />,
    description: "Deploy to Cloudflare Workers in 30 seconds. Run your gateway at the edge.",
    tag: "NEW",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-mono">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary underline decoration-accent decoration-4 underline-offset-8">
          SYSTEM_CAPABILITIES
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg uppercase tracking-widest">
          // A modular suite of high-performance tools designed for modern API infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group border-2 border-primary/20 p-8 hover:border-accent/50 transition-all hover:bg-muted shadow-[4px_4px_0px_0px_rgba(148,163,184,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(16,185,129,0.2)]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 text-accent border border-primary/20">
                {feature.icon}
              </div>
              <span className="text-[10px] text-accent font-bold bg-accent/10 px-2 py-1 tracking-[0.2em]">
                [{feature.tag}]
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter text-primary">
              {">"} {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
            <div className="mt-8 pt-6 border-t border-primary/10 flex items-center justify-between text-[10px] uppercase tracking-widest">
              <span className="text-muted-foreground/50">ID: CAP_00{i + 1}</span>
              <span className="text-accent hover:underline cursor-pointer transition-all">VIEW_DETAILS()</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 p-12 border-2 border-accent/20 bg-accent/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 font-bold text-accent/20 text-4xl select-none">DEBUG_INFO</div>
        <h2 className="text-2xl font-bold mb-6 text-primary">{">"} CUSTOM_CONFIGURATION</h2>
        <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed uppercase tracking-wide text-sm">
          Need a custom plugin or specialized handler? Velox is built on Hono and fully extensible. 
          Write your own middleware and deploy it globally in seconds.
        </p>
        <button className="btn-secondary">
          READ_ARCHITECTURE_DOCS
        </button>
      </div>
    </div>
  );
}
