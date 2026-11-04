export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
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
  sections: CaseStudySection[];
  evidence: CaseStudyImage[];
  takeaway: string[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  relatedServices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "shear-comfort",
    client: "ShearComfort",
    clientUrl: "ShearComfort.com",
    niche: "Automotive Seat Covers",
    industry: "Automotive accessories",
    role: "SEO Content Strategist",
    title: "ShearComfort: SEO Content Supporting 256,629 Organic Users in 2025",
    headline: "ShearComfort: SEO Content Supporting 256,629 Organic Users in 2025",
    intro:
      "SEO content strategy for an automotive seat-cover retailer, with reported organic user growth of 86% year over year.",
    periodNote: "Reported period: 2025, compared with the previous year.",
    stats: [
      { value: "256,629", label: "Organic users in 2025" },
      { value: "+86%", label: "Year-over-year growth in organic users" },
      { value: "#1", label: "Google positions for seat-cover searches, examples shown in the ranking screenshots" },
      { value: "#1", label: "ChatGPT recommendation for a waterproof seat-cover query, as shown in the screenshot" },
    ],
    sections: [
      {
        heading: "Project overview",
        paragraphs: [
          "ShearComfort sells automotive seat covers — a product category where shoppers need to understand fit, materials, protection, and suitability before choosing what to buy.",
          "My contribution focused on SEO content strategy and the optimization of product and buying-guide content for relevant purchasing searches. The goal was to connect the information shoppers needed with the products the retailer offered.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I worked on the content side of the retailer's organic search strategy, with responsibility for aligning product and buying-guide content with high-intent searches.",
          "The emphasis was on useful content with a clear commercial purpose: helping potential customers understand their options and move toward a suitable product.",
        ],
        bullets: [
          "Product content: Helping pages address the information shoppers need when evaluating seat covers.",
          "Buying-guide content: Supporting searches from people comparing options and deciding which type of seat cover fits their needs.",
        ],
      },
      {
        heading: "Reported results",
        paragraphs: [
          "These figures describe website performance during the reporting period. My contribution was to the SEO content work supporting that performance; the figures do not isolate the effect of my work from other SEO, website, or marketing activity.",
        ],
      },
      {
        heading: "Visibility in AI search",
        paragraphs: [
          "An accompanying screenshot also shows ChatGPT recommending ShearComfort for a waterproof seat-cover query.",
          "This provides an example of the brand appearing during an AI-assisted product search. It represents the response to that particular prompt at the time it was captured, rather than a permanent position or a result guaranteed across different searches.",
        ],
      },
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
    takeaway: [
      "This project connects SEO content with the questions people ask before purchasing an automotive product.",
      "The reported results show substantial organic reach during the period. My role centered on making product and buying-guide content relevant to those searches and useful to prospective customers.",
    ],
    ctaHeading: "Need content that supports product discovery?",
    ctaText:
      "I help businesses develop and improve SEO content around the questions, comparisons, and decisions that matter to their customers.",
    ctaLabel: "Discuss your project",
    relatedServices: ["SEO Content Writing", "On-Page SEO Optimization", "AI & LLM Content Optimization"],
  },
  {
    slug: "think-branded-media",
    client: "Think Branded Media",
    clientUrl: "ThinkBrandedMedia.com",
    niche: "Branding & Media",
    industry: "Video production and creative services",
    role: "Content Strategist & Writer",
    title: "Think Branded Media: 2.24 Million Search Impressions in 12 Months",
    headline: "Think Branded Media: 2.24 Million Search Impressions in 12 Months",
    intro:
      "SEO content strategy and writing for a Dallas video production agency, supporting visibility across relevant searches.",
    periodNote: "Reported period: 12 months.",
    stats: [
      { value: "2.24M", label: "Search impressions in 12 months" },
      { value: "4,330", label: "Organic search clicks in 12 months" },
      { value: "0.19%", label: "Click-through rate, calculated from the displayed, rounded impression and click figures" },
      { value: "34.8", label: "Average search position" },
    ],
    sections: [
      {
        heading: "Project overview",
        paragraphs: [
          "Think Branded Media provides video production services in Dallas. Its content needs to explain the agency's capabilities while helping prospective clients understand how those services relate to their projects.",
          "My work combined content strategy, brand storytelling, and SEO-focused service-page writing. The aim was to make the agency's expertise easier to discover and its services easier to understand.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I contributed to the agency's SEO content operation through content strategy and writing, including the development of service-page content.",
          "This supported a content presence that could introduce the agency to searchers while giving visitors a clearer understanding of its services.",
        ],
        bullets: [
          "Search relevance: Connecting service content with the topics and needs prospective clients search for.",
          "Brand communication: Explaining the agency's offering through clear, relevant storytelling.",
        ],
      },
      {
        heading: "Reported results",
        paragraphs: [
          "The CTR is approximately 0.19%, calculated from the displayed, rounded impression and click figures.",
          "These are website-level search results for the reporting period. My contribution was to content strategy and writing within the broader work supporting that visibility.",
        ],
      },
      {
        heading: "What the results show",
        paragraphs: [
          "The report demonstrates that the website appeared frequently in search results and received 4,330 clicks from those appearances.",
          "Impressions measure search visibility; clicks measure visits from search results. Neither figure establishes how many enquiries or customers the website generated.",
          "The average position summarizes appearances across different searches during the period. Individual queries can perform very differently, so it should not be interpreted as a fixed ranking for the website.",
        ],
      },
      {
        heading: "Visibility in AI search",
        paragraphs: [
          "A supporting screenshot shows ChatGPT recommending Think Branded Media in response to a query about branded video production in Dallas.",
          "This is a documented example of the agency appearing in an AI-generated recommendation. The observation applies to the specific prompt and response captured.",
        ],
      },
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
    takeaway: [
      "This project demonstrates my work at the intersection of SEO content and service-business communication.",
      "The content needed to help people discover the agency and understand what it offered. The performance report provides evidence of search exposure and clicks during the period, while the service-page work shows the practical focus of my contribution.",
    ],
    ctaHeading: "Make your services easier to discover and understand",
    ctaText:
      "I help service businesses develop SEO content that explains their expertise, answers prospective clients' questions, and supports a clear path to enquiry.",
    ctaLabel: "Discuss your content needs",
    relatedServices: ["Content Marketing & Strategy", "SEO Content Writing"],
  },
  {
    slug: "xjump",
    client: "XJump",
    clientUrl: "XJump.com",
    niche: "Recreation & Leisure",
    industry: "Recreation",
    role: "SEO Content Strategist",
    title: "XJump: 105,000 Search Impressions and 1,490 Clicks in Six Months",
    headline: "XJump: 105,000 Search Impressions and 1,490 Clicks in Six Months",
    intro:
      "SEO content strategy supporting organic visibility for a business in the recreation sector.",
    periodNote: "Reported period: six months.",
    stats: [
      { value: "105,000", label: "Search impressions in six months" },
      { value: "1,490", label: "Organic search clicks in six months" },
      { value: "1.42%", label: "Click-through rate, calculated from the displayed, rounded impression and click figures" },
      { value: "26.7", label: "Average search position" },
    ],
    sections: [
      {
        heading: "Project overview",
        paragraphs: [
          "My work with XJump focused on developing and executing an SEO content strategy to support its organic search presence.",
          "The project emphasized building a consistent approach to content and establishing visibility across relevant searches. The accompanying Search Console report documents the website's performance over a six-month period.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I worked on the strategy and execution of XJump's SEO content activity.",
          "My contribution centered on establishing a content approach that supported organic discovery and could be developed over time. This connected the direction of the content work with the broader objective of increasing the website's visibility in search.",
          "The performance evidence presented here relates to the website as a whole during the reporting period, rather than an isolated measurement of individual articles or changes.",
        ],
      },
      {
        heading: "Reported results",
        paragraphs: [
          "The CTR is approximately 1.42%, calculated from the displayed, rounded impression and click figures.",
        ],
      },
      {
        heading: "What the results show",
        paragraphs: [
          "The report records 105,000 appearances in search results and 1,490 clicks during the six-month window.",
          "These figures establish that the website was gaining search exposure and attracting visits. They do not, on their own, establish revenue, lead generation, or the increase from a previous period.",
          "The reported average position of 26.7 describes the combined search appearances in the report. It does not mean every keyword ranked at that position, or establish what proportion of impressions came from the top 10.",
        ],
      },
    ],
    evidence: [
      {
        src: "/clients/xjump-search-growth.webp",
        alt: "XJump search growth - 105K impressions and 1.49K clicks over six months with an upward trend",
        caption: "105K impressions & 1.49K clicks - climbing for 6 months",
      },
    ],
    takeaway: [
      "This project reflects my contribution to developing an SEO content strategy and supporting its execution.",
      "The reported results provide a measurable record of the website's search visibility during the period. They also establish a useful reference point for evaluating future content work through changes in relevant queries, page performance, and organic clicks.",
    ],
    ctaHeading: "Build a clearer direction for your SEO content",
    ctaText:
      "I help businesses plan and develop content around relevant search opportunities, with a practical focus on useful pages and measurable performance.",
    ctaLabel: "Discuss your SEO content project",
    relatedServices: ["SEO Strategy & Planning", "SEO Content Writing", "Organic Growth Strategy"],
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
