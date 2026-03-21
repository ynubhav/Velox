"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Globe, Github, Terminal, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });
    if (res?.url) router.push(res.url);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-md font-mono"
    >
      <div className="border-2 border-primary/20 bg-card p-8 shadow-[10px_10px_0px_0px_rgba(148,163,184,0.1)]">
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-3 text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
            <Terminal size={14} />
            User_Authentication
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-primary uppercase">
            Log_In
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Social login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              type="button"
              className="btn-secondary flex items-center justify-center gap-3 text-[10px]"
            >
              <Globe size={14} />
              GOOGLE
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              type="button"
              className="btn-secondary flex items-center justify-center gap-3 text-[10px]"
            >
              <Github size={14} />
              GITHUB
            </button>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground/30 py-2">
            <div className="h-[1px] flex-1 bg-primary/10" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Or_Protocol</span>
            <div className="h-[1px] flex-1 bg-primary/10" />
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Field: Email_Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="USER@DOMAIN.COM"
                type="email"
                className="w-full bg-muted border-2 border-primary/10 p-3 text-sm text-primary placeholder:text-muted-foreground/30 focus:border-accent/50 outline-none transition-colors rounded-none"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Field: Authorization_Token
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                type={showPassword ? "text" : "password"}
                className="w-full bg-muted border-2 border-primary/10 p-3 text-sm text-primary placeholder:text-muted-foreground/30 focus:border-accent/50 outline-none transition-colors rounded-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-3.5 text-muted-foreground/50 hover:text-accent transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4">
            <Link
              href="/forgot-password"
              className="text-[10px] text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest border-b border-primary/10"
            >
              // Recover_Password
            </Link>
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-3 group py-4"
          >
            [ EXECUTE_LOGIN ]
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.2em] pt-4">
            Unregistered?{" "}
            <Link href="/signup" className="text-accent hover:underline underline-offset-4">
              Create_Identity
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
}
