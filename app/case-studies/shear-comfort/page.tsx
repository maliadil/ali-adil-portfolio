import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { caseStudyBySlug } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "ShearComfort Case Study: 256,629 Users in 2025",
  description:
    "ShearComfort SEO case study: 256,629 organic users in 2025, up 86% year over year, with #1 Google rankings and a ChatGPT recommendation for waterproof car seat covers.",
  openGraph: {
    title: "ShearComfort Case Study: 256,629 Users in 2025 | Muhammad Ali Adil",
    description:
      "ShearComfort SEO case study: 256,629 organic users in 2025, up 86% year over year, with #1 Google rankings and a ChatGPT recommendation for waterproof car seat covers.",
  },
  alternates: {
    canonical: "https://maliadil.site/case-studies/shear-comfort",
  },
};

export default function ShearComfortCaseStudy() {
  return <CaseStudyPage study={caseStudyBySlug["shear-comfort"]} />;
}
