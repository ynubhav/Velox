import CacheEfficiency from "@/components/analytics/cache-efficiency.server";
import HealthSummary from "@/components/analytics/health-summary.server";
import LatencyBreakdown from "@/components/analytics/latency-breakdown.server";
import RecentActivity from "@/components/analytics/recent-activity.server";
import TrafficTrends from "@/components/analytics/traffic-trends.server";
import ChartSkeleton from "@/components/skeletons/Chart.Skeleton";
import KpiSkeleton from "@/components/skeletons/KPI.Skeleton";
import TableSkeleton from "@/components/skeletons/Table.Skeleton";
import Routercomponent from "@/components/ui/analytics/route.client";
import { Suspense } from "react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-4 p-6">
      <Routercomponent />
      <Suspense fallback={<KpiSkeleton />}>
        <HealthSummary />
      </Suspense>
      <div className="flex gap-2 w-full">
        <div className="w-1/3">
        <Suspense fallback={<TableSkeleton />}>
          <RecentActivity />
        </Suspense>
        </div>
        <div className="flex gap-2 w-2/3">
          <Suspense fallback={<ChartSkeleton />}>
            <TrafficTrends />
          </Suspense>
          <Suspense fallback={<ChartSkeleton />}>
            <CacheEfficiency />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<ChartSkeleton />}>
        <LatencyBreakdown />
      </Suspense>
    </div>
  );
}
