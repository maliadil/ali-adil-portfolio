import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maliadil.site"),
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
    url: "https://maliadil.site",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-body`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FCFAF3",
              border: "1px solid rgba(27,22,16,0.25)",
              borderRadius: "0px",
              color: "#1B1610",
            },
          }}
        />
      </body>
    </html>
  );
}
