# Nova Ink — Fine Line Tattoo Studio

Premium tattoo artist landing page built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Language | TypeScript |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts via `next/font`) |

## Project Structure

```
nova-ink/
├── app/
│   ├── globals.css          # Tailwind base + global styles
│   ├── layout.tsx           # Root layout (fonts, metadata, viewport)
│   └── page.tsx             # Page composition — imports all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with scroll shrink + mobile menu
│   │   └── Footer.tsx       # 4-column footer
│   ├── sections/
│   │   ├── HeroSection.tsx       # Ink-bleed headline animation
│   │   ├── MarqueeBand.tsx       # Gold scrolling ticker
│   │   ├── AboutSection.tsx      # Artist bio + stat chip
│   │   ├── GallerySection.tsx    # Asymmetric 12-col grid
│   │   ├── ServicesSection.tsx   # 3-card services with border animation
│   │   ├── ProcessSection.tsx    # 4-step connected timeline
│   │   ├── TestimonialsSection.tsx
│   │   ├── BookingSection.tsx    # CTA with ember radial glow
│   │   └── FaqSection.tsx        # Animated accordion
│   └── ui/
│       ├── Buttons.tsx      # PrimaryButton + GhostButton
│       ├── Cursor.tsx       # Custom gold cursor (client)
│       ├── Eyebrow.tsx      # Section label component
│       ├── Reveal.tsx       # Scroll-reveal wrapper
│       └── TattooArt.tsx    # Decorative SVG illustrations
├── lib/
│   ├── data.ts              # All site copy and structured data
│   ├── motion.ts            # Centralised Framer Motion variants
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customisation

All site copy, links, and structured data lives in **`lib/data.ts`** — edit that file to update:
- Artist name, bio, location, email
- Services and pricing
- Testimonials
- FAQ items
- Gallery piece titles and tags
- Navigation links

Design tokens (colours, fonts) are set in **`tailwind.config.ts`**.

Animation variants are centralised in **`lib/motion.ts`** — adjust easing, duration, and delay there.

## Design System

| Token | Value |
|---|---|
| `bone` | `#F0ECE4` |
| `void` | `#0A0806` |
| `gold` | `#C9A96E` |
| `ember` | `#8B3A2A` |
| `ash` | `#9B9590` |
| Display font | Cormorant Garamond 300/400/500 |
| Body font | DM Sans 300/400/500 |
