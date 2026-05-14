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
    <div className="relative flex overflow-hidden">
      <div
        className={`flex gap-4 ${
          direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee"
        } whitespace-nowrap`}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex-shrink-0 glass-card px-5 py-2.5 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
            <span className="text-sm text-white/60 font-medium">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070B14] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-label mb-4 inline-flex">Brands I&apos;ve Worked With</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-4">
            35+ Brands Scaled with{" "}
            <span className="gradient-text">Strategic SEO Content</span>
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-lg mx-auto">
            From healthcare and legal to e-commerce and finance — I&apos;ve produced ranking content
            across virtually every industry vertical.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="forward" />
        <MarqueeRow items={row2} direction="reverse" />
      </div>
    </section>
  );
}
