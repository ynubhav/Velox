"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-40 bg-card relative overflow-hidden font-mono border-t border-primary/10">
      {/* Background scanline effect */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.05]" />
      
      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 text-red-500/80 text-xs font-bold tracking-[0.4em] uppercase">
            <Terminal size={14} />
            CRITICAL_COMMAND: INITIALIZE_INSTANCE
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary uppercase leading-tight">
            Ready To Consolidate <br /> Your API Grid?
          </h2>

          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
            Deployment takes less than 60 seconds. <br />
            No credit card required for standard initialization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <Link
              href="/signup"
              className="btn-primary flex items-center gap-3 group px-12 py-4"
            >
              [ GET_STARTED_NOW ]
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.3em] font-mono border-b border-primary/10 hover:border-primary/50 pb-1"
            >
              // REQUEST_ENTERPRISE_DEMO
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-10">
        <div className="text-[15vw] font-bold text-primary tracking-tighter select-none leading-none">
          VELOX_v1
        </div>
      </div>
    </section>
  );
}
