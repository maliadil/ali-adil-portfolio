import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

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
          <span className="eyebrow">Results</span>
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

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow">What was done</span>
          <ul className="mt-6 max-w-3xl space-y-3">
            {study.workDone.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-[7px] h-px w-4 flex-shrink-0 bg-vermillion" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow">Evidence</span>
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
          <span className="eyebrow">How to read these numbers</span>
          <ul className="mt-6 max-w-3xl space-y-3">
            {study.readingNotes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-[7px] h-px w-4 flex-shrink-0 bg-vermillion" />
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            Not stated in the portfolio data, and not claimed here:{" "}
            {study.notStated.join(" ")}
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            If you want those details added, they need to come from the
            original reports and work records, not from this page.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow">Related services</span>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            This work maps to: {study.relatedServices.join(", ")}. See the
            full offer on the services page.
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
