import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { caseStudyBySlug } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "XJump Case Study: 105K Impressions in 6 Months",
  description:
    "XJump SEO case study: 105K search impressions and 1.49K clicks in six months, with average position improving to 26.7 and a steady upward trend from the ground up.",
  openGraph: {
    title: "XJump Case Study: 105K Impressions in 6 Months | Muhammad Ali Adil",
    description:
      "XJump SEO case study: 105K search impressions and 1.49K clicks in six months, with average position improving to 26.7 and a steady upward trend from the ground up.",
  },
  alternates: {
    canonical: "https://maliadil.site/case-studies/xjump",
  },
};

export default function XJumpCaseStudy() {
  return <CaseStudyPage study={caseStudyBySlug["xjump"]} />;
}
