"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-blue-900/20" />
          <div className="absolute inset-0 border border-white/[0.1] rounded-3xl" />
          <div className="orb orb-blue w-[400px] h-[400px] -top-20 -left-20 opacity-40" />
          <div className="orb orb-purple w-[300px] h-[300px] -bottom-20 -right-20 opacity-30" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-7 sm:p-10 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="section-label mb-5 inline-flex">Let&apos;s Work Together</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-white mt-5 mb-5 leading-tight">
                Ready to Rank on Google
                <br />
                <span className="gradient-text">&amp; AI Search?</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you need a full SEO strategy, AI-optimized content, or a trusted content
                manager — I help brands grow organically and rank where it matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/contact" className="btn-primary py-3.5 px-6 sm:py-4 sm:px-8 text-sm sm:text-base">
                  <Sparkles className="w-4 h-4" />
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:alifps2002@gmail.com"
                  className="btn-secondary py-3.5 px-6 sm:py-4 sm:px-8 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4" />
                  Send an Email
                </a>
              </div>

              <p className="text-white/30 text-sm mt-6">
                Typically responds within 24 hours · Available for freelance &amp; full-time
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
