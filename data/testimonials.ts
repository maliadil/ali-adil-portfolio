export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "BlissDrive, USA",
    content:
      "Ali consistently delivers SEO-optimized content that actually ranks. His articles for our portfolio of brands have hit the top positions on Google repeatedly. He understands both the technical SEO side and the art of writing compelling content that converts.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "CEO",
    company: "Digital Agency Client",
    content:
      "What separates Ali from other content writers is his strategic mindset. He doesn't just write — he thinks about search intent, competitive gaps, and how to position content to win. The ROI on his work has been exceptional.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Chen",
    role: "Head of Growth",
    company: "SaaS Brand",
    content:
      "Ali managed our entire content operation across multiple brands. His ability to maintain quality while scaling output across different industries is impressive. He's become an indispensable part of our organic growth strategy.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Torres",
    role: "Founder",
    company: "Home Services Company",
    content:
      "Our local SEO results improved dramatically after Ali revamped our content. We went from page 3 to page 1 for our most valuable keywords within months. He truly understands what Google wants to rank.",
    rating: 5,
  },
  {
    id: "5",
    name: "Emma Watson",
    role: "Content Manager",
    company: "E-commerce Brand",
    content:
      "Ali's understanding of AI search optimization puts him ahead of most SEO professionals I've worked with. He thinks about visibility across ChatGPT, Perplexity, and Google's AI Overviews — not just traditional search.",
    rating: 5,
  },
];
