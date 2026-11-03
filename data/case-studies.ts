export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  clientUrl: string;
  niche: string;
  industry: string;
  role: string;
  title: string;
  headline: string;
  intro: string;
  periodNote: string;
  stats: CaseStudyStat[];
  workDone: string[];
  evidence: CaseStudyImage[];
  readingNotes: string[];
  notStated: string[];
  relatedServices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "shear-comfort",
    client: "ShearComfort",
    clientUrl: "ShearComfort.com",
    niche: "Automotive Seat Covers",
    industry: "Automotive",
    role: "SEO Content Strategist",
    title: "ShearComfort Case Study: 256,629 Users in 2025",
    headline: "ShearComfort: 256,629 organic users in 2025",
    intro:
      "Led the SEO content strategy for a premium automotive seat-cover retailer, scaling organic traffic, capturing #1 Google rankings across high-intent buying queries, and earning the top recommendation in AI search.",
    periodNote: "Reported period: 2025, compared with the prior year. Exact start and end dates are not stated in the portfolio data.",
    stats: [
      { value: "256,629", label: "Organic users in 2025" },
      { value: "+86%", label: "Year-over-year growth" },
      { value: "#1", label: "Google rankings for core seat-cover terms" },
      { value: "#1", label: "ChatGPT recommendation for waterproof car seat covers, as shown in the screenshot" },
    ],
    workDone: [
      "Led the SEO content strategy for the retailer",
      "Optimized product and buying-guide content for high-intent traffic",
    ],
    evidence: [
      {
        src: "/clients/shearcomfort-organic-traffic.webp",
        alt: "ShearComfort organic traffic year-over-year, reaching 256,629 users in 2025",
        caption: "Organic traffic - 256,629 users in 2025, up 86% YoY",
      },
      {
        src: "/clients/shearcomfort-google-rankings.webp",
        alt: "ShearComfort ranking #1 on Google across multiple seat-cover search queries",
        caption: "#1 organic rankings across core seat-cover search terms",
      },
      {
        src: "/clients/shearcomfort-ai-visibility.webp",
        alt: "ChatGPT recommending ShearComfort first for waterproof car seat covers",
        caption: "Cited #1 by ChatGPT for waterproof car seat covers",
      },
    ],
    readingNotes: [
      "The 256,629 figure is organic users, not impressions or sales. It is the headline result from the portfolio data.",
      "The ChatGPT result is a screenshot observation. It shows the recommendation for that prompt at the time of the screenshot, not a permanent ranking.",
    ],
    notStated: [
      "Baseline user count before this work, so the 86% growth cannot be recomputed from this page alone.",
      "Exact work dates, pages produced, and the split between this work and other team contributions.",
    ],
    relatedServices: ["SEO Content Writing", "On-Page SEO Optimization", "AI & LLM Content Optimization"],
  },
  {
    slug: "think-branded-media",
    client: "Think Branded Media",
    clientUrl: "ThinkBrandedMedia.com",
    niche: "Branding & Media",
    industry: "Creative Agency",
    role: "Content Strategist & Writer",
    title: "Think Branded Media Case Study: 2.24M Impressions",
    headline: "Think Branded Media: 2.24M impressions in 12 months",
    intro:
      "Built and scaled the SEO content engine for a Dallas video production agency, driving millions of search impressions and earning recommendations in AI search for branded video production.",
    periodNote: "Reported period: 12 months. Exact start and end dates are not stated in the portfolio data.",
    stats: [
      { value: "2.24M", label: "Search impressions in 12 months" },
      { value: "4.33K", label: "Clicks in 12 months" },
      { value: "0.19%", label: "Click-through rate, calculated from the reported figures (4,330 / 2,240,000)" },
      { value: "34.8", label: "Average position, with a strong upward trend" },
    ],
    workDone: [
      "Built and scaled the SEO content engine for the agency",
      "Developed brand storytelling and SEO-optimized service pages",
    ],
    evidence: [
      {
        src: "/clients/thinkbranded-search-performance.webp",
        alt: "Think Branded Media search performance - 2.24M impressions and 4.33K clicks over 12 months",
        caption: "2.24M impressions & 4.33K clicks in 12 months",
      },
      {
        src: "/clients/thinkbranded-ai-visibility.webp",
        alt: "ChatGPT recommending Think Branded Media for branded video production in Dallas",
        caption: "Recommended by ChatGPT for branded video in Dallas",
      },
    ],
    readingNotes: [
      "Impressions are not sales or leads. The 0.19% click-through rate is calculated from the reported impressions and clicks, and it is low on its own, which is why it is shown here rather than hidden.",
      "An average position of 34.8 means most impressions did not come from top-10 positions. The upward trend in position is part of the result, not a claim that every query ranked on page one.",
      "The ChatGPT result is a screenshot observation for branded video production in Dallas, not a permanent ranking.",
    ],
    notStated: [
      "Baseline impressions, clicks, and position before this work.",
      "Exact work dates, pages produced, query mix, and the split between this work and other team contributions.",
    ],
    relatedServices: ["Content Marketing & Strategy", "AI & LLM Content Optimization", "SEO Strategy & Planning"],
  },
  {
    slug: "xjump",
    client: "XJump",
    clientUrl: "XJump.com",
    niche: "Recreation & Leisure",
    industry: "Recreation",
    role: "SEO Content Strategist",
    title: "XJump Case Study: 105K Impressions in 6 Months",
    headline: "XJump: 105K impressions in 6 months",
    intro:
      "Executed an SEO content strategy that scaled organic search visibility from the ground up, growing impressions and clicks steadily across six months with a consistent upward trend.",
    periodNote: "Reported period: six months. Exact start and end dates are not stated in the portfolio data.",
    stats: [
      { value: "105K", label: "Search impressions in six months" },
      { value: "1.49K", label: "Clicks in six months" },
      { value: "1.42%", label: "Click-through rate, calculated from the reported figures (1,490 / 105,000)" },
      { value: "26.7", label: "Average position, with a steady upward trajectory" },
    ],
    workDone: [
      "Executed the SEO content strategy from the ground up",
      "Built an SEO content engine driving compounding organic growth",
    ],
    evidence: [
      {
        src: "/clients/xjump-search-growth.webp",
        alt: "XJump search growth - 105K impressions and 1.49K clicks over six months with an upward trend",
        caption: "105K impressions & 1.49K clicks - climbing for 6 months",
      },
    ],
    readingNotes: [
      "This is a from-the-ground-up growth story, not a top-10 story. An average position of 26.7 means most impressions were still outside the top 10 during this period.",
      "Impressions and clicks are visibility measures, not sales or leads.",
    ],
    notStated: [
      "Baseline impressions, clicks, and position before this work.",
      "Exact work dates, pages produced, query mix, and the split between this work and other team contributions.",
    ],
    relatedServices: ["Organic Growth Strategy", "SEO Strategy & Planning", "SEO Content Writing"],
  },
];

export const caseStudyBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
);

export const caseStudySlugByBrandId: Record<string, string> = {
  "shear-comfort": "shear-comfort",
  "think-branded-media": "think-branded-media",
  xjump: "xjump",
};
