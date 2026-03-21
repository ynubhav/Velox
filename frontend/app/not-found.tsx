"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 font-mono text-center">
      <div className="mb-12 border-4 border-red-500/50 p-12 bg-red-500/5 shadow-[20px_20px_0px_0px_rgba(239,68,68,0.1)]">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <p className="text-primary font-bold text-xl uppercase tracking-widest mb-2">
          ERROR_ROUTE_NOT_FOUND
        </p>
        <div className="h-[2px] bg-red-500/20 w-1/2 mx-auto my-6" />
        <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed uppercase">
          The requested resource was not located on this node. Please check your spelling or return to the base directory.
        </p>
      </div>

      <div className="space-y-6">
        <Link href="/" className="btn-primary block w-full px-12 py-3 text-lg tracking-[0.2em]">
          [ RETURN_TO_BASE_URL ]
        </Link>
        <div className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.4em]">
          TIMESTAMP: {new Date().toISOString()}
        </div>
      </div>

      {/* Background Glitch Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] text-[8px] overflow-hidden whitespace-nowrap leading-none select-none z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>
            {"FATAL ERROR: Segment Fault. Memory could not be read. ".repeat(20)}
          </div>
        ))}
      </div>
    </div>
  );
}
