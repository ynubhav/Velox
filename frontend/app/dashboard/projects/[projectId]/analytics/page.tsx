import CacheEfficiency from "@/components/analytics/cache-efficiency.server";
import HealthSummary from "@/components/analytics/health-summary.server";
import LatencyBreakdown from "@/components/analytics/latency-breakdown.server";
import RecentActivity from "@/components/analytics/recent-activity.server";
import TrafficTrends from "@/components/analytics/traffic-trends.server";
import ChartSkeleton from "@/components/skeletons/Chart.Skeleton";
import KpiSkeleton from "@/components/skeletons/KPI.Skeleton";
import TableSkeleton from "@/components/skeletons/Table.Skeleton";
import { Suspense } from "react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 p-6">
      <Suspense fallback={<KpiSkeleton />}>
        <HealthSummary />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <TrafficTrends />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <LatencyBreakdown />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <CacheEfficiency />
      </Suspense>

      <Suspense fallback={<TableSkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}
