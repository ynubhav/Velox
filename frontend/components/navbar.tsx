"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Logout } from "@/lib/logout";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { data: session } = useSession();
  const profileRef = useRef<HTMLDivElement>(null);

  const links = ["Features", "Pricing", "Docs", "Blog"];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const firstLetter = session?.user?.name?.charAt(0).toUpperCase();

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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%]">
      <nav
        className="backdrop-blur-xl bg-white/10 border border-white/20 
        shadow-[0_8px_30px_rgb(0,0,0,0.15)] 
        rounded-2xl px-6 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <img className="h-10" src="veloxlogo.svg" alt="velox" />
          <p className="font-bold text-slate-900 tracking-wide text-lg italic">
            VELOX
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              className="text-gray-500 hover:text-gray-800 transition-all duration-100 font-medium hover:scale-105 hover:cursor-pointer hover:underline underline-offset-4"
            >
              {l}
            </button>
          ))}

          {!session ? (
            <Link
              href={"/signup"}
              className="px-5 py-2 rounded-full bg-radial-[at_1%_99%] from-blue-600 via-blue-200 to-blue-500 to-90% from-5% text-white font-semibold shadow-md
              hover:shadow-lg transition-all cursor-pointer hover:outline-2 outline-blue-600 hover:scale-105"
            >
              Get Started
            </Link>
          ) : (
            <div className="relative" ref={profileRef}>
              {/* Profile Circle */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="h-10 w-10 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center hover:cursor-pointer"
              >
                {firstLetter}
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-40 rounded-xl bg-white shadow-md border border-gray-100">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-gray-700 rounded-t-xl hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handlelogout}
                    className="w-full text-left px-4 py-2 rounded-b-xl text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="mt-3 backdrop-blur-xl bg-white/10 border border-white/20 
          rounded-2xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.25)] md:hidden"
        >
          {links.map((l) => (
            <div
              key={l}
              className="py-2 text-gray-500 font-medium hover:cursor-pointer hover:text-gray-600 transition"
            >
              {l}
            </div>
          ))}

          {!session ? (
            <Link
              href="/signup"
              className="w-full mt-10 px-5 py-2 rounded-full bg-linear-to-r
              from-blue-500 via-blue-300 to-purple-600 hover:scale-105 text-white font-semibold shadow-md hover:cursor-pointer"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={async () => await Logout()}
              className="w-full mt-10 px-5 py-2 rounded-full bg-linear-to-r
              from-blue-500 via-blue-300 to-purple-600 hover:scale-105 text-white font-semibold shadow-md hover:cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
