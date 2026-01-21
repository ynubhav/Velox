import LogsTable from "@/components/ui/analytics/logs-table.client";

export default async function RecentActivity() {
  // TODO: replace with DB query
  // sort by timestamp desc, limit 50–100
  const logs = [
    {
      id: "1",
      timestamp: "10:15:02",
      method: "GET",
      route: "/api/projects",
      statusCode: 200,
      gatewayLatency: 180,
      cached: true,
    },
    {
      id: "2",
      timestamp: "10:14:55",
      method: "POST",
      route: "/api/auth/login",
      statusCode: 401,
      gatewayLatency: 95,
      cached: false,
    },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-400">
        Recent activity
      </h2>
      <LogsTable logs={logs} />
    </div>
  );
}
