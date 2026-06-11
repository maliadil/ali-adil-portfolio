"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories, coreCompetencies } from "@/data/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const current = skillCategories[activeCategory];

  return (
    <section className="py-9 sm:py-12" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rule-thick mb-8 flex flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">05 — Expertise</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Skills &amp; <span className="italic font-light text-vermillion">competencies</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            A battle-tested skill set built across 5+ years of ranking content for real
            brands in competitive markets.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Category index */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {skillCategories.map((cat, i) => {
              const isActive = i === activeCategory;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  className={`group flex w-full items-baseline justify-between gap-4 border-b py-5 text-left transition-colors duration-200 ${
                    isActive ? "border-ink" : "border-ink/15"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        isActive ? "text-vermillion" : "text-ink-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-xl font-bold tracking-tight transition-colors sm:text-2xl ${
                        isActive
                          ? "text-vermillion"
                          : "text-ink group-hover:text-vermillion"
                      }`}
                    >
                      {cat.category}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                    {cat.skills.length} skills
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Skill meters */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="border border-ink/15 bg-paper-card p-7 sm:p-9">
              <p className="eyebrow mb-7">{current.category}</p>
              <div className="space-y-6">
                {current.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <span className="flex items-baseline gap-2.5">
                        <span className="text-[15px] font-medium text-ink">{skill.name}</span>
                        {skill.badge && (
                          <span className="ai-badge !py-0.5">{skill.badge}</span>
                        )}
                      </span>
                      <span className="font-mono text-[11px] text-vermillion">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core competencies */}
        <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-paper-card p-6 transition-colors duration-300 hover:bg-paper-deep sm:p-7"
            >
              <span className="font-mono text-[10px] text-vermillion">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-3 font-heading text-lg font-bold leading-snug text-ink">
                {comp.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{comp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
