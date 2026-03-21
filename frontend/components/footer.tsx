"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Security", href: "/security" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Legal", href: "/legal" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-card border-t-2 border-primary/20 pt-16 pb-8 px-4 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img className="h-6 grayscale" src="/veloxlogo.svg" alt="velox" />
            <span className="font-bold text-primary tracking-tighter text-lg underline decoration-accent/50 underline-offset-4">
              VELOX.SH
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            The minimal, high-performance API gateway for modern engineering teams.
            Secure by default. Fast by design.
          </p>
          <div className="flex gap-4 mt-2">
            {/* Social Icons Placeholder */}
            <div className="hover:text-accent transition-colors cursor-pointer text-xs uppercase tracking-widest">[ TWITTER ]</div>
            <div className="hover:text-accent transition-colors cursor-pointer text-xs uppercase tracking-widest">[ GITHUB ]</div>
          </div>
        </div>

        {/* Links Sections */}
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <h3 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2 p-1 border-l-2 border-accent/50">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">{">"}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>© {currentYear} VELOX SYSTEMS INC.</p>
        <p className="flex gap-6 italic">
          <span>// STATUS: OPERATIONAL</span>
          <span>// VERSION: v1.0.42</span>
        </p>
      </div>
    </footer>
  );
}
