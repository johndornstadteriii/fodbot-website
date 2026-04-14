# FODBOT Website

Production-quality marketing website for **FODBOT Airfield Debris Solutions** — an autonomous FOD detection and removal system for GA and non-hub airports.

Built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

### Prerequisites
- Node.js 18.17+ (or 20+)
- npm 9+

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage
│   ├── product/                # How It Works page
│   ├── solutions/              # By Airport Type page
│   ├── pilot/                  # Pilot Program page
│   ├── pricing/                # Pricing & Deployment page
│   ├── resources/              # Case Studies, Downloads, FAQ
│   ├── contact/                # Contact / Request a Pilot form
│   ├── about/                  # About FODBOT
│   ├── safety/                 # Safety & Compliance
│   ├── privacy/                # Privacy Policy placeholder
│   └── terms/                  # Terms of Use placeholder
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # Full footer with sitemap
│   ├── home/                   # Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AudienceSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── PilotSection.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── ROICalculator.tsx
│   │   ├── SafetyTrustSection.tsx
│   │   └── FinalCTA.tsx
│   └── ui/                     # Shared UI primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── SectionLabel.tsx
│       └── Accordion.tsx
│
├── data/
│   └── content.ts              # ← EDIT THIS FILE for all content
│
└── lib/
    └── utils.ts                # Utility functions
```

---

## How to Edit Content

**All site copy, stats, pricing, FAQs, features, and configuration live in one file:**

```
src/data/content.ts
```

### Key editable sections:

| Section | Variable | What it controls |
|---|---|---|
| Site config | `siteConfig` | URLs, email, phone, YouTube video ID |
| Hero | `hero` | Homepage headline, subheadline, CTAs |
| Stats | `stats` | The 5 stat strip numbers and labels |
| Problems | `problems` | Problem section cards |
| Comparison | `comparisonRows` | Feature comparison table rows |
| Features | `features` | Feature card grid |
| Audience | `audiences` | Persona cards (3 buyer types) |
| Pilot | `pilotProgram` | All pilot page content + FAQ |
| Pricing | `pricingPlans` | The 3 pricing models |
| ROI Calculator | `roiDefaults` | Default slider values |
| Segments | `segments` | Solutions page airport type sections |
| Workflow | `operationalSteps` | Product page step-by-step sequence |
| FAQ | `faqs` | Resources page FAQ accordion |
| Case Studies | `caseStudies` | Resource cards |
| Downloads | `downloadables` | Download resource cards |
| Contact Form | `contactFormConfig` | Form fields and labels |
| Nav | `navLinks` | Navigation links |
| Footer | `footerLinks` | Footer column links |

---

## Adding a YouTube Video

1. Open `src/data/content.ts`
2. Find `siteConfig.youtubeVideoId`
3. Paste your YouTube video ID (the part after `v=` in the URL)

```ts
youtubeVideoId: "dQw4w9WgXcQ",  // ← just the ID, not the full URL
```

The video section on the homepage will immediately activate with a thumbnail, play button, and embedded player.

---

## Adding the Product Hero Image

1. Place your render at `public/images/fodbot-hero.png` (or `.jpg`, `.webp`)
2. In `src/components/home/HeroSection.tsx`, find the comment:
   ```tsx
   {/* Replace the above with: */}
   {/* <Image src="/images/fodbot-hero.png" ... /> */}
   ```
3. Uncomment the `<Image>` line and remove the placeholder div above it

---

## Setting Up the Contact Form

The contact form currently logs to console (client-side only). To make it functional:

**Option A — Formspree (simplest):**
```bash
npm install @formspree/react
```
Replace `handleSubmit` in `src/app/contact/ContactPageClient.tsx` with a Formspree hook.

**Option B — API Route:**
Create `src/app/api/contact/route.ts` and point the form `action` there. Use Resend or Nodemailer for email delivery.

**Option C — Netlify / Vercel Forms:**
Add `data-netlify="true"` to the form element if deploying on Netlify.

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Upload the .next/ output or connect the GitHub repo
```

### Self-hosted
```bash
npm run build
npm start  # runs on port 3000
```

---

## Brand Colors Reference

| Name | Hex |
|---|---|
| Gold | `#FFB000` |
| Charcoal | `#3D4247` |
| Silver | `#B2B8BF` |
| Black | `#000000` |
| Dark BG | `#0A0B0D` |
| Dark Card | `#111318` |
| Dark Border | `#1E2128` |

---

## Placeholder Assets

| Asset | Location | Notes |
|---|---|---|
| Product hero render | `public/images/fodbot-hero.png` | Replaces placeholder in HeroSection |
| OG image | `public/images/og-image.jpg` | 1200×630px for social sharing |
| Favicon | `public/favicon.ico` | Replace with FODBOT logo |
| Partner logos | `public/images/partners/` | Add when partnerships are established |
| Case study PDFs | `public/downloads/` | Add when available |

---

## SEO

Meta titles and descriptions are set per-page using Next.js `metadata` exports. Edit in each `page.tsx` file or in `src/app/layout.tsx` for site-wide defaults.

Pages are structured for the following target keywords:
- airport FOD removal
- autonomous runway debris removal
- FOD robot
- airport debris detection and removal
- GA airport safety technology
- runway inspection automation

---

## Technology Stack

| Package | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework / routing / SSR |
| React | 18.3 | UI rendering |
| TypeScript | 5.5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.3 | Animations |
| Lucide React | 0.400 | Icons |
| Radix UI | 1.x | Accessible primitives |

---

## Questions?

This codebase was built to be edited by non-engineers as much as possible. The `content.ts` file is the primary editing surface. If you need to make structural changes or have questions about the implementation, the file-level comments and README should provide sufficient context.
