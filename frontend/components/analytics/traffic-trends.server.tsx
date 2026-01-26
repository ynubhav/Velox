import SimpleLineChart from "../ui/analytics/line-chart.client";

export default async function TrafficTrends() {
  // TODO: replace with DB aggregation
  // group by minute/hour → count(*)
  const data = [
    { time: "10:00", requests: 120 },
    { time: "10:05", requests: 240 },
    { time: "10:10", requests: 180 },
    { time: "10:15", requests: 300 },
    { time: "10:20", requests: 220 },
    { time: "10:25", requests: 280 },
    { time: "10:30", requests: 350 },
    { time: "10:35", requests: 420 },
    { time: "10:40", requests: 390 },
    { time: "10:45", requests: 450 },
    { time: "10:50", requests: 480 },
    { time: "10:55", requests: 520 },
    { time: "11:00", requests: 600 },
    { time: "11:05", requests: 580 },
    { time: "11:10", requests: 620 },
    { time: "11:15", requests: 700 },
  ];

  return (
    <div className="space-y-2 w-full">
      <h2 className="text-sm font-medium text-neutral-400">
        Requests over time
      </h2>
      <SimpleLineChart data={data} dataKey="requests" />
    </div>
  );
}
