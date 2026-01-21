"use client";

import { Logout } from "@/lib/logout";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { toast } from "sonner";

export default function AccountPage({ session }: {session: Session}) {
  const handlelogout = async () => {
    toast("Log Me out", {
      action: {
        label: "confirm",
        onClick: async () => await Logout(),
      },
      cancel: {
        label: "cancel",
        onClick: () => {
          return;
        },
      },
      position: "top-center",
      richColors: true,
    });
  };

  return (
    <div className="bg-black w-full h-screen text-white flex items-center justify-center">
      <div className="text-black w-max rounded border-white">
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">
          name:{" " + session.user.name}
        </div>
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">
          email:{" " + session.user.email}
        </div>
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">
          role:{" " + session.user.role}
        </div>
        {/* <div>Connected Accounts</div>
        <div>Google</div>
        <div>Github</div> */}
        <button
          onClick={handlelogout}
          className="flex gap-2 w-full justify-center text-rose-500 items-center bg-gray-200 rounded px-4 py-2"
        >
          <LogOut className="size-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
