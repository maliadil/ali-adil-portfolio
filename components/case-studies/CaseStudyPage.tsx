import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import { serviceIdByTitle } from "@/data/internal-links";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.intro,
    author: { "@id": "https://maliadil.site/#person" },
    about: {
      "@type": "Organization",
      name: study.client,
      url: `https://${study.clientUrl}`,
    },
  };

  return (
    <div className="pt-20 sm:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rule-thick pt-4 pb-10">
            <span className="eyebrow">Case Study — {study.industry}</span>
          </div>
          <h1
            className="font-heading font-black leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            {study.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {study.intro}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            Client: {study.client} · {study.niche} · Role: {study.role}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            {study.periodNote}
          </p>
          <a
            href={`https://${study.clientUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-ink-soft underline decoration-ink/30 underline-offset-4 hover:text-vermillion"
          >
            Visit {study.clientUrl}
          </a>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow">Reported results</span>
          <div className="mt-6 grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {study.stats.map((stat) => (
              <div key={stat.label} className="bg-paper-card p-7">
                <p className="font-heading text-4xl font-black tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {study.sections.map((section) => (
        <section key={section.heading} className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="eyebrow">{section.heading}</h2>
            {section.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft"
              >
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-6 max-w-3xl space-y-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                    <span className="mt-[7px] h-px w-4 flex-shrink-0 bg-vermillion" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="eyebrow">Evidence</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {study.evidence.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-ink/15 bg-paper-card">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <p className="fig-caption mt-2.5 leading-snug">{img.caption}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="eyebrow">Project takeaway</h2>
          {study.takeaway.map((para, i) => (
            <p
              key={i}
              className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft"
            >
              {para}
            </p>
          ))}
          <h2 className="mt-10 max-w-3xl font-heading text-3xl font-black tracking-tight text-ink">
            {study.ctaHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            {study.ctaText}
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              {study.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="eyebrow">More case studies</h2>
          <div className="mt-6 grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {caseStudies
              .filter((other) => other.slug !== study.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group bg-paper-card p-7"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-vermillion">
                    {other.client} · {other.industry}
                  </p>
                  <p className="mt-3 font-heading text-xl font-bold tracking-tight text-ink group-hover:text-vermillion">
                    {other.headline}
                  </p>
                </Link>
              ))}
          </div>
          <p className="mt-6">
            <Link href="/case-studies" className="link-underline">
              View all case studies
            </Link>
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="eyebrow">Related services</h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            This work maps to:
          </p>
          <ul className="mt-4 flex max-w-3xl flex-wrap gap-x-6 gap-y-3">
            {study.relatedServices.map((serviceName) => (
              <li key={serviceName}>
                <Link
                  href={`/services#${serviceIdByTitle[serviceName] ?? ""}`}
                  className="link-underline"
                >
                  {serviceName}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            See the full offer on the{" "}
            <Link href="/services" className="link-underline">
              services page
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" className="btn-primary w-full sm:w-auto">
              View services
            </Link>
            <Link href="/portfolio" className="link-underline">
              Back to portfolio
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
