import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "SEO & AI Content Services",
  description:
    "SEO strategy, AI content optimization, content marketing, and organic growth services by Muhammad Ali Adil. 700+ articles, 35+ brands, 100+ Top-10 rankings.",
  openGraph: {
    title: "SEO & AI Content Services | Muhammad Ali Adil",
    description:
      "SEO strategy, AI content optimization, content marketing, and organic growth services by Muhammad Ali Adil. 700+ articles, 35+ brands, 100+ Top-10 rankings.",
  },
  alternates: {
    canonical: "https://maliadil.site/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
