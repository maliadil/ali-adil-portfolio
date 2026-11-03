/**
 * Internal linking map for maliadil.site.
 *
 * One source of truth so service names, service anchors, and proof
 * case studies stay consistent across Services, Case Studies, Home,
 * and the Footer. No new pages are invented here: every href is an
 * existing route, a /services anchor, or the portfolio archive.
 */

// Service title (as used in data/services.ts and data/case-studies.ts)
// -> anchor id on the Services page (set as id on each service article).
export const serviceIdByTitle: Record<string, string> = {
  "SEO Strategy & Planning": "seo-strategy",
  "AI & LLM Content Optimization": "ai-content-optimization",
  "Content Marketing & Strategy": "content-marketing",
  "SEO Content Writing": "seo-writing",
  "On-Page SEO Optimization": "on-page-seo",
  "Content Audit & Refresh": "content-audit",
  "Organic Growth Strategy": "organic-growth",
  "Content Account Management": "account-management",
};

// Service id -> the single strongest proof case study for that service.
// Services with no directly related case study are intentionally absent:
// their pages link to /portfolio instead, rather than to a forced match.
export const proofByServiceId: Record<string, { href: string; label: string }> = {
  "seo-strategy": {
    href: "/case-studies/think-branded-media",
    label: "Think Branded Media: 2.24M impressions in 12 months",
  },
  "ai-content-optimization": {
    href: "/case-studies/shear-comfort",
    label: "ShearComfort: 256,629 users in 2025",
  },
  "content-marketing": {
    href: "/case-studies/think-branded-media",
    label: "Think Branded Media: 2.24M impressions in 12 months",
  },
  "seo-writing": {
    href: "/case-studies/shear-comfort",
    label: "ShearComfort: 256,629 users in 2025",
  },
  "on-page-seo": {
    href: "/case-studies/shear-comfort",
    label: "ShearComfort: 256,629 users in 2025",
  },
  "organic-growth": {
    href: "/case-studies/xjump",
    label: "XJump: 105K impressions in 6 months",
  },
};
