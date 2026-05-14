export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  badge?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "SEO & Search",
    icon: "Search",
    color: "blue",
    skills: [
      { name: "On-Page SEO", level: 95 },
      { name: "Keyword Research", level: 93 },
      { name: "Technical SEO", level: 80 },
      { name: "Link Building", level: 75 },
      { name: "Google Search Console", level: 88 },
      { name: "Schema Markup", level: 78 },
    ],
  },
  {
    category: "AI & LLM Optimization",
    icon: "Brain",
    color: "purple",
    skills: [
      { name: "LLM Content Optimization", level: 90, badge: "Emerging Expert" },
      { name: "AI Search Visibility", level: 88 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Entity SEO", level: 82 },
      { name: "AI Overviews Targeting", level: 87 },
      { name: "Semantic SEO", level: 91 },
    ],
  },
  {
    category: "Content & Strategy",
    icon: "PenLine",
    color: "green",
    skills: [
      { name: "Content Strategy", level: 94 },
      { name: "Content Writing", level: 96 },
      { name: "Copywriting", level: 90 },
      { name: "Editorial Planning", level: 88 },
      { name: "Brand Voice Development", level: 85 },
      { name: "E-E-A-T Content", level: 89 },
    ],
  },
  {
    category: "Analytics & Tools",
    icon: "BarChart3",
    color: "cyan",
    skills: [
      { name: "Google Analytics 4", level: 85 },
      { name: "WordPress / CMS", level: 92 },
      { name: "Ahrefs / SEMrush", level: 83 },
      { name: "Surfer SEO", level: 80 },
      { name: "Google Docs / Sheets", level: 95 },
      { name: "Client Communication", level: 92 },
    ],
  },
];

export const coreCompetencies = [
  {
    title: "Google First Page Rankings",
    description: "Consistently ranked content in Google Top 10 across diverse niches",
    icon: "Trophy",
    color: "text-yellow-400",
  },
  {
    title: "AI Search Optimization",
    description: "Emerging specialist in LLM-powered search visibility and AI Overviews",
    icon: "Cpu",
    color: "text-purple-400",
  },
  {
    title: "Multi-Brand Content Management",
    description: "Managed content operations across 35+ brands simultaneously",
    icon: "Layers",
    color: "text-blue-400",
  },
  {
    title: "E-E-A-T Implementation",
    description: "Expert in building Experience, Expertise, Authority and Trust signals",
    icon: "Shield",
    color: "text-green-400",
  },
];
