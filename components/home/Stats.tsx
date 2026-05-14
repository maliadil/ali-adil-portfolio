"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TrendingUp, Users, FileText, Trophy, Cpu, Globe } from "lucide-react";

const stats = [
  {
    value: 700,
    suffix: "+",
    label: "Articles Published",
    description: "SEO-optimized content across diverse industries",
    icon: FileText,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    value: 35,
    suffix: "+",
    label: "Brands Scaled",
    description: "Multi-brand content operations managed",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Covered",
    description: "From healthcare to finance and beyond",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "In SEO, content marketing, and digital growth",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    value: 100,
    suffix: "+",
    label: "Top 10 Rankings",
    description: "Articles ranked on Google's first page",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    value: 50,
    suffix: "+",
    label: "#1 Positions",
    description: "Keywords ranked in the #1 spot",
    icon: Cpu,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-14 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">By The Numbers</span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mt-4">
            Results That{" "}
            <span className="gradient-text">Speak Louder</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Every metric represents real brands, real content, and real organic growth delivered.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="glass-card-hover p-6 lg:p-8 h-full group">
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl lg:text-5xl font-bold font-heading ${stat.color}`}>
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        enableScrollSpy={false}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className={`text-2xl font-bold font-heading pb-1 ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
