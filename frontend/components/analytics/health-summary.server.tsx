import KpiCards from "../ui/analytics/kpi-cards.client";


export default async function HealthSummary() {
  // 🔥 heavy aggregation (example)
  const data = {
    requests: 124532,
    errorRate: 2.1,
    avgLatency: 182,
    p95Latency: 620,
    cacheHit: 44,
    apiKeys: 18,
  };

  return <KpiCards data={data} />;
}
