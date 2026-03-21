import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Steps from "@/components/landing/Steps";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <CTA />
    </div>
  );
}
