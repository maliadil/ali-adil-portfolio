export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "seo-strategy",
    title: "SEO Strategy & Planning",
    description:
      "Data-driven SEO roadmaps built to rank your content on Google's first page. From technical audits to keyword architecture, I build the foundation for sustainable organic growth.",
    features: [
      "Comprehensive SEO audit",
      "Keyword gap analysis",
      "Competitor research",
      "Content pillar architecture",
      "Link building strategy",
    ],
    icon: "TrendingUp",
    gradient: "from-blue-600 to-blue-400",
    highlight: true,
  },
  {
    id: "ai-content-optimization",
    title: "AI & LLM Content Optimization",
    description:
      "Future-proof your content for AI-powered search engines including ChatGPT, Perplexity, and Google's AI Overviews. I optimize content to appear in AI-generated answers.",
    features: [
      "LLM visibility optimization",
      "AI Overviews targeting",
      "Entity-based SEO",
      "Semantic content structuring",
      "Featured snippet optimization",
    ],
    icon: "Brain",
    gradient: "from-purple-600 to-purple-400",
    highlight: true,
  },
  {
    id: "content-marketing",
    title: "Content Marketing & Strategy",
    description:
      "End-to-end content marketing systems that attract, engage, and convert. I build content ecosystems that grow your brand authority while driving measurable organic traffic.",
    features: [
      "Content strategy development",
      "Editorial calendar planning",
      "Audience research",
      "Content performance tracking",
      "Multi-channel distribution",
    ],
    icon: "LayoutDashboard",
    gradient: "from-cyan-600 to-blue-500",
    highlight: false,
  },
  {
    id: "seo-writing",
    title: "SEO Content Writing",
    description:
      "700+ published articles. Proven first-page rankings. I write content that both humans love and search engines reward — combining compelling storytelling with precision SEO.",
    features: [
      "Long-form SEO articles",
      "Product & service pages",
      "Blog content",
      "Conversion copywriting",
      "YMYL/E-E-A-T content",
    ],
    icon: "PenLine",
    gradient: "from-green-600 to-emerald-400",
    highlight: false,
  },
  {
    id: "on-page-seo",
    title: "On-Page SEO Optimization",
    description:
      "Maximize the ranking potential of your existing content. I audit, optimize, and enhance your pages to improve search visibility, click-through rates, and user engagement.",
    features: [
      "Title tag & meta optimization",
      "Content restructuring",
      "Internal linking strategy",
      "Schema markup",
      "Core Web Vitals advisory",
    ],
    icon: "Settings2",
    gradient: "from-orange-500 to-amber-400",
    highlight: false,
  },
  {
    id: "content-audit",
    title: "Content Audit & Refresh",
    description:
      "Unlock hidden organic traffic by revitalizing your existing content. I identify underperforming pages, prioritize high-ROI updates, and implement improvements that move rankings.",
    features: [
      "Full content inventory analysis",
      "Content pruning recommendations",
      "Update prioritization framework",
      "Re-optimization execution",
      "Performance monitoring",
    ],
    icon: "Search",
    gradient: "from-pink-600 to-rose-400",
    highlight: false,
  },
  {
    id: "organic-growth",
    title: "Organic Growth Strategy",
    description:
      "Holistic organic growth plans that combine SEO, content, and AI optimization into a unified system. Built for brands serious about scaling without relying on paid ads.",
    features: [
      "Multi-channel organic strategy",
      "Topical authority building",
      "AI search readiness",
      "Brand SERP management",
      "Organic traffic forecasting",
    ],
    icon: "BarChart3",
    gradient: "from-violet-600 to-purple-500",
    highlight: true,
  },
  {
    id: "account-management",
    title: "Content Account Management",
    description:
      "Seamless management of your entire content operation. From briefing writers to quality control and publishing — I handle the full workflow so you can focus on growing your business.",
    features: [
      "Multi-brand content management",
      "Writer briefing & management",
      "Quality assurance workflows",
      "Publishing coordination",
      "Reporting & analytics",
    ],
    icon: "Users",
    gradient: "from-teal-600 to-cyan-400",
    highlight: false,
  },
];
