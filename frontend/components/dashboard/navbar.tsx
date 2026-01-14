"use client";
import { Logout } from "@/lib/logout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function Dashnavbar() {
  const router = useRouter();
  return (
    <div className="px-4 py-2 w-full bg-black text-white flex justify-between">
      <div>Velox APIs Dashboard</div>
      <div className="flex gap-2">
        <button
          onClick={async () => {
            await Logout();
          }}
          className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 rounded px-2 py-1"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
