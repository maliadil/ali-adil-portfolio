import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Muhammad Ali Adil's portfolio of SEO case studies and content wins across 35+ brands in healthcare, legal, finance, and more.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
