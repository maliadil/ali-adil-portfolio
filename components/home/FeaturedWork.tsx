"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp, Brain } from "lucide-react";
import { featuredBrands } from "@/data/brands";

const industryColors: Record<string, string> = {
  Healthcare: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  Legal: "bg-red-400/10 text-red-400 border-red-400/20",
  Finance: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Construction: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  Marketing: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  Sports: "bg-green-400/10 text-green-400 border-green-400/20",
  "Sports & Media": "bg-green-400/10 text-green-400 border-green-400/20",
};

export default function FeaturedWork() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label mb-4 inline-flex">Featured Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mt-4">
              Case Studies &amp; <span className="gradient-text">SEO Wins</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-lg">
              A selection of brands I&apos;ve helped rank on Google&apos;s first page through
              strategic SEO content and AI-optimized writing.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn-secondary whitespace-nowrap self-start md:self-auto"
          >
            View All Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBrands.map((brand, i) => {
            const colorClass =
              industryColors[brand.industry] ||
              "bg-blue-400/10 text-blue-400 border-blue-400/20";
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="glass-card-hover p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClass}`}
                        >
                          {brand.industry}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                        {brand.name}
                      </h3>
                      <a
                        href={`https://${brand.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors mt-0.5"
                      >
                        {brand.url}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  {/* Role */}
                  <p className="text-xs text-white/40 mb-3 font-medium uppercase tracking-wider">
                    {brand.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">
                    {brand.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {brand.achievements.slice(0, 2).map((achievement, ai) => (
                      <div key={ai} className="flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white/50">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.06]"
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
      </div>
    </section>
  );
}
