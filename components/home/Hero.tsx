"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const tickerItems = [
  "RANK ON GOOGLE",
  "RANK ON AI SEARCH",
  "700+ ARTICLES PUBLISHED",
  "35+ BRANDS SCALED",
  "100+ TOP-10 RANKINGS",
  "E-E-A-T CONTENT",
];

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dateline row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="rule-thick flex flex-wrap items-center justify-between gap-2 pt-4 pb-8 sm:pb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
            The Portfolio of an SEO &amp; AI Content Strategist
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-vermillion animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-heading font-black leading-[0.92] tracking-tight text-ink"
              style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
            >
              Words that
              <br />
              <span className="italic font-light text-vermillion">rank</span>
              <span className="text-vermillion">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              I&apos;m <strong className="font-semibold text-ink">Muhammad Ali Adil</strong> — an
              SEO &amp; AI Content Strategist with{" "}
              <em className="text-ink">700+ published articles</em> and{" "}
              <em className="text-ink">35+ brands scaled</em>, ranking content in Google&apos;s
              Top&nbsp;10 and across AI-powered search.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <Link href="/portfolio" className="btn-primary w-full sm:w-auto">
                View the Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="link-underline">
                Let&apos;s work together
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="lg:col-span-4"
          >
            <figure className="mx-auto max-w-xs lg:ml-auto lg:max-w-none">
              <div className="relative border border-ink bg-paper-card p-3 shadow-print">
                <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                  <Image
                    src="/hero.png"
                    alt="Muhammad Ali Adil — SEO & AI Content Strategist"
                    fill
                    className="print-photo object-cover object-center"
                    priority
                  />
                </div>
                <figcaption className="flex items-baseline justify-between pt-3">
                  <span className="fig-caption">Fig. 01 — M. Ali Adil</span>
                  <span className="fig-caption text-vermillion">Est. 700+ articles</span>
                </figcaption>
              </div>
            </figure>
          </motion.div>
        </div>

        {/* Index strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="rule mt-12 mb-9 grid grid-cols-2 gap-y-6 py-7 sm:mt-14 sm:grid-cols-4"
        >
          {[
            { n: "700+", l: "Articles Published" },
            { n: "35+", l: "Brands Scaled" },
            { n: "100+", l: "Top-10 Rankings" },
            { n: "12+", l: "Industries Covered" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-1.5 border-l border-ink/15 pl-4">
              <span className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                {s.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="overflow-hidden border-y border-ink bg-ink py-3"
      >
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-6 inline-flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.24em] text-paper"
            >
              {item}
              <span className="text-vermillion-bright">✺</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
