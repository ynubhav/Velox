"use client";
import { Check } from "lucide-react";

const plans = [
  {
    name: "HACKER",
    price: "0",
    description: "For individual developers and side projects.",
    features: [
      "100,000 requests / mo",
      "Global Edge Deployment",
      "Redis Caching (Standard)",
      "Community Support",
      "Basic Analytics",
    ],
    cta: "[ JOIN_WAITLIST ]",
    highlight: false,
  },
  {
    name: "ENGINEER",
    price: "49",
    description: "For scaling teams and production traffic.",
    features: [
      "5,000,000 requests / mo",
      "Redis Caching (Premium)",
      "Priority Edge Routing",
      "24/7 Email Support",
      "Advanced Key Mgmt",
      "Custom Domains",
    ],
    cta: "[ UPGRADE_NOW ]",
    highlight: true,
  },
  {
    name: "ENTERPRISE",
    price: "999",
    description: "For critical infrastructure and compliance.",
    features: [
      "UNLIMITED requests",
      "Dedicated Redis Cluster",
      "SOC-2 Compliance Tools",
      "Phone + Slack Support",
      "SSO & Audit Logs",
      "Custom Rate Limits",
    ],
    cta: "[ CONTACT_SALES ]",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-mono">
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
          PRICING_STRUCTURE
        </h1>
        <p className="text-muted-foreground uppercase tracking-widest">
          // SELECT THE CAPACITY THAT MATCHES YOUR THROUGHPUT
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-primary/20">
        {plans.map((plan, i) => (
          <div 
            key={plan.name}
            className={`p-10 flex flex-col border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 border-primary/20 transition-all ${
              plan.highlight ? "bg-accent/5 ring-4 ring-accent/20 ring-inset" : ""
            }`}
          >
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-2 tracking-tighter ${plan.highlight ? "text-accent" : "text-primary"}`}>
                {plan.name}
              </h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">${plan.price}</span>
                <span className="text-muted-foreground text-xs uppercase">/ month</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-10 h-12 uppercase leading-tight font-bold">
              // {plan.description}
            </p>

            <ul className="flex-1 space-y-4 mb-12">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-primary/80">
                  <span className="text-accent mt-1">{">"}</span>
                  <span className="tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`btn-primary w-full text-center ${!plan.highlight && "bg-muted text-primary border-border hover:bg-border"}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 border-2 border-primary/10 text-center">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.3em]">
          All plans include global TLS 1.3 encryption and automated health checks.
        </p>
      </div>
    </div>
  );
}
