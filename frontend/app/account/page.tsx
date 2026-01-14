"use client";
import getuserinfo from "@/backend_proxy_functions/getUserinfo";
import { Logout } from "@/lib/logout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function () {
  const [userInfo, setuserInfo] = useState<{
    name: string;
    id: string;
    email: string;
    role: string;
  }>({ name: "", id: "", email: "", role: "" });
  const router=useRouter();
  useEffect(() => {
    const userfn = async () => {
      const userdata: any = await getuserinfo();
      if(!userdata.authenticated){
        toast.error('Unauthorised Login')
        router.push('/');
      }
      setuserInfo(userdata);
    };
    userfn();
  }, []);

  const handlelogout = async () => {
    toast("Log Me out", {
      action: {
        label: "confirm",
        onClick: async() => await Logout(),
      },
      cancel: { 
        label: "cancel",
        onClick: () => {return} 
      },
      position: "top-center",
      richColors:true
    });
  };

  return (
    <div className="bg-black w-full h-screen text-white flex items-center justify-center">
      <div className="text-black w-max rounded border-white">
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">name:{" "+userInfo.name}</div>
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">email:{" "+userInfo.email}</div>
        <div className="flex gap-2 items-center bg-gray-200 rounded px-4 py-2">role:{" "+userInfo.role}</div>
        {/* <div>Connected Accounts</div>
        <div>Google</div>
        <div>Github</div> */}
        <button 
        onClick={handlelogout}
        className="flex gap-2 w-full justify-center text-rose-500 items-center bg-gray-200 rounded px-4 py-2"><LogOut className="size-5"/>Logout</button>
      </div>
    </div>
  );
}
