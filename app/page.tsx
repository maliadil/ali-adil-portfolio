import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BrandMarquee from "@/components/home/BrandMarquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesPreview from "@/components/home/ServicesPreview";
import SkillsSection from "@/components/home/SkillsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "SEO & AI Content Strategist | Muhammad Ali Adil",
  description:
    "Grew one brand to 256,629 organic users in 2025, up 86%, and another to 2.24M impressions. SEO and AI search strategist, 700+ articles, 35+ brands.",
  openGraph: {
    title: "SEO & AI Content Strategist | Muhammad Ali Adil",
    description:
      "Grew one brand to 256,629 organic users in 2025, up 86%, and another to 2.24M impressions. SEO and AI search strategist, 700+ articles, 35+ brands.",
  },
  alternates: {
    canonical: "https://maliadil.site",
  },
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
