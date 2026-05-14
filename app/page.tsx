import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BrandMarquee from "@/components/home/BrandMarquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesPreview from "@/components/home/ServicesPreview";
import SkillsSection from "@/components/home/SkillsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Muhammad Ali Adil | SEO & AI Content Strategist",
  description:
    "Results-driven SEO & AI Content Strategist who has ranked 700+ articles on Google's first page across 35+ brands. Expert in content marketing, LLM optimization, and organic growth strategies.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandMarquee />
      <FeaturedWork />
      <ServicesPreview />
      <SkillsSection />
      <CTASection />
    </>
  );
}
