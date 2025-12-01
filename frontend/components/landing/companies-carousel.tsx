"use client";

import Link from "next/link";

const companies = [
  { name: "NebulaTech", logo: "/logos/nebula.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "HyperStack", logo: "/logos/hyper.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "CloudForge", logo: "/logos/cloudforge.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "PrimeAPI", logo: "/logos/primeapi.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "DataPulse", logo: "/logos/datapulse.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "LambdaSoft", logo: "/logos/lambda.svg", weblink: "https://tranzakt.vercel.app" },
  { name: "EcoSphere", logo: "/logos/lambda.svg", weblink: "https://eco-sphere-ruby.vercel.app" },
  { name: "Tranzakt", logo: "/logos/lambda.svg", weblink: "https://tranzakt.vercel.app" },
];

export default function CompaniesCarousel() {
  return (
    <div className="w-full mt-10 py-10 bg-[#0e0f11] overflow-hidden">
      <p className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">
        Trusted by teams building at scale
      </p>

      <div 
        className="
          relative flex overflow-hidden group
        "
      >
        {/* Scroll Track */}
        <div
          className="
            flex whitespace-nowrap 
            animate-scroll 
            group-hover:[animation-play-state:paused]
          "
        >
          {[...companies, ...companies].map((company, i) => (
            <Link
              key={i}
              href={company.weblink}
              target="_blank"
              className="
                flex items-center justify-center 
                px-10 py-4 mx-4 
                bg-[#181a1d] border border-[#27292d] 
                rounded-xl min-w-[160px] 
                hover:bg-[#202326] transition
                cursor-pointer
              "
            >
              <span className="text-white font-semibold text-lg">
                {company.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
