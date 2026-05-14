"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Brain, PenLine, BarChart3, Trophy, Cpu, Layers, Shield } from "lucide-react";
import { skillCategories, coreCompetencies } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Brain, PenLine, BarChart3, Trophy, Cpu, Layers, Shield,
};

const colorMap: Record<string, string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-green-400",
  cyan: "text-cyan-400",
};

const bgMap: Record<string, string> = {
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  green: "bg-green-400",
  cyan: "bg-cyan-400",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const current = skillCategories[activeCategory];
  const Icon = iconMap[current.icon] || Search;

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mt-4">
            Skills &amp; <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            A battle-tested skill set built across 5+ years of ranking content for real brands
            in competitive markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Category selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {skillCategories.map((cat, i) => {
              const CatIcon = iconMap[cat.icon] || Search;
              const isActive = i === activeCategory;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left ${
                    isActive
                      ? "bg-white/[0.07] border-white/[0.15]"
                      : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/[0.08]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-gradient-to-br from-blue-600 to-purple-600" : "bg-white/[0.05]"
                    }`}
                  >
                    <CatIcon
                      className={`w-5 h-5 ${isActive ? "text-white" : colorMap[cat.color]}`}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {cat.category}
                    </p>
                    <p className="text-xs text-white/30">{cat.skills.length} skills</p>
                  </div>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{current.category}</h3>
            </div>

            <div className="space-y-5">
              {current.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/80 font-medium">{skill.name}</span>
                      {skill.badge && (
                        <span className="ai-badge text-[10px]">{skill.badge}</span>
                      )}
                    </div>
                    <span className={`text-xs font-bold ${colorMap[current.color]}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className={`skill-bar-fill`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      style={{
                        background: `linear-gradient(90deg, ${
                          current.color === "blue"
                            ? "#2563EB, #3B82F6"
                            : current.color === "purple"
                            ? "#7C3AED, #A78BFA"
                            : current.color === "green"
                            ? "#059669, #10B981"
                            : "#0891B2, #06B6D4"
                        })`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core competencies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCompetencies.map((comp, i) => {
            const CompIcon = iconMap[comp.icon] || Trophy;
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass-card-hover p-5 h-full">
                  <CompIcon className={`w-6 h-6 ${comp.color} mb-3`} />
                  <h4 className="text-sm font-bold text-white mb-2">{comp.title}</h4>
                  <p className="text-xs text-white/45 leading-relaxed">{comp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
