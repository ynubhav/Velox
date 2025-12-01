import { Shield, Gauge, Activity, KeyRound, BarChart2, Server } from "lucide-react";

const features = [
  {
    title: "Reverse Proxy",
    desc: "Unified gateway for all your backend services.",
    icon: Server,
  },
  {
    title: "Rate Limiting",
    desc: "Protect endpoints with per-route throttling.",
    icon: Gauge,
  },
  {
    title: "Caching",
    desc: "Redis-backed lightning-fast GET caching.",
    icon: Activity,
  },
  {
    title: "API Keys",
    desc: "Secure hashed API keys with instant revocation.",
    icon: KeyRound,
  },
  {
    title: "Analytics",
    desc: "Real-time insights, charts & request logs.",
    icon: BarChart2,
  },
  {
    title: "Security Layer",
    desc: "Origin whitelisting, JWT, OAuth & more.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="w-full min-h-screen bg-linear-45 from-black via-blue-200 to-blue-100 mx-auto py-24 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-500">
        Powerful Features, Zero Hassle
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="p-6 bg-black border border-[#222] rounded-xl flex flex-col gap-4 hover:bg-[#151515] transition"
          >
            <Icon className="text-white" size={32} />
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm ">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
