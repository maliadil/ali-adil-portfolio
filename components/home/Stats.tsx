"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 700,
    suffix: "+",
    label: "Articles Published",
    description: "SEO-optimized content across diverse industries",
  },
  {
    value: 35,
    suffix: "+",
    label: "Brands Scaled",
    description: "Multi-brand content operations managed",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Covered",
    description: "From healthcare to finance and beyond",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "In SEO, content marketing, and digital growth",
  },
  {
    value: 100,
    suffix: "+",
    label: "Top 10 Rankings",
    description: "Articles ranked on Google's first page",
  },
  {
    value: 50,
    suffix: "+",
    label: "#1 Positions",
    description: "Keywords ranked in the #1 spot",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-9 sm:py-12" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rule-thick mb-8 flex flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">01 — By the Numbers</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Results that <span className="italic font-light text-vermillion">speak</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            Every metric represents real brands, real content, and real organic growth
            delivered.
          </p>
        </motion.div>

        {/* Ledger grid */}
        <div className="grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group border-b border-ink/15 px-1 py-8 sm:px-6 lg:[&:nth-child(3n+1)]:pl-1 lg:[&:not(:nth-child(3n+1))]:border-l"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-5xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-vermillion sm:text-6xl">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.2} separator="," enableScrollSpy={false} />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="font-heading text-3xl font-bold text-vermillion">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
