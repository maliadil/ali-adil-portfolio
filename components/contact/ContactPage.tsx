"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    label: "Email",
    value: "maliadilwork@gmail.com",
    href: "mailto:maliadilwork@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/maliadil",
    href: "https://www.linkedin.com/in/maliadil",
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const helpItems = [
  "First-page Google rankings",
  "AI search visibility (ChatGPT, Perplexity)",
  "Content strategy & execution",
  "Multi-brand content management",
  "SEO audits & optimization",
  "Organic traffic growth",
];

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rule-thick pt-4 pb-10"
          >
            <span className="eyebrow">Contact — The Correspondence</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-heading font-black leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
            >
              Let&apos;s build something
              <br />
              that <span className="italic font-light text-vermillion">ranks</span>
              <span className="text-vermillion">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Ready to rank on Google and AI search? Reach out and let&apos;s build a strategy
              together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Contact ledger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="border-t border-ink/15">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-ink/15 py-6"
                  >
                    <div className="col-span-12 sm:col-span-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                        {info.label}
                      </span>
                    </div>
                    <div className="col-span-12 sm:col-span-8">
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-ink transition-colors hover:text-vermillion sm:text-2xl"
                        >
                          {info.value}
                          <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermillion" />
                        </a>
                      ) : (
                        <p className="font-heading text-xl font-bold tracking-tight text-ink sm:text-2xl">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Email CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <a href="mailto:maliadilwork@gmail.com" className="btn-primary w-full sm:w-auto">
                  Send me an email
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="fig-caption mt-5">
                  Typically responds within 24 hours · Available for freelance &amp; full-time
                </p>
              </motion.div>
            </motion.div>

            {/* What I can help with */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="border border-ink bg-paper-card p-8 shadow-print sm:p-9">
                <p className="eyebrow mb-6">What I can help with</p>
                <ul className="space-y-4">
                  {helpItems.map((item, i) => (
                    <li key={item} className="flex items-baseline gap-4 text-[15px] text-ink">
                      <span className="font-mono text-[10px] text-vermillion">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
