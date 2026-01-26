import { Logout } from "@/lib/logout";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function Dashnavbar() {
  return (
    <div className="px-4 py-2 w-full flex justify-between items-center border-b-gray-300 border-b">
      <p className="text-xl font-bold">Velox APIs Dashboard</p>
      <div className="flex gap-2">
        <button
          onClick={() =>
            toast("Logging out", {
              action: {
                label: "Confirm",
                onClick: async () => await Logout(),
              },
              cancel: {
                label: "Cancel",
                onClick: async () => {},
              },
            })
          }
          className="btn-danger flex items-center gap-1"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
