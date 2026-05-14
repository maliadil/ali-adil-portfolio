"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp, Brain, LayoutDashboard, PenLine, Settings2,
  Search, BarChart3, Users, CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Brain, LayoutDashboard, PenLine, Settings2, Search, BarChart3, Users,
};

const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "I start by understanding your brand, goals, and current SEO landscape. A deep audit identifies opportunities and gaps.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Based on data, I build a custom SEO and content strategy targeting the highest-ROI keywords for your market.",
  },
  {
    step: "03",
    title: "Content Creation",
    description:
      "I produce high-quality, SEO-optimized content designed to rank on Google and appear in AI search results.",
  },
  {
    step: "04",
    title: "Optimization & Monitoring",
    description:
      "Continuous performance monitoring, content optimization, and strategy iteration based on real ranking data.",
  },
];

const faqs = [
  {
    q: "What industries do you specialize in?",
    a: "I've worked across 12+ industries including healthcare, legal, finance, construction, home services, sports, and e-commerce. My approach adapts to any niche.",
  },
  {
    q: "What makes your content rank consistently?",
    a: "A combination of deep keyword research, search intent alignment, E-E-A-T signals, semantic SEO structure, and ongoing optimization based on performance data.",
  },
  {
    q: "Do you optimize for AI search engines too?",
    a: "Yes — this is a core differentiator. I optimize content for Google AI Overviews, ChatGPT, Perplexity, and other LLM-powered search platforms, not just traditional Google.",
  },
  {
    q: "Can you manage content for multiple brands simultaneously?",
    a: "Absolutely. I currently manage content operations across 12+ brands at BlissDrive, maintaining consistent quality and individual brand voice for each.",
  },
  {
    q: "What's your typical turnaround time?",
    a: "For individual articles, 2-3 business days. Full content strategies take 5-7 business days. Ongoing retainers are structured around your editorial calendar.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-10">
      {/* Header */}
      <section className="py-10 relative overflow-hidden">
        <div className="orb orb-purple w-[500px] h-[500px] -top-40 right-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">What I Offer</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-5 mb-5">
              Services Built for <span className="gradient-text">Organic Growth</span>
            </h1>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              From first-page Google rankings to AI search visibility — strategic, data-driven
              services for brands that want to grow without relying on paid ads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || TrendingUp;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group ${service.highlight ? "md:col-span-1" : ""}`}
                >
                  <div
                    className={`glass-card-hover p-7 h-full flex flex-col relative overflow-hidden ${
                      service.highlight
                        ? "border-white/[0.1]"
                        : ""
                    }`}
                  >
                    {service.highlight && (
                      <>
                        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient}`} />
                        <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20 font-semibold">
                          Popular
                        </span>
                      </>
                    )}

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-px mb-5`}>
                      <div className="w-full h-full rounded-2xl bg-[#0D1117] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-white/60">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label mb-4 inline-flex">My Process</span>
            <h2 className="text-4xl font-bold font-heading text-white mt-4">
              How We <span className="gradient-text">Work Together</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass-card-hover p-6 h-full relative">
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div className="absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent hidden lg:block" />
                  )}
                  <span className="text-4xl font-bold font-heading text-white/10 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mb-3">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="text-3xl font-bold font-heading text-white mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-heading text-white mb-4">
              Ready to Grow Organically?
            </h2>
            <p className="text-white/50 mb-6 text-sm">
              Let&apos;s discuss your goals and build a custom strategy to rank your brand on Google
              and AI search.
            </p>
            <Link href="/contact" className="btn-primary py-3.5 px-8 inline-flex">
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
