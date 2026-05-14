"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Brain,
  Globe,
  Star,
} from "lucide-react";

const highlights = [
  "700+ SEO Articles Published",
  "35+ Brands Scaled",
  "Google Top 10 Rankings",
  "AI Search Visibility Expert",
];

const floatingStats = [
  {
    icon: TrendingUp,
    label: "#1 Rankings",
    value: "50+",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    position: "-top-4 -right-4",
  },
  {
    icon: Brain,
    label: "AI Optimized",
    value: "All Content",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    position: "-bottom-4 -left-4",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-40 -left-40 opacity-40 animate-glow" />
      <div className="orb orb-purple w-[500px] h-[500px] top-1/2 -right-60 opacity-30" />
      <div className="orb orb-cyan w-[300px] h-[300px] bottom-20 left-1/3 opacity-20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            {/* Mobile-only avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mb-6 flex justify-start"
            >
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-blue-500/40 bg-[#0e2318]">
                <Image
                  src="/hero.png"
                  alt="Muhammad Ali Adil"
                  fill
                  className="object-cover object-center scale-[1.04]"
                  priority
                />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="section-label">
                <Sparkles className="w-3 h-3" />
                Available for New Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.05] tracking-tight mb-5"
            >
              <span className="text-white">Helping Brands</span>
              <br />
              <span className="gradient-text">Rank on Google</span>
              <br />
              <span className="text-white">&amp; AI Search</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-7"
            >
              SEO &amp; AI Content Strategist with{" "}
              <span className="text-white/90 font-medium">700+ published articles</span>,{" "}
              <span className="text-white/90 font-medium">35+ brands scaled</span>, and a track record
              of ranking content in{" "}
              <span className="text-white/90 font-medium">Google&apos;s Top 10</span> and{" "}
              <span className="text-white/90 font-medium">AI-powered search engines</span>.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-4 gap-y-2 mb-8"
            >
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portfolio" className="btn-primary py-3.5 px-6 sm:py-4 sm:px-8 text-sm sm:text-base">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary py-3.5 px-6 sm:py-4 sm:px-8 text-sm sm:text-base">
                <Sparkles className="w-4 h-4" />
                Let&apos;s Work Together
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mt-7 pt-7 border-t border-white/[0.06]"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/50">
                Trusted by <span className="text-white/80 font-medium">35+ brands</span> across{" "}
                <span className="text-white/80 font-medium">12+ industries</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-blue-400/10 blur-3xl scale-110" />

              {/* Gradient border frame */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-blue-500/60 via-purple-500/40 to-blue-400/30">
                <div className="relative rounded-3xl overflow-hidden bg-[#0D1117] w-[360px] h-[440px]">
                  {/* Background tinted to match photo's green */}
                  <div className="absolute inset-0 bg-[#0e2318]" />

                  {/* The photo */}
                  <Image
                    src="/hero.png"
                    alt="Muhammad Ali Adil — SEO & AI Content Strategist"
                    fill
                    className="object-cover object-center scale-[1.04]"
                    priority
                  />

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent" />

                  {/* Bottom name card */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card px-4 py-3">
                      <p className="text-white font-bold text-sm font-heading">Muhammad Ali Adil</p>
                      <p className="text-white/50 text-xs">SEO &amp; AI Content Strategist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-5 -right-5 glass-card px-4 py-3 flex items-center gap-3 border border-green-400/20 bg-green-400/5 animate-float"
              >
                <div className="w-8 h-8 rounded-lg bg-green-400/15 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-green-400 font-bold text-sm leading-none">50+</p>
                  <p className="text-white/40 text-[10px] mt-0.5">#1 Rankings</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute top-1/2 -translate-y-1/2 -left-6 glass-card px-4 py-3 flex items-center gap-3 border border-purple-400/20 bg-purple-400/5 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-400/15 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-purple-400 font-bold text-sm leading-none">AI-Ready</p>
                  <p className="text-white/40 text-[10px] mt-0.5">LLM Optimized</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute top-1/2 -right-8 glass-card px-3 py-2.5 flex items-center gap-2 border border-blue-400/20 bg-blue-400/5 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-blue-400 font-bold text-xs leading-none">35+ Brands</p>
                  <p className="text-white/40 text-[10px] mt-0.5">Worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
