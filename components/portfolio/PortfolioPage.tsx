"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ExternalLink, Brain, Search, Filter } from "lucide-react";
import { brands } from "@/data/brands";

const industries = ["All", ...Array.from(new Set(brands.map((b) => b.industry)))];

const industryColors: Record<string, string> = {
  Healthcare: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  Legal: "bg-red-400/10 text-red-400 border-red-400/20",
  Finance: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Construction: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  Marketing: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  Sports: "bg-green-400/10 text-green-400 border-green-400/20",
  "Sports & Media": "bg-green-400/10 text-green-400 border-green-400/20",
  "Home & Garden": "bg-teal-400/10 text-teal-400 border-teal-400/20",
  Automotive: "bg-slate-400/10 text-slate-400 border-slate-400/20",
  "Home Services": "bg-amber-400/10 text-amber-400 border-amber-400/20",
  Insurance: "bg-violet-400/10 text-violet-400 border-violet-400/20",
  Retail: "bg-pink-400/10 text-pink-400 border-pink-400/20",
  Architecture: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  "Creative Agency": "bg-rose-400/10 text-rose-400 border-rose-400/20",
  "Home Improvement": "bg-lime-400/10 text-lime-400 border-lime-400/20",
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = brands.filter((b) => {
    const matchesIndustry = filter === "All" || b.industry === filter;
    const matchesSearch =
      !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.niche.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="pt-24 pb-10">
      {/* Header */}
      <section className="py-10 relative overflow-hidden">
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-5 mb-5">
              SEO Wins &amp; <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              A showcase of brands I&apos;ve helped rank on Google&apos;s first page through
              strategic SEO content, keyword research, and AI-optimized writing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 sticky top-[60px] z-30 bg-[#070B14]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search brands, niches..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
              />
            </div>

            {/* Industry filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-white/30 flex-shrink-0" />
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    filter === ind
                      ? "bg-blue-600 text-white"
                      : "bg-white/[0.05] text-white/50 hover:bg-white/[0.08] hover:text-white/80 border border-white/[0.06]"
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
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/30 text-sm mb-6">
            Showing {filtered.length} of {brands.length} brands
          </p>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((brand, i) => {
                const colorClass =
                  industryColors[brand.industry] ||
                  "bg-blue-400/10 text-blue-400 border-blue-400/20";

                return (
                  <motion.div
                    key={brand.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.3) }}
                    className="group"
                  >
                    <div className="glass-card-hover p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClass} inline-block mb-2`}
                          >
                            {brand.industry}
                          </span>
                          <h3 className="text-base font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                            {brand.name}
                          </h3>
                          <a
                            href={`https://${brand.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-white/35 hover:text-white/60 transition-colors"
                          >
                            {brand.url}
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                        {brand.featured && (
                          <span className="ranking-badge ml-2">
                            <TrendingUp className="w-2.5 h-2.5" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Niche & Role */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-[10px] text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
                          {brand.niche}
                        </span>
                        <span className="text-[10px] text-blue-400/70 bg-blue-400/5 px-2 py-0.5 rounded-md border border-blue-400/10">
                          {brand.role}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-white/55 leading-relaxed mb-4 flex-1">
                        {brand.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-1.5 mb-4">
                        {brand.achievements.slice(0, 2).map((a, ai) => (
                          <div key={ai} className="flex items-start gap-1.5">
                            <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-white/45">{a}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                        {brand.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/35 border border-white/[0.05]"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="ai-badge ml-auto">
                          <Brain className="w-2.5 h-2.5" />
                          AI Optimized
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/30 text-sm">No brands match your search.</p>
              <button
                onClick={() => { setFilter("All"); setSearch(""); }}
                className="mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* AI Optimization Banner */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 border border-purple-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  All Content Optimized for AI Search
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Every piece of content I create is strategically optimized not just for traditional
                  Google search, but for AI-powered platforms like ChatGPT, Perplexity, and Google&apos;s
                  AI Overviews. This dual optimization ensures maximum organic visibility across all
                  modern search channels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
