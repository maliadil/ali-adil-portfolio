"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredBrands } from "@/data/brands";

export default function FeaturedWork() {
  return (
    <section className="py-9 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rule-thick mb-4 flex flex-col gap-6 pt-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="eyebrow">03 — Featured Work</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Case studies &amp; <span className="italic font-light text-vermillion">SEO wins</span>
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              A selection of brands ranked on Google&apos;s first page through strategic SEO
              content and AI-optimized writing.
            </p>
          </div>
          <Link href="/portfolio" className="link-underline self-start whitespace-nowrap md:self-auto">
            View all work
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Editorial index rows */}
        <div>
          {featuredBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="group grid grid-cols-12 items-start gap-4 border-b border-ink/15 py-8 transition-colors duration-300 hover:bg-paper-deep/60 sm:gap-6 lg:py-10">
                {/* Index number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-heading text-2xl font-light italic text-ink-faint transition-colors group-hover:text-vermillion sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + meta */}
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-vermillion sm:text-3xl">
                    {brand.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    {brand.industry} · {brand.role}
                  </p>
                  <a
                    href={`https://${brand.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-ink-soft underline decoration-ink/30 underline-offset-4 transition-colors hover:text-vermillion hover:decoration-vermillion"
                  >
                    {brand.url}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                {/* Description + achievements */}
                <div className="col-span-12 sm:col-span-6 sm:col-start-6 lg:col-span-5">
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {brand.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {brand.achievements.slice(0, 2).map((achievement, ai) => (
                      <li
                        key={ai}
                        className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
                      >
                        <span className="mt-[7px] h-px w-4 flex-shrink-0 bg-vermillion" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
                  <span className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-all duration-300 group-hover:border-vermillion group-hover:bg-vermillion group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
