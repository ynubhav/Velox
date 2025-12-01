"use client";

import { Activity, Timer, CheckCircle, Users } from "lucide-react";
import CompaniesCarousel from "./companies-carousel";

const stats = [
  {
    label: "Requests Processed",
    value: "5M+",
    icon: Activity,
    description: "Number of API requests successfully handled.",
  },
  {
    label: "Avg Latency",
    value: "<100ms",
    icon: Timer,
    description: "Average response time for API requests.",
  },
  {
    label: "Uptime",
    value: "99.99%",
    icon: CheckCircle,
    description: "Percentage of time the service is operational.",
  },
  {
    label: "Developers",
    value: "100+",
    icon: Users,
    description: "Number of developers using the platform.",
  },
];

export default function Stats() {
  return (
    <section className="w-full min-h-screen bg-radial-[at_50%_15%] from-sky-300 via-purple-200 to-green-200 to-90% from-25% py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center p-6 bg-[#181A1D] rounded-xl border border-[#27292D] shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {/* Icon */}
            <stat.icon className="text-blue-400 size-10 mb-3 animate-pulse" />

            {/* Value */}
            <p className="text-3xl font-bold text-white">{stat.value}</p>

            {/* Label */}
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>

            <p className="text-xs text-gray-500 mt-1 text-center">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-600 mt-12 italic font-serif text-2xl px-1">
        Velox powers the world's best businesses and most disruptive technologies.
      </div>
      <div><CompaniesCarousel /></div>
    </section>
  );
}
