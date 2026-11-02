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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://maliadil.site/#person",
      name: "Muhammad Ali Adil",
      url: "https://maliadil.site/",
      image: "https://maliadil.site/hero.png",
      jobTitle: "SEO & AI Content Strategist",
      description:
        "Results-driven SEO & AI Content Strategist who has ranked 700+ articles on Google's first page across 35+ brands. Expert in content marketing, LLM optimization, and organic growth strategies.",
      email: "maliadilwork@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      sameAs: ["https://www.linkedin.com/in/maliadil"],
      knowsAbout: [
        "SEO",
        "Content Marketing",
        "AI & LLM Content Optimization",
        "GEO and LLM Optimization",
        "On-Page SEO",
        "Technical SEO",
        "Organic Growth Strategy",
        "Content Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://maliadil.site/#website",
      url: "https://maliadil.site/",
      name: "Muhammad Ali Adil Portfolio",
      inLanguage: "en",
      publisher: { "@id": "https://maliadil.site/#person" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://maliadil.site/#business",
      name: "Muhammad Ali Adil - SEO & AI Content Services",
      url: "https://maliadil.site/services",
      image: "https://maliadil.site/hero.png",
      description:
        "SEO strategy, AI content optimization, content marketing, and organic growth services by Muhammad Ali Adil. Helping brands rank on Google and AI search.",
      provider: { "@id": "https://maliadil.site/#person" },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO and Content Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Strategy & Planning",
              description:
                "Data-driven SEO roadmaps built to rank your content on Google's first page. From technical audits to keyword architecture, I build the foundation for sustainable organic growth.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & LLM Content Optimization",
              description:
                "Future-proof your content for AI-powered search engines including ChatGPT, Perplexity, and Google's AI Overviews. I optimize content to appear in AI-generated answers.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Marketing & Strategy",
              description:
                "End-to-end content marketing systems that attract, engage, and convert. I build content ecosystems that grow your brand authority while driving measurable organic traffic.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Content Writing",
              description:
                "700+ published articles. Proven first-page rankings. I write content that both humans love and search engines reward - combining compelling storytelling with precision SEO.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-Page SEO Optimization",
              description:
                "Maximize the ranking potential of your existing content. I audit, optimize, and enhance your pages to improve search visibility, click-through rates, and user engagement.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Audit & Refresh",
              description:
                "Unlock hidden organic traffic by revitalizing your existing content. I identify underperforming pages, prioritize high-ROI updates, and implement improvements that move rankings.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Organic Growth Strategy",
              description:
                "Holistic organic growth plans that combine SEO, content, and AI optimization into a unified system. Built for brands serious about scaling without relying on paid ads.",
              url: "https://maliadil.site/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Account Management",
              description:
                "Seamless management of your entire content operation. From briefing writers to quality control and publishing - I handle the full workflow so you can focus on growing your business.",
              url: "https://maliadil.site/services",
            },
          },
        ],
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
