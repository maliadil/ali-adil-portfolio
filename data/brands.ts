export interface BrandImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Brand {
  id: string;
  name: string;
  url: string;
  niche: string;
  industry: string;
  role: string;
  description: string;
  achievements: string[];
  tags: string[];
  featured: boolean;
  priority?: number;
  images?: BrandImage[];
}

export const brands: Brand[] = [
  {
    id: "southern-california-surrogacy",
    name: "Southern California Surrogacy",
    url: "SouthernCaliforniaSurrogacy.com",
    niche: "Healthcare / Surrogacy",
    industry: "Healthcare",
    role: "SEO Content Writer",
    description:
      "Developed comprehensive, medically accurate content targeting high-intent search queries for surrogacy services in Southern California.",
    achievements: [
      "Ranked multiple service pages in Google Top 10",
      "Created empathetic, conversion-focused content for a sensitive niche",
      "Implemented semantic SEO structure for medical content",
    ],
    tags: ["Healthcare", "SEO", "Long-form Content"],
    featured: true,
  },
  {
    id: "your-signature-landscape",
    name: "Your Signature Landscape",
    url: "YourSignatureLandscape.com",
    niche: "Landscaping / Home Services",
    industry: "Home & Garden",
    role: "SEO Content Strategist",
    description:
      "Built a content ecosystem targeting local homeowners seeking premium landscaping services with geo-targeted SEO strategies.",
    achievements: [
      "Local SEO content driving qualified leads",
      "Service area pages optimized for Google Local Pack",
      "Seasonal content calendar increasing organic traffic",
    ],
    tags: ["Local SEO", "Home Services", "Content Strategy"],
    featured: true,
  },
  {
    id: "sos-wax-lv",
    name: "SOS Wax LV",
    url: "SOSWaxLV.com",
    niche: "Beauty / Waxing Salon",
    industry: "Beauty & Wellness",
    role: "Content Writer & SEO Specialist",
    description:
      "Created beauty and wellness content optimized for local Las Vegas search intent, positioning the brand as the go-to waxing destination.",
    achievements: [
      "Top 3 rankings for competitive Las Vegas beauty keywords",
      "Service-specific landing pages with strong conversion copy",
      "AI search optimization for beauty intent queries",
    ],
    tags: ["Beauty", "Local SEO", "Conversion Copy"],
    featured: false,
  },
  {
    id: "precision-general-contracting",
    name: "Precision General Contracting",
    url: "PrecisionGeneralContracting.com",
    niche: "Construction / Contracting",
    industry: "Construction",
    role: "SEO Writer",
    description:
      "Authored authoritative construction content targeting commercial and residential clients, establishing brand credibility in a competitive market.",
    achievements: [
      "Ranked for competitive contractor keywords",
      "Project showcase content driving qualified inquiries",
      "Trust-building content strategy for B2B clients",
    ],
    tags: ["Construction", "B2B", "Authority Content"],
    featured: false,
  },
  {
    id: "jump-orange",
    name: "Jump Orange",
    url: "JumpOrange.com",
    niche: "Digital Marketing Agency",
    industry: "Marketing",
    role: "Content Strategist",
    description:
      "Developed thought leadership and agency positioning content to attract new clients and showcase digital marketing expertise.",
    achievements: [
      "Agency blog content driving inbound leads",
      "Thought leadership articles improving domain authority",
      "Case study content showcasing client results",
    ],
    tags: ["Marketing", "Thought Leadership", "B2B Content"],
    featured: false,
  },
  {
    id: "spectrum-xray",
    name: "Spectrum X-Ray",
    url: "SpectrumXRay.com",
    niche: "Medical Imaging / Healthcare",
    industry: "Healthcare",
    role: "Medical Content Writer",
    description:
      "Crafted technically accurate medical imaging content balancing clinical precision with patient-friendly accessibility.",
    achievements: [
      "YMYL-compliant medical content strategy",
      "Ranked for radiology and imaging service keywords",
      "Patient education content improving site engagement",
    ],
    tags: ["Healthcare", "Medical Content", "YMYL"],
    featured: true,
  },
  {
    id: "oc-pond",
    name: "OC Pond",
    url: "OCPond.org",
    niche: "Pond & Water Features",
    industry: "Home & Garden",
    role: "Content Writer",
    description:
      "Created niche-specific content for pond installation and water feature services in Orange County, California.",
    achievements: [
      "Niche keyword dominance in OC pond market",
      "Educational how-to content building brand authority",
      "Local service area coverage driving regional leads",
    ],
    tags: ["Niche Content", "Local SEO", "Home Services"],
    featured: false,
  },
  {
    id: "think-branded-media",
    name: "Think Branded Media",
    url: "ThinkBrandedMedia.com",
    niche: "Branding & Media",
    industry: "Creative Agency",
    role: "Content Strategist & Writer",
    description:
      "Built and scaled the SEO content engine for a Dallas video production agency — driving millions of search impressions and earning recommendations in AI search for branded video production.",
    achievements: [
      "Scaled to 2.24M search impressions and 4.33K clicks in 12 months",
      "Recommended by ChatGPT for branded video production in Dallas",
      "Improved average position to 34.8 with a strong upward trend",
      "Developed brand storytelling and SEO-optimized service pages",
    ],
    tags: ["Branding", "Creative", "SEO", "AI Search"],
    featured: true,
    priority: 2,
    images: [
      {
        src: "/clients/thinkbranded-search-performance.webp",
        alt: "Think Branded Media search performance — 2.24M impressions and 4.33K clicks over 12 months",
        caption: "2.24M impressions & 4.33K clicks in 12 months",
      },
      {
        src: "/clients/thinkbranded-ai-visibility.webp",
        alt: "ChatGPT recommending Think Branded Media for branded video production in Dallas",
        caption: "Recommended by ChatGPT for branded video in Dallas",
      },
    ],
  },
  {
    id: "action-1st",
    name: "Action 1st",
    url: "Action1st.com",
    niche: "Legal / Personal Injury",
    industry: "Legal",
    role: "Legal Content Writer",
    description:
      "Produced high-stakes legal content targeting personal injury and accident claim keywords with precise, trustworthy messaging.",
    achievements: [
      "Ranked for competitive legal keywords",
      "YMYL legal content strategy implementation",
      "High-converting practice area pages",
    ],
    tags: ["Legal", "YMYL", "High-Stakes SEO"],
    featured: true,
  },
  {
    id: "euroline-steel-windows",
    name: "Euroline Steel Windows",
    url: "Eurolinesteelwindows.com",
    niche: "Luxury Construction / Windows",
    industry: "Construction",
    role: "Content Writer & SEO Specialist",
    description:
      "Created premium content for a luxury steel window manufacturer, targeting high-end residential and commercial buyers.",
    achievements: [
      "Luxury product content driving high-value inquiries",
      "Architectural content targeting design professionals",
      "Brand authority content in premium construction niche",
    ],
    tags: ["Luxury", "Construction", "Premium Content"],
    featured: false,
  },
  {
    id: "los-angeles-general-contractor",
    name: "LA General Contractor",
    url: "LosAngelesGeneralContractor.com",
    niche: "Construction / Contracting",
    industry: "Construction",
    role: "Local SEO Content Writer",
    description:
      "Built comprehensive location-based content strategy targeting renovation and construction clients across Los Angeles.",
    achievements: [
      "Top rankings for LA contractor keywords",
      "Neighborhood-specific service pages",
      "Google Map Pack optimization content",
    ],
    tags: ["Local SEO", "Construction", "Los Angeles"],
    featured: false,
  },
  {
    id: "bradco-kitchen",
    name: "BradCo Kitchen",
    url: "BradCoKitchen.com",
    niche: "Kitchen Remodeling",
    industry: "Home Improvement",
    role: "Content Writer",
    description:
      "Developed kitchen remodeling content with strong visual storytelling and SEO optimization for homeowner audiences.",
    achievements: [
      "Ranked for kitchen remodeling keywords",
      "Before/after content strategy driving social engagement",
      "Local service area optimization",
    ],
    tags: ["Home Improvement", "Local SEO", "Visual Content"],
    featured: false,
  },
  {
    id: "mr-plant-socal",
    name: "Mr. Plant SoCal",
    url: "MrPlantSoCal.com",
    niche: "Plants & Horticulture",
    industry: "Home & Garden",
    role: "Content Writer",
    description:
      "Created plant care guides and horticultural content targeting Southern California garden enthusiasts and commercial buyers.",
    achievements: [
      "Educational content driving organic search traffic",
      "Product-focused SEO content improving conversions",
      "Seasonal plant content calendar",
    ],
    tags: ["Horticulture", "Educational Content", "E-commerce SEO"],
    featured: false,
  },
  {
    id: "socal-truck-ins",
    name: "SoCal Truck Insurance",
    url: "SoCalTruckIns.com",
    niche: "Commercial Insurance",
    industry: "Insurance",
    role: "Insurance Content Writer",
    description:
      "Authored complex commercial truck insurance content that simplifies industry jargon for business owners seeking coverage.",
    achievements: [
      "Insurance keyword rankings for California market",
      "Trust-building educational content",
      "Quote conversion optimization copy",
    ],
    tags: ["Insurance", "B2B", "Regulatory Content"],
    featured: false,
  },
  {
    id: "displays-and-holders",
    name: "Displays & Holders",
    url: "DisplaysAndHolders.com",
    niche: "Display Products / Retail",
    industry: "Retail",
    role: "E-commerce Content Writer",
    description:
      "Optimized product descriptions and category content for a display and signage products retailer targeting B2B customers.",
    achievements: [
      "Product page SEO optimization across catalog",
      "Category content strategy improving organic visibility",
      "B2B buyer-focused content improving conversion rates",
    ],
    tags: ["E-commerce", "Product Content", "B2B Retail"],
    featured: false,
  },
  {
    id: "drafting-consultants",
    name: "Drafting Consultants",
    url: "DraftingConsultants.com",
    niche: "Architecture / CAD Services",
    industry: "Architecture",
    role: "Technical Content Writer",
    description:
      "Produced technical yet accessible content for architectural drafting and CAD services targeting developers and contractors.",
    achievements: [
      "Technical service page rankings",
      "B2B content strategy for professional services",
      "Authority building in architectural niche",
    ],
    tags: ["Technical Content", "B2B", "Architecture"],
    featured: false,
  },
  {
    id: "western-fumigation",
    name: "Western Fumigation",
    url: "WesternFumigation.com",
    niche: "Pest Control",
    industry: "Home Services",
    role: "Local SEO Content Writer",
    description:
      "Created pest control content with emergency intent optimization and local service area targeting across California.",
    achievements: [
      "Emergency pest control keyword rankings",
      "Educational content building brand trust",
      "Local SEO content across multiple service areas",
    ],
    tags: ["Local SEO", "Home Services", "Emergency Intent"],
    featured: false,
  },
  {
    id: "alleviate-financial",
    name: "Alleviate Financial",
    url: "AlleviateFinancial.com",
    niche: "Debt Relief / Financial Services",
    industry: "Finance",
    role: "Financial Content Strategist",
    description:
      "Developed sensitive, empathetic financial content for debt relief services targeting individuals in financial distress.",
    achievements: [
      "YMYL-compliant financial content strategy",
      "High-intent debt relief keyword rankings",
      "Trust-building content improving lead quality",
    ],
    tags: ["Finance", "YMYL", "Sensitive Content"],
    featured: true,
  },
  {
    id: "sportyaura",
    name: "Sportyaura",
    url: "Sportyaura.com",
    niche: "Sports & Fitness",
    industry: "Sports",
    role: "Sports Content Writer",
    description:
      "Created engaging sports and fitness content combining performance insights with SEO optimization for active audiences.",
    achievements: [
      "Sports keyword rankings driving organic traffic",
      "Product review content with high conversion rates",
      "Community-focused content increasing engagement",
    ],
    tags: ["Sports", "Fitness", "Product Reviews"],
    featured: false,
  },
  {
    id: "shear-comfort",
    name: "ShearComfort",
    url: "ShearComfort.com",
    niche: "Automotive Seat Covers",
    industry: "Automotive",
    role: "SEO Content Strategist",
    description:
      "Led the SEO content strategy for a premium automotive seat-cover retailer — scaling organic traffic, capturing #1 Google rankings across high-intent buying queries, and earning the top recommendation in AI search.",
    achievements: [
      "Grew organic traffic to 256,629 users in 2025 — up 86% year over year",
      "Ranked #1 on Google for core seat-cover search terms",
      "Cited as the #1 recommendation by ChatGPT for waterproof car seat covers",
      "Optimized product and buying-guide content for high-intent traffic",
    ],
    tags: ["Automotive", "E-commerce", "SEO", "AI Search"],
    featured: true,
    priority: 3,
    images: [
      {
        src: "/clients/shearcomfort-organic-traffic.webp",
        alt: "ShearComfort organic traffic year-over-year, reaching 256,629 users in 2025",
        caption: "Organic traffic — 256,629 users in 2025, up 86% YoY",
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
  },
  {
    id: "xjump",
    name: "XJump",
    url: "XJump.com",
    niche: "Recreation & Leisure",
    industry: "Recreation",
    role: "SEO Content Strategist",
    description:
      "Executed an SEO content strategy that scaled organic search visibility from the ground up — growing impressions and clicks steadily across six months with a consistent upward trend.",
    achievements: [
      "Grew search impressions to 105K and clicks to 1.49K in six months",
      "Improved average position to 26.7 with a steady upward trajectory",
      "Built an SEO content engine driving compounding organic growth",
    ],
    tags: ["Recreation", "SEO", "Organic Growth"],
    featured: true,
    priority: 1,
    images: [
      {
        src: "/clients/xjump-search-growth.webp",
        alt: "XJump search growth — 105K impressions and 1.49K clicks over six months with an upward trend",
        caption: "105K impressions & 1.49K clicks — climbing for 6 months",
      },
    ],
  },
  {
    id: "sporting-tribe",
    name: "SportingTribe",
    url: "sportingtribe.com",
    niche: "Sports Media",
    industry: "Sports & Media",
    role: "Content Manager / Writer",
    description:
      "Led content operations for a sports media platform, managing editorial calendar and implementing comprehensive SEO strategies.",
    achievements: [
      "Built and managed full content publishing pipeline",
      "Implemented site-wide SEO best practices",
      "Grew organic traffic through strategic content planning",
      "Managed multiple contributors and maintained quality standards",
    ],
    tags: ["Sports", "Content Management", "Editorial"],
    featured: true,
  },
];

export const featuredBrands = brands
  .filter((b) => b.featured)
  .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

export const allBrandNames = [
  "SouthernCaliforniaSurrogacy.com",
  "YourSignatureLandscape.com",
  "SOSWaxLV.com",
  "PrecisionGeneralContracting.com",
  "JumpOrange.com",
  "SpectrumXRay.com",
  "OCPond.org",
  "ThinkBrandedMedia.com",
  "Action1st.com",
  "Eurolinesteelwindows.com",
  "LosAngelesGeneralContractor.com",
  "BradCoKitchen.com",
  "MrPlantSoCal.com",
  "SoCalTruckIns.com",
  "DisplaysAndHolders.com",
  "DraftingConsultants.com",
  "Util-locate.com",
  "StrongTieInsurance.com",
  "SailNewportBeach.com",
  "Orthorepair.com",
  "BessUtilitySolutions.com",
  "XJump.com",
  "WesternFumigation.com",
  "Herokiddo.com",
  "Futuresense.com",
  "AlleviateFinancial.com",
  "Sportyaura.com",
  "novelink",
  "asmeron",
  "sportingtribe",
  "ShearComfort.com",
  "AlexandriaHomeSolutions.com",
  "WPG.com",
  "ostechhub.com",
  "digiswan.com",
];
