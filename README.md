# LuxeBath — Prelander

Next.js 14 (App Router) + Tailwind CSS. Self-contained, no backend.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design
- Strict section alternation: navy (#0D1B2A) ↔ cream (#F5F0E8)
- Gold accent: #C9A84C
- Playfair Display (headings) + DM Sans (body) via Google Fonts
- Fixed navbar, sharp-rectangle CTAs, IntersectionObserver fade-ins

## Structure
- `app/page.tsx` — single-page composition
- `app/layout.tsx` — fonts, navbar, metadata
- `components/` — Navbar, Hero, Benefits, HowItWorks, Testimonials, TrustSection, EstimateForm, Footer, Reveal

The 5-step estimate form logs to `console.log` and shows a thank-you screen on submit.
