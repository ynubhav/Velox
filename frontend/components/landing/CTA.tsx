import Link from "next/link";
import Footer from "../footer";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-600 via-green-300 to-blue-800 pt-20 text-center rounded-none">
      <h2 className="text-4xl font-bold text-white mb-6 px-2">
        Start protecting your APIs in minutes.
      </h2>
      <p className="text-white/80 text-lg mb-10 px-2">
        Deploy your first gateway with zero friction.
      </p>
      <div className="flex justify-center items-center">
        <Link
          href="/signup"
          className="px-8 py-3 hover:px-6 gap-0 flex hover:gap-2 hover:scale-105 justify-center items-center  hover:space-x-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-500"
        >
          Get Started <ArrowRight className="inline-block" size={18} />
        </Link>
      </div>

      <Footer />
    </section>
  );
}
