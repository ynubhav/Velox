import SimpleLineChart from "../ui/analytics/line-chart.client";

export default async function LatencyBreakdown() {
  // TODO: replace with DB aggregation
  // avg(gatewayLatency), avg(backendLatency)
  const data = [
    { time: "10:00", gateway: 120, backend: 80 },
    { time: "10:05", gateway: 150, backend: 110 },
    { time: "10:10", gateway: 200, backend: 160 },
    { time: "10:15", gateway: 180, backend: 140 },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-400">
        Latency breakdown
      </h2>

      {/* reuse chart twice instead of overloading */}
      <SimpleLineChart data={data} dataKey="gateway" />
      <SimpleLineChart data={data} dataKey="backend" />
    </div>
  );
}
