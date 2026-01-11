"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  " Secure Proxying",
  " Real-Time Monitoring",
  " API Key Management",
  " Redis Caching",
  " Rate Limiting",
  " Analytics Dashboard",
];

const longest = Math.max(...features.map(f => f.length));

export default function Hero() {
const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const session=useSession();

  useEffect(() => {
    const current = features[index];

    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 700);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        // don't let it be blank visually — switch immediately
        if (text.length === 1) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % features.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="w-full h-screen bg-radial-[at_50%_25%] from-violet-600 via-green-200 to-sky-400 to-90% from-5% py-20 px-4 text-center rounded-none items-center flex flex-col justify-center">
    <img className="h-40" src="veloxlogo.svg" alt="velox" />
    <h1 className="font-bold italic text-left text-4xl py-2 z-10 p-4">Velox</h1>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm md:text-sm font-bold tracking-tight bg-gradient-to-r from-blue-600 to-gray-700 text-transparent bg-clip-text p-3"
      >
        Secure, Fast & Scalable  
        <br />
        Your API Gateway Reimagined.
        {JSON.stringify(session)}
      </motion.h1>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-md text-left  text-white max-w-2xl mx-auto transition-all duration-500"
      >
        <span className="font-extralight text-gray-500">{"It has it ALL ! "}</span>
        <span className="text-slate-600 font-mono">{text}</span>
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        <Link
          href="/signup"
          className="px-8 py-3 hover:px-6 gap-0 flex hover:gap-2 hover:scale-105 justify-center items-center  hover:space-x-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-500"
        >
          Get Started <ArrowRight className="inline-block" size={18} />
        </Link>

        <Link
          href="/docs"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition-all duration-500 hover:px-8 hover:text-gray-100  text-gray-800 font-semibold"
        >
          View Docs
        </Link>
      </motion.div>
    </section>
  );
}
