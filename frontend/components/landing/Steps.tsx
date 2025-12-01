import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Spin Up Your Gateway",
    desc: "Create a new isolated project with auto-generated credentials, environment settings, and a unique proxy base path.",
  },
  {
    step: "2",
    title: "Add Your Backend Routes",
    desc: "Register backend services with method, target URL, and mapped paths. Velox auto-checks collisions and assigns unique proxy slugs.",
  },
  {
    step: "3",
    title: "Apply Auth & API Keys",
    desc: "Enable authRequired, issue hashed API keys, set origin whitelists, and lock down access at project or route level.",
  },
  {
    step: "4",
    title: "Add Caching & Rate Limits",
    desc: "Enable Redis caching for GETs, set TTLs, and activate global or per-route rate limiting for reliability and speed.",
  },
  {
    step: "5",
    title: "Go Live & Monitor",
    desc: "Start routing traffic through your Velox URL and monitor real-time metrics like latency, error rates, and request volumes.",
  },
];

export default function Steps() {
  return (
    <section className="w-full min-h-screen mx-auto py-24 px-4 bg-black">
      <h2
        className="relative w-fit mx-auto mb-20 px-12 py-5 font-extrabold 
text-4xl md:text-5xl text-white tracking-tight select-none
transition-transform duration-300 hover:scale-[1.03]"
      >
        {/* Orbital Glow Halo */}
        <span
          className="absolute inset-0 -z-20 rounded-full blur-3xl opacity-40 
    bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-orbit"
        ></span>

        {/* Animated Gradient Border Ring */}
        <span
          className="absolute inset-0 -z-10 rounded-full p-[3px] 
    bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 
    animate-gradient-border"
        >
          <span className="block h-full w-full rounded-full bg-[#0d0d0d]/80 backdrop-blur-xl"></span>
        </span>

        {/* Text Glow */}
        <span className="relative drop-shadow-[0_0_20px_rgba(90,200,255,0.45)]">
          How It Works
        </span>
      </h2>

      {/* FIX: wrap + centered + spacing */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-center">
            {/* Step Card */}
            <div className="p-8 bg-[#111] border border-[#222] rounded-xl text-center w-64">
              <p className="text-5xl font-extrabold bg-gradient-to-b from-blue-200 via-pink-300 to-violet-400 text-transparent bg-clip-text">
                {s.step}
              </p>
              <h3 className="text-xl font-bold text-white mt-4">{s.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{s.desc}</p>
            </div>

            {/* Arrow (only on big screens AND only if next step fits horizontally) */}
            {/* {i < steps.length - 1 && (
              <ArrowRight className="hidden lg:block mx-6 text-slate-500 size-10" />
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}
