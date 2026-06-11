"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

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
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Iqra University",
    period: "2023 – Present",
    description:
      "Developing technical foundations in computer science while building expertise in AI, machine learning, and digital systems — directly informing my approach to AI content optimization.",
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
    description:
      "Every content and SEO strategy I build is backed by analytics, search data, and performance insights.",
  },
  {
    title: "AI-Forward Thinking",
    description:
      "I stay ahead of the curve by optimizing content for both traditional Google search and emerging AI platforms.",
  },
  {
    title: "Quality Over Volume",
    description:
      "I prioritize creating content that genuinely serves the reader — because that's what Google and AI systems reward.",
  },
  {
    title: "Scalable Systems",
    description:
      "I build content operations that grow with your business — from single blogs to multi-brand content empires.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rule-thick pt-4 pb-10"
          >
            <span className="eyebrow">About — The Profile</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-7"
            >
              <h1
                className="font-heading font-black leading-[0.95] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
              >
                The strategist behind
                <br />
                the <span className="italic font-light text-vermillion">rankings</span>
              </h1>
              <p className="drop-cap mt-10 text-lg leading-relaxed text-ink-soft">
                I&apos;m <strong className="font-semibold text-ink">Muhammad Ali Adil</strong>,
                an SEO &amp; AI Content Strategist based in Karachi, Pakistan, working with
                brands worldwide. I specialize in creating content that ranks on Google&apos;s
                first page <em>and</em> appears in AI-powered search results from ChatGPT,
                Perplexity, and Google AI Overviews.
              </p>
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                With 700+ published articles and 35+ brands scaled across industries ranging
                from healthcare and legal to sports and finance, I bring a rare combination of
                technical SEO expertise and compelling content strategy. My background in
                Computer Science keeps me at the forefront of AI-driven search evolution.
              </p>
              <p className="fig-caption mt-8">
                Karachi, Pakistan — Available Worldwide — Remote
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  Work with me
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/maliadil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a href="mailto:maliadilwork@gmail.com" className="link-underline">
                  Email me
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="lg:col-span-5"
            >
              <figure className="mx-auto max-w-sm">
                <div className="border border-ink bg-paper-card p-3 shadow-print">
                  <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                    <Image
                      src="/hero.png"
                      alt="Muhammad Ali Adil — SEO & AI Content Strategist"
                      fill
                      className="print-photo object-cover object-center"
                      priority
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between pt-3">
                    <span className="fig-caption">Fig. 02 — The Strategist</span>
                    <span className="fig-caption text-vermillion">B. Karachi, PK</span>
                  </figcaption>
                </div>
                {/* Mini stats */}
                <div className="mt-6 grid grid-cols-3 divide-x divide-ink/15 border-y border-ink/15 py-4">
                  {[
                    { value: "700+", label: "Articles" },
                    { value: "35+", label: "Brands" },
                    { value: "5+", label: "Years" },
                  ].map((stat) => (
                    <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
                      <p className="font-heading text-2xl font-black text-ink">{stat.value}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rule-thick mb-10 pt-4"
          >
            <span className="eyebrow">01 — Principles</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              How I <span className="italic font-light text-vermillion">approach work</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-paper-card p-6 transition-colors duration-300 hover:bg-paper-deep sm:p-7"
              >
                <span className="font-mono text-[10px] text-vermillion">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — CV ledger */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rule-thick mb-4 pt-4"
          >
            <span className="eyebrow">02 — Career Journey</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Work <span className="italic font-light text-vermillion">experience</span>
            </h2>
          </motion.div>

          <div>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-1 gap-4 border-b border-ink/15 py-9 md:grid-cols-12 md:gap-8"
              >
                {/* Period column */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-vermillion">
                    {item.period}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                    {item.location} · {item.type}
                  </p>
                </div>

                {/* Detail column */}
                <div className="md:col-span-9">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                    {item.company}
                  </p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {item.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <span className="mt-[8px] h-px w-4 flex-shrink-0 bg-vermillion" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rule-thick mb-10 pt-4"
          >
            <span className="eyebrow">03 — Education</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Academic <span className="italic font-light text-vermillion">background</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-paper-card p-7 transition-colors duration-300 hover:bg-paper-deep sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-vermillion">
                  {edu.period}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-ink">{edu.degree}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  {edu.institution}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{edu.description}</p>
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
              Ready to start a <span className="italic font-light text-vermillion-bright">project?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/65">
              Let&apos;s discuss how I can help your brand rank on Google and AI search
              platforms.
            </p>
            <Link href="/contact" className="btn-primary-inverse mt-9 inline-flex w-full sm:w-auto">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
