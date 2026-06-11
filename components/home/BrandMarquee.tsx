"use client";

import { motion } from "framer-motion";
import { allBrandNames } from "@/data/brands";

const row1 = allBrandNames.slice(0, 18);
const row2 = allBrandNames.slice(17);

function MarqueeRow({
  items,
  direction = "forward",
}: {
  items: string[];
  direction?: "forward" | "reverse";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-t border-ink/15 py-4">
      <div
        className={`flex items-baseline whitespace-nowrap ${
          direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-5 inline-flex items-baseline gap-10 font-heading text-xl font-medium text-ink-soft sm:text-2xl"
          >
            {brand}
            <span className="font-mono text-xs text-vermillion">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-9 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rule-thick mb-8 flex flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">02 — The Client Index</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              35+ brands, <span className="italic font-light text-vermillion">one byline</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            From healthcare and legal to e-commerce and finance — ranking content across
            virtually every industry vertical.
          </p>
        </motion.div>
      </div>

      <div className="border-b border-ink/15">
        <MarqueeRow items={row1} direction="forward" />
        <MarqueeRow items={row2} direction="reverse" />
      </div>
    </section>
  );
}
