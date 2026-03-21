"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const systemLogs = [
  "INITIALIZING VELOX CORE...",
  "LOADING REDIS_CACHE_MODULE...",
  "ESTABLISHING SECURE_PROXY_GATEWAY...",
  "READY FOR DEPLOYMENT.",
];

export default function Hero() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % systemLogs.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden border-b border-primary/10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        {/* System Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 mb-8">
          <Terminal size={12} className="text-accent" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
            Protocol: Velox_v1.0.42 // Active
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase mb-6 leading-[0.9]">
          Secure Your API <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">Infrastructure</span>
        </h1>

        <p className="text-sm md:text-lg text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto mb-10 leading-relaxed">
          The minimal, high-performance gateway for teams who demand 
          <span className="text-primary italic"> absolute control </span> 
          over their traffic.
        </p>

        {/* Console Log Area */}
        <div className="mb-12 h-8 flex items-center justify-center gap-3">
          <span className="text-accent/50 group-hover:text-accent transition-colors font-bold">{">"}</span>
          <motion.span 
            key={logIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs md:text-sm font-mono text-accent/80 tracking-widest uppercase"
          >
            {systemLogs[logIndex]}
          </motion.span>
          <span className="w-2 h-4 bg-accent/50 animate-pulse ml-1" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/signup"
            className="btn-primary flex items-center gap-3 group px-8"
          >
            [ INITIALIZE_PROJECT ]
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/docs"
            className="btn-secondary px-8"
          >
            [ READ_DOCUMENTATION ]
          </Link>
        </div>
      </motion.div>

      {/* Side Metadata Labels */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-12 border-l border-primary/10 pl-4 py-8 pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-muted-foreground/30 font-bold uppercase tracking-widest">LAYER_01</span>
          <span className="text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-2">
            <Shield size={10} /> AUTH_VALIDATION
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-muted-foreground/30 font-bold uppercase tracking-widest">LAYER_02</span>
          <span className="text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-2">
            <Zap size={10} /> REDIS_CACHE
          </span>
        </div>
      </div>
    </section>
  );
}
