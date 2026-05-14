"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maliadil",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:alifps2002@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-blue-500/40">
                <Image
                  src="/avatar.png"
                  alt="Muhammad Ali Adil"
                  fill
                  className="object-cover scale-110"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <span className="text-lg font-bold text-white font-heading">Muhammad Ali Adil</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              SEO & AI Content Strategist helping brands rank on Google and AI search platforms.
              700+ articles published. 35+ brands scaled.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
              <MapPin className="w-3 h-3" />
              <span>Karachi, Pakistan · Available Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="mailto:alifps2002@gmail.com"
                className="btn-primary py-2 px-4 text-xs"
              >
                <Sparkles className="w-3 h-3" />
                Work Together
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Muhammad Ali Adil. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">
              SEO & AI Content Strategist
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/30 text-xs">Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
