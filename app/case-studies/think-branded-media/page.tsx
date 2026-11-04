import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { caseStudyBySlug } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Think Branded Media: 2.24 Million Search Impressions in 12 Months",
  description:
      "Think Branded Media SEO case study: 2.24 million search impressions and 4,330 clicks in 12 months for a Dallas video production agency, with a ChatGPT recommendation for branded video.",
  openGraph: {
    title: "Think Branded Media: 2.24 Million Search Impressions in 12 Months | Muhammad Ali Adil",
    description:
      "Think Branded Media SEO case study: 2.24 million search impressions and 4,330 clicks in 12 months for a Dallas video production agency, with a ChatGPT recommendation for branded video.",
  },
  alternates: {
    canonical: "https://maliadil.site/case-studies/think-branded-media",
  },
};

export default function ThinkBrandedMediaCaseStudy() {
  return <CaseStudyPage study={caseStudyBySlug["think-branded-media"]} />;
}
