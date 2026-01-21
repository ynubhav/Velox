export default function TableSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-10 rounded bg-neutral-900 animate-pulse"
        />
      ))}
    </div>
  );
}
