"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const highlighted = services.filter((s) => s.highlight);
  const others = services.filter((s) => !s.highlight);

  return (
    <section className="py-9 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rule-thick mb-8 flex flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">04 — What I Offer</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Built for <span className="italic font-light text-vermillion">organic growth</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            From first-page Google rankings to AI search visibility — every service grows
            your brand&apos;s organic presence.
          </p>
        </motion.div>

        {/* Highlighted services */}
        <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
          {highlighted.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-paper-card p-8 transition-colors duration-300 hover:bg-paper-deep sm:p-10"
            >
              <span className="font-heading text-4xl font-light italic text-ink-faint transition-colors group-hover:text-vermillion">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-[8px] h-px w-4 flex-shrink-0 bg-vermillion" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Other services — index list */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {others.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <Link
                href="/services"
                className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-ink-faint">
                    {String(highlighted.length + i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-vermillion">
                    {service.title}
                  </span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-vermillion" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="/services" className="btn-secondary">
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
