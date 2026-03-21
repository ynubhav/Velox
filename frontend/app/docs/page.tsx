"use client";
import { useState } from "react";
import Link from "next/link";

const sidebar = [
  {
    title: "GETTING_STARTED",
    links: [
      { name: "Introduction", href: "#intro" },
      { name: "Quickstart", href: "#quickstart" },
      { name: "Core Concepts", href: "#concepts" },
    ],
  },
  {
    title: "OPERATIONS",
    links: [
      { name: "Routing Rules", href: "#routing" },
      { name: "Redis Caching", href: "#caching" },
      { name: "Rate Limiting", href: "#limits" },
      { name: "Environment Vars", href: "#env" },
    ],
  },
  {
    title: "DEPLOYMENT",
    links: [
      { name: "Cloudflare Workers", href: "#workers" },
      { name: "Local Development", href: "#local" },
      { name: "Self Hosting", href: "#hosting" },
    ],
  },
];

export default function DocsPage() {
  const [active, setActive] = useState("Introduction");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-mono flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-28 space-y-8">
          {sidebar.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2 px-2 border-l-2 border-accent/30">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => setActive(link.name)}
                      className={`w-full text-left px-3 py-2 text-sm uppercase tracking-widest transition-all ${
                        active === link.name 
                          ? "bg-primary text-background font-bold border-l-4 border-accent" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {"> "} {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl border-l border-primary/10 pl-0 md:pl-12">
        <div className="mb-12">
          <div className="text-[10px] text-accent mb-4 uppercase tracking-[0.5em]">// DOCUMENTATION_NODE_01</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6">
            {active.toUpperCase()}
          </h1>
          <div className="h-[4px] bg-primary/20 w-32 mb-10" />
        </div>

        <article className="prose prose-invert max-w-none space-y-8 text-primary/80 leading-relaxed uppercase text-sm tracking-wide">
          <section id="intro">
            <h2 className="text-xl font-bold text-primary border-b border-primary/20 pb-2 mb-4">01_OVERVIEW</h2>
            <p>
              Velox is a high-performance, modular API Gateway designed to run at the edge. 
              Built on the Hono framework, it provides minimal overhead and massive scalability 
              out of the box. Secure your endpoints, manage traffic, and observe performance in real-time.
            </p>
          </section>

          <section id="features" className="p-8 border-2 border-primary/10 bg-muted/50">
            <h2 className="text-xl font-bold text-primary mb-4 italic">02_CORE_ARCHITECTURE</h2>
            <p>
              The gateway consists of a main Proxy Engine, a Config Loader for dynamic rule updates, 
              and a Redis-backed persistence layer for caching and rate limiting.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="px-3 py-1 border border-accent/30 text-accent text-[10px] font-bold">[ HONO_CORE ]</span>
              <span className="px-3 py-1 border border-accent/30 text-accent text-[10px] font-bold">[ REDIS_SYNC ]</span>
              <span className="px-3 py-1 border border-accent/30 text-accent text-[10px] font-bold">[ CF_WORKER_READY ]</span>
            </div>
          </section>

          <section id="quickstart">
            <h2 className="text-xl font-bold text-primary border-b border-primary/20 pb-2 mb-4">03_BOOTSTRAP</h2>
            <p className="mb-4">Initialize the gateway with a single command:</p>
            <div className="bg-background p-6 border-2 border-primary/20 overflow-x-auto">
              <code className="text-emerald-400">
                $ npx create-velox-gateway my-api
              </code>
            </div>
          </section>
        </article>

        <div className="mt-20 pt-10 border-t border-primary/10 flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest">
          <span>LAST_UPDATED: 2026-03-20T23:25:00Z</span>
          <span className="text-accent hover:underline cursor-pointer transition-all">EDIT_ON_GITHUB()</span>
        </div>
      </main>
    </div>
  );
}
