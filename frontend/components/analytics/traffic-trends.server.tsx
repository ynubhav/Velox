import SimpleLineChart from "../ui/analytics/line-chart.client";

export default async function TrafficTrends() {
  // TODO: replace with DB aggregation
  // group by minute/hour → count(*)
  const data = [
    { time: "10:00", requests: 120 },
    { time: "10:05", requests: 240 },
    { time: "10:10", requests: 180 },
    { time: "10:15", requests: 300 },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-400">
        Requests over time
      </h2>
      <SimpleLineChart data={data} dataKey="requests" />
    </div>
  );
}
