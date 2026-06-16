"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { brands } from "@/data/brands";

const industries = ["All", ...Array.from(new Set(brands.map((b) => b.industry)))];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = brands
    .filter((b) => {
      const matchesIndustry = filter === "All" || b.industry === filter;
      const matchesSearch =
        !search ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.niche.toLowerCase().includes(search.toLowerCase()) ||
        b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesIndustry && matchesSearch;
    })
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  const featuredWithImages = filtered.filter((b) => b.images && b.images.length > 0);
  const rest = filtered.filter((b) => !b.images || b.images.length === 0);

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rule-thick pt-4 pb-10"
          >
            <span className="eyebrow">Portfolio — The Archive</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h1
              className="font-heading font-black leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              SEO wins &amp; <span className="italic font-light text-vermillion">case studies</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              A showcase of brands ranked on Google&apos;s first page through strategic SEO
              content, keyword research, and AI-optimized writing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="z-30 border-y border-ink/15 bg-paper/95 backdrop-blur-sm md:sticky md:top-[53px]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search */}
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
              <input
                type="text"
                placeholder="Search brands, niches…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-b border-ink/25 bg-transparent py-2 pl-7 pr-4 font-mono text-[12px] uppercase tracking-[0.1em] text-ink placeholder:normal-case placeholder:text-ink-faint focus:border-vermillion focus:outline-none"
              />
            </div>

            {/* Industry filter */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className={`py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                    filter === ind
                      ? "text-vermillion underline underline-offset-4"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="fig-caption mb-8">
            Showing {filtered.length} of {brands.length} brands
          </p>

          {/* Featured case studies — full-width horizontal rows with visible proof */}
          {featuredWithImages.length > 0 && (
            <div className="mb-12">
              <p className="eyebrow mb-2 flex items-center gap-3">
                <span className="h-px w-6 bg-vermillion" />
                Featured case studies
              </p>
              <div className="border-t-2 border-ink">
                {featuredWithImages.map((brand, i) => (
                  <motion.article
                    key={brand.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.3) }}
                    className="group border-b border-ink/15 py-9 lg:py-11"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-12">
                      {/* Name + meta */}
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-vermillion">
                            {brand.industry}
                          </span>
                          <span className="ranking-badge !border-vermillion/40 !text-vermillion">
                            Featured
                          </span>
                        </div>
                        <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink transition-colors group-hover:text-vermillion sm:text-4xl">
                          {brand.name}
                        </h3>
                        <a
                          href={`https://${brand.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-ink-soft underline decoration-ink/30 underline-offset-4 transition-colors hover:text-vermillion hover:decoration-vermillion"
                        >
                          {brand.url}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                          {brand.niche} · {brand.role}
                        </p>
                      </div>

                      {/* Detail */}
                      <div className="lg:col-span-8">
                        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                          {brand.description}
                        </p>
                        <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
                          {brand.achievements.map((a, ai) => (
                            <li
                              key={ai}
                              className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
                            >
                              <span className="mt-[7px] h-px w-4 flex-shrink-0 bg-vermillion" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Images — full width */}
                      <div className="lg:col-span-12">
                        <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-vermillion">
                          Proof of results
                        </p>
                        <div
                          className={`grid gap-4 sm:gap-5 ${
                            brand.images!.length === 1 ? "max-w-md" : ""
                          }`}
                          style={{
                            gridTemplateColumns: `repeat(${brand.images!.length}, minmax(0, 1fr))`,
                          }}
                        >
                          {brand.images!.map((img) => (
                            <a
                              key={img.src}
                              href={img.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/img block"
                            >
                              <div className="relative aspect-[16/10] overflow-hidden border border-ink/15 bg-paper-card transition-all duration-300 group-hover/img:border-ink group-hover/img:shadow-print-sm">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  quality={95}
                                  className="object-contain p-2"
                                  sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                              </div>
                              <p className="fig-caption mt-2.5 leading-snug">{img.caption}</p>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 lg:col-span-12">
                        {brand.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-vermillion">
                          AI Optimized
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* The rest — compact grid cards */}
          {rest.length > 0 && (
            <AnimatePresence>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((brand, i) => (
                  <motion.article
                    key={brand.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.25) }}
                    className="group flex h-full flex-col border border-ink/15 bg-paper-card p-6 transition-all duration-300 hover:border-ink hover:shadow-print sm:p-7"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-vermillion">
                        {brand.industry}
                      </span>
                      {brand.featured && (
                        <span className="ranking-badge !border-vermillion/40 !text-vermillion">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-vermillion">
                      {brand.name}
                    </h3>
                    <a
                      href={`https://${brand.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-ink-faint underline decoration-ink/20 underline-offset-4 transition-colors hover:text-vermillion hover:decoration-vermillion"
                    >
                      {brand.url}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>

                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                      {brand.niche} · {brand.role}
                    </p>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                      {brand.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-5 space-y-1.5">
                      {brand.achievements.slice(0, 2).map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <span className="mt-[8px] h-px w-4 flex-shrink-0 bg-vermillion" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-ink/10 pt-4">
                      {brand.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-vermillion">
                        AI Optimized
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </AnimatePresence>
          )}

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-heading text-2xl font-bold italic text-ink-faint">
                Nothing in the archive matches.
              </p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearch("");
                }}
                className="link-underline mt-6"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* AI Optimization note */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-vermillion bg-paper-card px-7 py-8 sm:px-10 sm:py-10"
          >
            <p className="eyebrow mb-4">Editor&apos;s note</p>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              All content optimized for AI search.
            </h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              Every piece of content is strategically optimized not just for traditional
              Google search, but for AI-powered platforms like ChatGPT, Perplexity, and
              Google&apos;s AI Overviews. This dual optimization ensures maximum organic
              visibility across all modern search channels.
            </p>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
