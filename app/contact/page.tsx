import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Hire an SEO & AI Content Strategist",
  description:
    "Get in touch with Muhammad Ali Adil for SEO strategy, AI content optimization, and content marketing services. Typically responds within 24 hours.",
  openGraph: {
    title: "Hire an SEO & AI Content Strategist | Muhammad Ali Adil",
    description:
      "Get in touch with Muhammad Ali Adil for SEO strategy, AI content optimization, and content marketing services. Typically responds within 24 hours.",
  },
  alternates: {
    canonical: "https://maliadil.site/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
