import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "SEO Portfolio & Case Studies",
  description:
    "Browse Muhammad Ali Adil's portfolio of SEO case studies and content wins across 35+ brands, including 256,629 users in 2025, up 86%, and 2.24M impressions.",
  openGraph: {
    title: "SEO Portfolio & Case Studies | Muhammad Ali Adil",
    description:
      "Browse Muhammad Ali Adil's portfolio of SEO case studies and content wins across 35+ brands, including 256,629 users in 2025, up 86%, and 2.24M impressions.",
  },
  alternates: {
    canonical: "https://maliadil.site/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioPage />;
}
