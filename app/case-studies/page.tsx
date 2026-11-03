import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "SEO Case Studies | Muhammad Ali Adil",
  description:
    "SEO case studies with proof: ShearComfort at 256,629 organic users in 2025, Think Branded Media at 2.24M impressions in 12 months, and XJump at 105K impressions in 6 months.",
  openGraph: {
    title: "SEO Case Studies | Muhammad Ali Adil",
    description:
      "SEO case studies with proof: ShearComfort at 256,629 organic users in 2025, Think Branded Media at 2.24M impressions in 12 months, and XJump at 105K impressions in 6 months.",
  },
  alternates: {
    canonical: "https://maliadil.site/case-studies",
  },
};

export default function CaseStudiesIndex() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rule-thick pt-4 pb-10">
            <span className="eyebrow">Case Studies — The Proof</span>
          </div>
          <h1
            className="font-heading font-black leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            SEO case studies that rank
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Three full case studies, each with its headline result, the work
            done, and the evidence screenshots behind the numbers.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-paper-card p-7 sm:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-vermillion">
                  {study.client} · {study.industry}
                </p>
                <p className="mt-4 font-heading text-2xl font-bold tracking-tight text-ink group-hover:text-vermillion">
                  {study.headline}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {study.intro}
                </p>
                <p className="mt-6 font-heading text-4xl font-black tracking-tight text-ink">
                  {study.stats[0].value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {study.stats[0].label}
                </p>
                <p className="link-underline mt-6 inline-flex">
                  Read the full case study
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/services" className="link-underline">
              See the services behind these results
            </Link>
            <Link href="/portfolio" className="link-underline">
              View the full portfolio
            </Link>
            <Link href="/contact" className="link-underline">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
