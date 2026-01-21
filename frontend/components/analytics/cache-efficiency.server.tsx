import SimpleLineChart from "../ui/analytics/line-chart.client";


export default async function CacheEfficiency() {
  // TODO: replace with DB aggregation
  // sum(cached=true) / total
  const data = [
    { time: "10:00", hitRate: 40 },
    { time: "10:05", hitRate: 55 },
    { time: "10:10", hitRate: 48 },
    { time: "10:15", hitRate: 60 },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-400">
        Cache hit ratio (%)
      </h2>
      <SimpleLineChart data={data} dataKey="hitRate" />
    </div>
  );
}
