import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO strategy, AI content optimization, content marketing, and organic growth services by Muhammad Ali Adil. Helping brands rank on Google and AI search.",
};

export default function Services() {
  return <ServicesPage />;
}
