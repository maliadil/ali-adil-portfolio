"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Sparkles, MapPin, Linkedin, Mail,
  Briefcase, GraduationCap, Trophy, Brain, TrendingUp, Users,
  CheckCircle2, ExternalLink, Star,
} from "lucide-react";

const timeline = [
  {
    period: "Aug 2024 – Present",
    role: "VA Content Writer / Editor",
    company: "BlissDrive",
    location: "USA (Remote)",
    type: "Full-time",
    description:
      "Leading content production for 12+ brands in diverse industries, executing comprehensive SEO strategies that consistently land articles in Google's Top 10.",
    achievements: [
      "Published 700+ SEO-optimized articles across 12+ brands",
      "Ranked multiple articles at #1 on Google",
      "Conducted deep keyword research for high-ROI search terms",
      "Optimized existing content for rankings and conversion",
      "Collaborated with SEO teams maintaining quality standards",
    ],
    color: "from-blue-600 to-purple-600",
    icon: Brain,
  },
  {
    period: "2023 – 2024",
    role: "Content Manager / Writer",
    company: "SportingTribe",
    location: "Remote",
    type: "Full-time",
    description:
      "Managed end-to-end content operations for a sports media platform, building and executing strategies that improved search visibility and reader retention.",
    achievements: [
      "Developed content strategies driving website growth",
      "Published consistent sports coverage improving reader retention",
      "Implemented site-wide SEO best practices",
      "Monitored performance and adjusted based on analytics",
    ],
    color: "from-green-600 to-emerald-500",
    icon: TrendingUp,
  },
  {
    period: "2022 – 2023",
    role: "Digital Marketing Executive",
    company: "OS Tech Hub",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description:
      "Executed digital marketing campaigns for multiple agency clients, managing communications and coordinating cross-functional teams for timely delivery.",
    achievements: [
      "Executed digital marketing campaigns for multiple clients",
      "Managed client communications aligning strategy with goals",
      "Gained expertise in SEO, social media, and campaign planning",
      "Coordinated internal teams for effective campaign delivery",
    ],
    color: "from-cyan-600 to-blue-500",
    icon: Users,
  },
  {
    period: "2021",
    role: "Business Development Manager (B2B)",
    company: "Vodafone Australia (Karachi Office)",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description:
      "Led B2B sales and lead generation through outbound communication, building client relationships and developing persuasion skills in a competitive environment.",
    achievements: [
      "Conducted B2B sales and lead generation",
      "Built strong client relationships",
      "Contributed to business growth initiatives",
      "Developed communication and persuasion skills",
    ],
    color: "from-orange-500 to-amber-400",
    icon: Briefcase,
  },
  {
    period: "2019 – 2020",
    role: "Content Writer",
    company: "Appuals.com",
    location: "UK (Remote)",
    type: "Contract",
    description:
      "Produced tech articles and product reviews for a global audience, applying SEO strategies to improve rankings and drive organic traffic.",
    achievements: [
      "Wrote tech articles and product reviews on consumer electronics",
      "Applied SEO strategies improving article rankings",
      "Produced content tailored for a global audience",
    ],
    color: "from-pink-600 to-rose-500",
    icon: Trophy,
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Iqra University",
    period: "2023 – Present",
    description: "Developing technical foundations in computer science while building expertise in AI, machine learning, and digital systems — directly informing my approach to AI content optimization.",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Adamjee Govt. Science College",
    period: "2018 – 2020",
    description: "Science-focused education building analytical and problem-solving skills.",
  },
];

const values = [
  {
    title: "Data-Driven Decisions",
    description: "Every content and SEO strategy I build is backed by analytics, search data, and performance insights.",
    icon: TrendingUp,
    color: "text-blue-400 bg-blue-400/10",
  },
  {
    title: "AI-Forward Thinking",
    description: "I stay ahead of the curve by optimizing content for both traditional Google search and emerging AI platforms.",
    icon: Brain,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    title: "Quality Over Volume",
    description: "I prioritize creating content that genuinely serves the reader — because that's what Google and AI systems reward.",
    icon: CheckCircle2,
    color: "text-green-400 bg-green-400/10",
  },
  {
    title: "Scalable Systems",
    description: "I build content operations that grow with your business — from single blogs to multi-brand content empires.",
    icon: Users,
    color: "text-cyan-400 bg-cyan-400/10",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">About Me</span>
              <h1 className="text-5xl sm:text-6xl font-bold font-heading text-white mt-5 mb-6 leading-tight">
                The Strategist Behind the <span className="gradient-text">Rankings</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                I&apos;m <strong className="text-white">Muhammad Ali Adil</strong>, an SEO &amp; AI Content
                Strategist based in Karachi, Pakistan, working with brands worldwide. I specialize in
                creating content that ranks on Google&apos;s first page <em>and</em> appears in AI-powered
                search results from ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                With 700+ published articles and 35+ brands scaled across industries ranging from
                healthcare and legal to sports and finance, I bring a rare combination of technical
                SEO expertise and compelling content strategy. My background in Computer Science
                keeps me at the forefront of AI-driven search evolution.
              </p>
              <div className="flex items-center gap-3 text-white/40 text-sm mb-8">
                <MapPin className="w-4 h-4" />
                <span>Karachi, Pakistan · Available Worldwide · Remote</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary py-3 px-6">
                  <Sparkles className="w-4 h-4" />
                  Work With Me
                </Link>
                <a
                  href="https://www.linkedin.com/in/maliadil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-3 px-6"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="mailto:alifps2002@gmail.com" className="btn-secondary py-3 px-6">
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
              </div>
            </motion.div>

            {/* Photo + stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Photo card */}
              <div className="relative w-full max-w-sm mx-auto">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/25 via-purple-500/15 to-cyan-400/10 blur-2xl scale-105" />

                {/* Gradient border */}
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-blue-500/70 via-purple-500/50 to-blue-400/40">
                  <div className="relative rounded-3xl overflow-hidden bg-[#0D1117]" style={{ aspectRatio: "3/4" }}>
                    {/* Background tinted to match photo's green */}
                    <div className="absolute inset-0 bg-[#0e2318]" />

                    <Image
                      src="/avatar.jpg"
                      alt="Muhammad Ali Adil — SEO & AI Content Strategist"
                      fill
                      className="object-cover object-top"
                      priority
                      style={{ opacity: 1 }}
                    />

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070B14] via-[#070B14]/50 to-transparent" />

                    {/* Name badge at bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-card px-4 py-3 flex items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-bold text-sm font-heading truncate">Muhammad Ali Adil</p>
                          <p className="text-white/50 text-xs">SEO &amp; AI Content Strategist</p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top badge */}
                    <div className="absolute top-4 left-4">
                      <span className="ranking-badge text-xs px-2.5 py-1">
                        <TrendingUp className="w-3 h-3" />
                        #1 Ranked Content
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating stat — top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -right-4 glass-card px-3.5 py-2.5 border border-blue-400/25 bg-blue-400/5 animate-float"
                >
                  <p className="text-blue-400 font-bold text-lg font-heading leading-none">700+</p>
                  <p className="text-white/40 text-[10px]">Articles</p>
                </motion.div>

                {/* Floating stat — bottom left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2.5 border border-purple-400/25 bg-purple-400/5 animate-float"
                  style={{ animationDelay: "0.8s" }}
                >
                  <p className="text-purple-400 font-bold text-lg font-heading leading-none">35+</p>
                  <p className="text-white/40 text-[10px]">Brands Scaled</p>
                </motion.div>
              </div>

              {/* Mini stats row below photo */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                {[
                  { value: "100+", label: "Top 10 Rankings", color: "text-green-400" },
                  { value: "5+", label: "Years Exp.", color: "text-yellow-400" },
                  { value: "12+", label: "Industries", color: "text-cyan-400" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="glass-card p-3 text-center"
                  >
                    <p className={`text-xl font-bold font-heading ${stat.color} leading-none mb-1`}>{stat.value}</p>
                    <p className="text-[10px] text-white/40 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              How I <span className="gradient-text">Approach Work</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass-card-hover p-6 h-full">
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label mb-4 inline-flex">
              <Briefcase className="w-3 h-3" />
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative md:pl-16"
                  >
                    {/* Icon */}
                    <div
                      className={`absolute left-0 top-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-px hidden md:flex items-center justify-center`}
                    >
                      <div className="w-full h-full rounded-xl bg-[#0D1117] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="glass-card-hover p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white font-heading">
                            {item.role}
                          </h3>
                          <p className="text-blue-400 font-semibold text-sm">{item.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-white/40 block">{item.period}</span>
                          <span className="text-xs text-white/30">{item.location}</span>
                        </div>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-xs text-white/45">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="section-label mb-4 inline-flex">
              <GraduationCap className="w-3 h-3" />
              Education
            </span>
            <h2 className="text-3xl font-bold font-heading text-white mt-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass-card-hover p-6 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{edu.degree}</h3>
                      <p className="text-blue-400 text-xs">{edu.institution}</p>
                      <p className="text-white/30 text-xs">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{edu.description}</p>
                </div>
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
            className="glass-card p-10"
          >
            <h2 className="text-3xl font-bold font-heading text-white mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-white/50 mb-6">
              Let&apos;s discuss how I can help your brand rank on Google and AI search platforms.
            </p>
            <Link href="/contact" className="btn-primary py-3.5 px-8 inline-flex">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
