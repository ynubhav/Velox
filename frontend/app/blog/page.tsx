"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "RESTRUCTURING_FOR_THE_EDGE",
    date: "2026-03-18",
    author: "ADMIN",
    excerpt: "Moving from Node.js to Cloudflare Workers for 30ms global latency. Challenges and solutions during the migration.",
    tags: ["ENGINEERING", "CLOUDFLARE"],
  },
  {
    id: 2,
    title: "REDIS_CACHING_STRATEGIES",
    date: "2026-03-15",
    author: "LEAD_ARCH",
    excerpt: "How we implemented sliding window rate limiting and object caching with Upstash Redis SDK.",
    tags: ["PERFORMANCE", "REDIS"],
  },
  {
    id: 3,
    title: "SECURITY_FIRST_GATEWAYS",
    date: "2026-03-10",
    author: "SEC_OPS",
    excerpt: "Deep dive into our header inspection engine and automatic SQLi/XSS prevention middleware.",
    tags: ["SECURITY", "HONO"],
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-mono">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
          BYTE_STREAM
        </h1>
        <p className="text-muted-foreground uppercase tracking-widest leading-loose">
          // CHRONICLING THE DEVELOPMENT OF VELOX AND THE STATE OF EDGE INFRASTRUCTURE.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post, i) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group block border-2 border-primary/10 p-8 hover:border-accent/40 bg-card hover:bg-muted transition-all cursor-pointer relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex gap-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-accent font-bold px-2 py-1 bg-accent/5 border border-accent/20 tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
              <time className="text-xs text-muted-foreground font-bold tracking-tighter font-mono">
                [ {post.date} ]
              </time>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-primary mb-4 group-hover:text-accent transition-colors">
              {"> "} {post.title}
            </h2>

            <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed uppercase tracking-wide text-sm">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-primary/10">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                AUTHOR: {post.author}
              </span>
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] group-hover:underline">
                READ_FULL_POST()
              </span>
            </div>

            {/* Terminal decoration */}
            <div className="absolute top-2 right-2 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="btn-secondary px-12">
          LOAD_OLDER_LOGS_
        </button>
      </div>
    </div>
  );
}
