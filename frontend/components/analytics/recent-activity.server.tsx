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
    {
      id: "3",
      timestamp: "10:14:48",
      method: "GET",
      route: "/api/users/123",
      statusCode: 200,
      gatewayLatency: 130,
      cached: true,
    },
    {
      id: "4",
      timestamp: "10:14:30",
      method: "DELETE",
      route: "/api/projects/456",
      statusCode: 204,
      gatewayLatency: 210,
      cached: false,
    },
    {
      id: "5",
      timestamp: "10:14:10",
      method: "PUT",
      route: "/api/users/123",
      statusCode: 200,
      gatewayLatency: 170,
      cached: true,
    },
    {
      id: "6",
      timestamp: "10:13:55",
      method: "GET",
      route: "/api/stats/overview",
      statusCode: 200,
      gatewayLatency: 110,
      cached: true,
    },
    {
      id: "7",
      timestamp: "10:13:40",
      method: "POST",
      route: "/api/projects",
      statusCode: 201,
      gatewayLatency: 250,
      cached: false,
    },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-900">Recent activity</h2>
      <div className="overflow-y-scroll h-72">
        <LogsTable logs={logs} />
      </div>
    </div>
  );
}
