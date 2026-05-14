import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Ali Adil for SEO strategy, AI content optimization, and content marketing services.",
};

export default function Contact() {
  return <ContactPage />;
}
