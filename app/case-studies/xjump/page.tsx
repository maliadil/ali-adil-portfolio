import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { caseStudyBySlug } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "XJump: 105,000 Search Impressions and 1,490 Clicks in Six Months",
  description:
      "XJump SEO case study: 105,000 search impressions and 1,490 clicks in six months, with a 1.42% click-through rate and an average position of 26.7.",
  openGraph: {
    title: "XJump: 105,000 Search Impressions and 1,490 Clicks in Six Months | Muhammad Ali Adil",
    description:
      "XJump SEO case study: 105,000 search impressions and 1,490 clicks in six months, with a 1.42% click-through rate and an average position of 26.7.",
  },
  alternates: {
    canonical: "https://maliadil.site/case-studies/xjump",
  },
};

export default function XJumpCaseStudy() {
  return <CaseStudyPage study={caseStudyBySlug["xjump"]} />;
}
