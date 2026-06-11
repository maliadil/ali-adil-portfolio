"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/", index: "01" },
  { label: "About", href: "/about", index: "02" },
  { label: "Portfolio", href: "/portfolio", index: "03" },
  { label: "Services", href: "/services", index: "04" },
  { label: "Contact", href: "/contact", index: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-ink/15 bg-paper/95 backdrop-blur-sm py-3"
            : "border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Masthead */}
            <Link href="/" className="group flex items-baseline gap-3">
              <span className="font-heading text-xl font-black tracking-tight text-ink">
                Ali&nbsp;Adil
                <span className="text-vermillion">.</span>
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                SEO &amp; AI Content
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "group relative font-mono text-[12.5px] font-medium uppercase tracking-[0.18em] transition-colors duration-200",
                      isActive ? "text-vermillion" : "text-ink/80 hover:text-ink"
                    )}
                  >
                    <span className="mr-1 text-[9px] text-ink-faint group-hover:text-vermillion transition-colors">
                      {link.index}
                    </span>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 right-0 h-px bg-vermillion"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Link href="/contact" className="btn-primary !px-5 !py-2.5">
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-ink hover:text-vermillion transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    className="border-b border-ink/10"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between py-5"
                    >
                      <span
                        className={cn(
                          "font-heading text-4xl font-bold tracking-tight transition-colors",
                          isActive ? "text-vermillion" : "text-ink group-hover:text-vermillion"
                        )}
                      >
                        {link.label}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint">
                        {link.index}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.06 }}
                className="pt-8"
              >
                <Link href="/contact" className="btn-primary w-full">
                  Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
