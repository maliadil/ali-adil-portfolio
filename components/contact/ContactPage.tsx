"use client";

import { motion } from "framer-motion";
import {
  Mail, Linkedin, MapPin, Clock, CheckCircle2, Sparkles, ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alifps2002@gmail.com",
    href: "mailto:alifps2002@gmail.com",
    color: "text-blue-400 bg-blue-400/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/maliadil",
    href: "https://www.linkedin.com/in/maliadil",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    color: "text-green-400 bg-green-400/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    color: "text-yellow-400 bg-yellow-400/10",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="orb orb-blue w-[400px] h-[400px] -top-20 left-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Get In Touch</span>
            <h1 className="text-5xl sm:text-6xl font-bold font-heading text-white mt-5 mb-5">
              Let&apos;s Build Something <span className="gradient-text">That Ranks</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Ready to rank on Google and AI search? Reach out and let&apos;s build a
              strategy together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="glass-card-hover p-5 flex items-center gap-4 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What I can help with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass-card p-6 mb-8"
          >
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              What I Can Help With
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "First-page Google rankings",
                "AI search visibility (ChatGPT, Perplexity)",
                "Content strategy & execution",
                "Multi-brand content management",
                "SEO audits & optimization",
                "Organic traffic growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/55">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-center"
          >
            <a
              href="mailto:alifps2002@gmail.com"
              className="btn-primary py-4 px-10 text-base inline-flex"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-white/30 text-xs mt-4">
              Typically responds within 24 hours · Available for freelance &amp; full-time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
