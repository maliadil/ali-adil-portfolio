import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Muhammad Ali Adil — SEO & AI Content Strategist with 5+ years of experience ranking content across 35+ brands in diverse industries.",
};

export default function About() {
  return <AboutPage />;
}
