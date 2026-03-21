"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Logout } from "@/lib/logout";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const { data: session } = useSession();
  const profileRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ];

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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] font-mono">
      <nav
        className="backdrop-blur-xl bg-card/80 border-2 border-primary/20 
        shadow-[0_8px_30px_rgb(0,0,0,0.3)] 
        rounded-none px-6 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:cursor-pointer group">
          <img className="h-8 grayscale group-hover:grayscale-0 transition-all" src="veloxlogo.svg" alt="velox" />
          <p className="font-bold text-primary tracking-tighter text-lg underline decoration-accent/50 decoration-2 underline-offset-4">
            VELOX.SH
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="text-muted-foreground hover:text-accent transition-all duration-200 text-sm uppercase tracking-widest hover:underline underline-offset-4"
            >
              {l.name}
            </Link>
          ))}

          {!session ? (
            <Link
              href={"/signup"}
              className="btn-primary text-xs"
            >
              [ GET_STARTED ]
            </Link>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="h-10 w-10 border-2 border-accent text-accent font-bold flex items-center justify-center hover:bg-accent hover:text-background transition-all"
              >
                {firstLetter}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-none bg-muted border-2 border-primary shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    {">"} PROFILE
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    {">"} DASHBOARD
                  </Link>
                  <div className="h-[2px] bg-primary/20 my-1" />
                  <button
                    onClick={handlelogout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500 hover:text-foreground transition-colors"
                  >
                    {">"} LOGOUT
                  </button>
                </div>
              )}
            </div>
          )}
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-primary hover:text-accent transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="mt-3 backdrop-blur-xl bg-card/90 border-2 border-primary/20 
          rounded-none px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)] md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in"
        >
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground font-medium hover:text-accent transition uppercase tracking-widest border-b border-primary/10"
            >
              {">"} {l.name}
            </Link>
          ))}

          {!session ? (
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="btn-primary text-center"
            >
              [ GET_STARTED ]
            </Link>
          ) : (
            <div className="flex flex-col gap-4">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="py-2 text-primary font-bold hover:text-accent transition uppercase tracking-widest border-b border-primary/10"
              >
                {">"} DASHBOARD
              </Link>
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="py-2 text-primary font-bold hover:text-accent transition uppercase tracking-widest border-b border-primary/10"
              >
                {">"} PROFILE
              </Link>
              <button
                onClick={async () => {
                  setOpen(false);
                  await Logout();
                }}
                className="btn-secondary text-red-400 border-red-400/50 w-full"
              >
                [ LOGOUT ]
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
