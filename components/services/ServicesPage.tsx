"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

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
            <span className="eyebrow">Services — The Offer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-heading font-black leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Built for <span className="italic font-light text-vermillion">organic growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              From first-page Google rankings to AI search visibility — strategic, data-driven
              services for brands that want to grow without relying on paid ads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services ledger */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-ink/15">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
                className="group grid grid-cols-12 gap-4 border-b border-ink/15 py-10 transition-colors duration-300 hover:bg-paper-deep/60 sm:gap-6"
              >
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-heading text-2xl font-light italic text-ink-faint transition-colors group-hover:text-vermillion sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-vermillion sm:text-3xl">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <span className="ai-badge mt-3 inline-flex">Most requested</span>
                  )}
                </div>

                {/* Description + features */}
                <div className="col-span-12 sm:col-span-7 sm:col-start-6 lg:col-span-6">
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <span className="mt-[8px] h-px w-4 flex-shrink-0 bg-vermillion" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rule-thick mb-12 pt-4"
          >
            <span className="eyebrow">The Method</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              How we <span className="italic font-light text-vermillion">work together</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-paper-card p-7 transition-colors duration-300 hover:bg-paper-deep sm:p-8"
              >
                <span className="font-heading text-6xl font-black leading-none text-ink/10">
                  {step.step}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rule-thick mb-6 pt-4"
          >
            <span className="eyebrow">Questions &amp; Answers</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Frequently <span className="italic font-light text-vermillion">asked</span>
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 gap-3 border-b border-ink/15 py-7 sm:gap-6"
              >
                <div className="col-span-12 sm:col-span-1">
                  <span className="font-mono text-[10px] text-vermillion">
                    Q{i + 1}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-11">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">
                    {faq.q}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t-2 border-ink bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-black tracking-tight text-paper sm:text-5xl">
              Ready to grow <span className="italic font-light text-vermillion-bright">organically?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/65">
              Let&apos;s discuss your goals and build a custom strategy to rank your brand on
              Google and AI search.
            </p>
            <Link href="/contact" className="btn-primary-inverse mt-9 inline-flex w-full sm:w-auto">
              Get a free consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
