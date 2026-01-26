"use client";

export default function LogsTable({ logs }: any) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-neutral-100 text-neutral-900">
          <tr>
            <th className="p-3 text-left">Time</th>
            <th className="p-3">Route</th>
            <th className="p-3">Status</th>
            <th className="p-3">Latency</th>
            <th className="p-3">Cached</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log: any) => (
            <tr
              key={log.id}
              className="border-t border-neutral-800 text-neutral-900"
            >
              <td className="p-3">{log.timestamp}</td>
              <td className="p-3">{log.method} {log.route}</td>
              <td className="p-3">{log.statusCode}</td>
              <td className="p-3">{log.gatewayLatency} ms</td>
              <td className="p-3">{log.cached ? "HIT" : "MISS"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
