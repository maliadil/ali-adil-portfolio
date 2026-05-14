# Muhammad Ali Adil — Personal Portfolio Website

A premium, production-ready personal portfolio website for **Muhammad Ali Adil**, SEO & AI Content Strategist.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui** design principles.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide Icons | Icon library |
| Sonner | Toast notifications |
| react-countup | Animated counters |
| react-intersection-observer | Scroll-triggered animations |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ali-adil-portfolio.git
cd ali-adil-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
ali-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with fonts & metadata
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles & CSS variables
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── about/page.tsx        # About page
│   ├── portfolio/page.tsx    # Portfolio page
│   ├── services/page.tsx     # Services page
│   └── contact/page.tsx      # Contact page
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Footer.tsx            # Site footer
│   ├── home/                 # Home page sections
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── BrandMarquee.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   ├── about/AboutPage.tsx
│   ├── portfolio/PortfolioPage.tsx
│   ├── services/ServicesPage.tsx
│   └── contact/ContactPage.tsx
├── data/
│   ├── brands.ts             # 35+ brand data
│   ├── services.ts           # Services data
│   ├── skills.ts             # Skills & competencies
│   └── testimonials.ts       # Client testimonials
├── lib/
│   └── utils.ts              # Utility functions
└── public/
    └── robots.txt
```

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard → **Settings** → **Domains**
2. Add `maliadil.com` (or your domain)
3. Update DNS records as instructed by Vercel

### Environment Variables

No environment variables required for the base version.

If you add a contact form backend (e.g., Resend, Formspree), add:
```
RESEND_API_KEY=your_key_here
```

---

## Customization

### Update Personal Info

Edit these files to customize:

- `app/layout.tsx` — SEO metadata
- `data/brands.ts` — Add/remove brands
- `data/services.ts` — Modify services
- `data/skills.ts` — Update skill levels
- `data/testimonials.ts` — Add real testimonials
- `components/contact/ContactPage.tsx` — Contact details
- `components/Footer.tsx` — Footer links

### Add Your Photo

Place your photo at `public/avatar.jpg` and update `components/about/AboutPage.tsx` to display it.

### Connect Contact Form

Replace the simulated submission in `ContactPage.tsx` with a real API call using:
- [Resend](https://resend.com) — Email API
- [Formspree](https://formspree.io) — Form backend
- [EmailJS](https://emailjs.com) — Client-side email

---

## SEO Features

- Semantic HTML structure
- Open Graph & Twitter Card meta tags
- Auto-generated XML sitemap
- robots.txt
- Structured page metadata
- Mobile-first responsive design
- Fast loading (optimized fonts, no heavy images)

---

## License

© 2024 Muhammad Ali Adil. All rights reserved.
