"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "SEO Strategy", href: "/services" },
    { label: "AI Content Optimization", href: "/services" },
    { label: "Content Marketing", href: "/services" },
    { label: "On-Page SEO", href: "/services" },
    { label: "Organic Growth", href: "/services" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maliadil" },
  { label: "Email", href: "mailto:maliadilwork@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="font-heading text-2xl font-black tracking-tight text-ink">
                Muhammad Ali Adil<span className="text-vermillion">.</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              SEO &amp; AI Content Strategist helping brands rank on Google and AI search
              platforms. 700+ articles published. 35+ brands scaled.
            </p>
            <p className="fig-caption mb-6">
              Karachi, Pakistan — Available Worldwide
            </p>
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-underline"
                >
                  {s.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="eyebrow mb-5 !text-ink-faint">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-[15px] text-ink-soft transition-colors duration-200 hover:text-vermillion"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Colophon */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/15 py-6 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
            © {new Date().getFullYear()} Muhammad Ali Adil — All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
            Set in Fraunces &amp; Newsreader · Karachi, PK
          </p>
        </div>
      </div>
    </footer>
  );
}
