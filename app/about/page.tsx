import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "SEO & AI Content Strategist, 700+ Articles Ranked",
  description:
    "SEO and AI content strategist with 5+ years, 700+ ranked articles, and 35+ brands scaled. See Muhammad Ali Adil's SEO, GEO, and content work.",
  openGraph: {
    title: "SEO & AI Content Strategist, 700+ Articles Ranked | Muhammad Ali Adil",
    description:
      "SEO and AI content strategist with 5+ years, 700+ ranked articles, and 35+ brands scaled. See Muhammad Ali Adil's SEO, GEO, and content work.",
  },
  alternates: {
    canonical: "https://maliadil.site/about",
  },
};

export default function About() {
  return <AboutPage />;
}
