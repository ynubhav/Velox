"use client";

export default function KpiCards({ data }: any) {
  if (!data) {
    return <div className="p-4 text-sm text-neutral-500">No KPI data available.</div>;
  }

  const items = [
    ["Requests", data.requests || 0],
    ["Error Rate", `${data.errorRate || 0}%`],
    ["Avg Latency", `${data.avgLatency || 0} ms`],
    ["P95 Latency", `${data.p95Latency || 0} ms`],
    ["Cache Hit", `${data.cacheHit || 0}%`],
    ["API Keys", data.apiKeys || 0],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map(([label, value]) => (
        <div
          key={label as string}
          className="rounded-xl border border-neutral-800 bg-neutral-100 p-4"
        >
          <p className="text-xs text-neutral-500">{label}</p>
          <p className="text-xl font-semibold text-neutral-950">{value}</p>
        </div>
      ))}
    </div>
  );
}
