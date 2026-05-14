"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp, Brain, LayoutDashboard, PenLine, Settings2,
  Search, BarChart3, Users, ArrowRight
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Brain, LayoutDashboard, PenLine, Settings2, Search, BarChart3, Users,
};

export default function ServicesPreview() {
  const highlighted = services.filter((s) => s.highlight);
  const others = services.filter((s) => !s.highlight);

  return (
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="orb orb-purple w-[400px] h-[400px] top-1/2 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="section-label mb-4 inline-flex">What I Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4">
            Services Built for <span className="gradient-text">Organic Growth</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            From first-page Google rankings to AI search visibility — every service I offer
            is designed to grow your brand&apos;s organic presence.
          </p>
        </motion.div>

        {/* Highlighted services - large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {highlighted.map((service, i) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="glass-card-hover p-6 sm:p-8 h-full relative overflow-hidden">
                  {/* Gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient}`}
                  />

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-px mb-6`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#0D1117] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other services - compact grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {others.map((service, i) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <div className="glass-card-hover p-4 h-full flex flex-col items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} p-px`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0D1117] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white/80 leading-tight">
                    {service.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services" className="btn-primary py-3.5 px-8">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
