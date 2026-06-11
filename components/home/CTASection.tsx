"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mt-6 border-t-2 border-ink bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-vermillion-bright">
            06 — Let&apos;s Work Together
          </span>
          <h2
            className="mt-6 font-heading font-black leading-[0.95] tracking-tight text-paper"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
          >
            Ready to{" "}
            <span className="italic font-light text-vermillion-bright">rank</span>
            <br />
            where it matters?
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/65">
            Whether you need a full SEO strategy, AI-optimized content, or a trusted content
            manager — I help brands grow organically on Google and AI search.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary-inverse w-full sm:w-auto">
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:maliadilwork@gmail.com" className="btn-secondary-inverse w-full sm:w-auto">
              Send an email
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
            Typically responds within 24 hours · Available for freelance &amp; full-time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
