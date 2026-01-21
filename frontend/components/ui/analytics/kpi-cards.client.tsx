"use client";

export default function KpiCards({ data }: any) {
  const items = [
    ["Requests", data.requests],
    ["Error Rate", `${data.errorRate}%`],
    ["Avg Latency", `${data.avgLatency} ms`],
    ["P95 Latency", `${data.p95Latency} ms`],
    ["Cache Hit", `${data.cacheHit}%`],
    ["API Keys", data.apiKeys],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        >
          <p className="text-xs text-neutral-500">{label}</p>
          <p className="text-xl font-semibold text-neutral-100">{value}</p>
        </div>
      ))}
    </div>
  );
}
