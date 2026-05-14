import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maliadil.com"),
  title: {
    default: "Muhammad Ali Adil | SEO & AI Content Strategist",
    template: "%s | Muhammad Ali Adil",
  },
  description:
    "Results-driven SEO & AI Content Strategist who has ranked 700+ articles on Google's first page across 35+ brands. Expert in content marketing, LLM optimization, and organic growth strategies.",
  keywords: [
    "SEO specialist",
    "content marketing",
    "AI content optimization",
    "LLM SEO",
    "organic growth",
    "content strategist",
    "SEO writer",
    "Muhammad Ali Adil",
    "content manager",
    "digital marketing strategist",
  ],
  authors: [{ name: "Muhammad Ali Adil" }],
  creator: "Muhammad Ali Adil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maliadil.com",
    title: "Muhammad Ali Adil | SEO & AI Content Strategist",
    description:
      "Helping brands rank on Google & AI Search. 700+ articles published. 35+ brands scaled. Proven first-page results.",
    siteName: "Muhammad Ali Adil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali Adil | SEO & AI Content Strategist",
    description:
      "Helping brands rank on Google & AI Search. 700+ articles published. 35+ brands scaled.",
    creator: "@maliadil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(13,17,23,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#F8FAFC",
            },
          }}
        />
      </body>
    </html>
  );
}
