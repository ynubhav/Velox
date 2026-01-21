export default function KpiSkeleton() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-20 rounded-xl bg-neutral-900 animate-pulse"
        />
      ))}
    </div>
  );
}
