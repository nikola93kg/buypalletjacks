# Design Spec: Refactoring, SEO & AIO Optimization
**Date:** 2026-05-03
**Branch:** `refactor/seo-aio-optimization`
**Project:** buypalletjacks (Next.js 16, App Router)

---

## Problem Statement

The codebase has accumulated technical debt: ESLint errors, unused imports, inline styles scattered across ~12 components, repeated code patterns, and SEO/AIO structured data gaps. The goal is to fix all errors, refactor to a consistent CSS module pattern, and optimize for both traditional SEO and AI-powered search engines.

---

## Approach

Fazno izvršavanje u 3 odvojena commit-a/PR-a na grani `refactor/seo-aio-optimization`. Svaka faza je samostalno testabilna i ne blokira sledeću.

Reference implementation: `components/about/` — zero `style={{}}`, all styles in `.module.css`, types and data co-located, pages contain only metadata + imports + bare JSX return.

---

## Faza 1: Bugfix & Cleanup

### Runtime / ESLint Errors

**Error (1):**
- `components/locations/LocationsPanel.tsx:30` — `setState` pozvan direktno unutar `useEffect`. Refaktorisati koristeći `useMemo` ili `useEffect` sa pravim dependency array-om koji ne triguje kaskadne rendere.

**Warnings — Unused imports (7):**
| File | Unused symbol |
|------|--------------|
| `app/layout.tsx` | `MobileStickyCTA` |
| `components/home/Hero.tsx` | `locationCount` |
| `components/layout/Footer.tsx` | `MessageSquare` |
| `components/layout/Header.tsx` | `Clock` |
| `components/locations/InteractiveLocationsHero.tsx` | `MapPin`, `Search` |

Action: Ukloniti sve unused imports i varijable.

### Font Migration

`app/layout.tsx` trenutno loada Google Fonts via `<link>` tag u `<head>`. Migrirati na `next/font/google` (Outfit + Inter):
- Eliminiše ESLint warning `@next/next/no-page-custom-font`
- Poboljšava Core Web Vitals (nema layout shift, font se preloada)
- Ukloniti `<link rel="preconnect">` i `<link href="fonts.googleapis.com">` iz `<head>`

### File Cleanup

| Akcija | Fajl |
|--------|------|
| Obrisati | `app/about/page.module.css` (orphaned, superseded by `components/about/about.module.css`) |
| Obrisati | `public/note.txt` (stray public-facing file) |
| Dodati u `.gitignore` | `ui-ux-pro-max/` folder |

---

## Faza 2: Refactoring & Reorganizacija

### Princip

Sve komponente treba da zadovolje:
1. **Zero inline styles** — nema `style={{}}`, nema Tailwind arbitrary values `text-[#0F172A]`
2. **CSS Module** — svaka komponenta ima `ComponentName.module.css` u istom folderu
3. **DRY** — nema ponavljanja koda; shared utilities u `lib/`, shared UI u `components/shared/`
4. **Flat functions** — nema funkcije unutar funkcije; extractovati kao named helpers
5. **Single responsibility** — svaka komponenta radi jednu stvar

### CSS Module Migracija

**`components/home/`** — svaka treba sopstveni `.module.css`:
- `Hero.tsx` → `Hero.module.css`
- `FinalCTA.tsx` → `FinalCTA.module.css`
- `Benefits.tsx` → `Benefits.module.css`
- `HowItWorks.tsx` → `HowItWorks.module.css`
- `PalletJackModels.tsx` → `PalletJackModels.module.css`
- `GalleryPreview.tsx` → `GalleryPreview.module.css`
- `Faq.tsx` → `Faq.module.css`
- `Warranty.tsx` → `Warranty.module.css`
- `DeliveryBulk.tsx` → `DeliveryBulk.module.css`

**`components/layout/`:**
- `Header.tsx` → `Header.module.css`
- `Footer.tsx` → `Footer.module.css`
- `MobileStickyCTA.tsx` → `MobileStickyCTA.module.css`
- `LocationsFooterSection.tsx` → `LocationsFooterSection.module.css`

**Pages:**
- `app/contact/page.tsx` → extraktovati `ContactHeader`, `ContactInfo`, `ContactFormWrapper`; form state ostaje u `ContactForm.tsx`
- `app/locations/page.tsx` → extraktovati sub-komponente u `components/locations/`

### DRY & Shared Utilities

- `fontFamily: "'Outfit', sans-serif"` se ponavlja kao inline style u 10+ komponenti → centralizovati via CSS variable u `globals.css` ili `next/font` referenca
- Shared UI patterns (npr. section header + subtitle kombinacija) → `components/shared/SectionHeader.tsx` ako se pojavljuje 3+ puta
- Nested functions → extractovati kao named helper functions van komponente

### Folder Struktura

```
components/
  shared/          ← novi folder za zajedničke UI komponente
  home/
  layout/
  about/           ← referentna implementacija
  contact/
  locations/
lib/
  seo.ts
  locations.ts
  utils.ts
```

### Globals & Utils Cleanup

- `app/globals.css` — ukloniti utility klase i base styles koji se više ne koriste nakon CSS module migracije; zadržati samo CSS variables i reset
- `lib/utils.ts` — ukloniti dead exports

---

## Faza 3: SEO & AIO Optimizacija

### Core Web Vitals (iz Faze 1 preliveno)

- `next/font` migracija direktno utiče na LCP i CLS score

### Image Alt Text Audit

- Proći sve `<Image>` i `<img>` tagove — svaki mora imati opisni `alt` tekst
- Alt tekst treba da bude deskriptivan i uključuje keywords prirodno (ne keyword stuffing)

### Open Graph Image

- `buildMetadata` referira `/og-image.jpg` — verifikovati da fajl postoji u `public/`
- Ako ne postoji, dodati placeholder ili generisati

### Structured Data — JSON-LD Proširenje

Trenutno: `Organization` + `LocalBusiness` u `app/layout.tsx`

Dodati per-page:

| Schema tip | Gde | Izvor podataka |
|-----------|-----|---------------|
| `FAQPage` | `app/page.tsx` (homepage) | `Faq.tsx` Q&A sadržaj |
| `Product` | `app/page.tsx` | `PalletJackModels.tsx` modeli |
| `HowTo` | `app/page.tsx` | `HowItWorks.tsx` koraci |
| `BreadcrumbList` | sve stranice | URL struktura |
| `ContactPage` | `app/contact/page.tsx` | kontakt info |

Fix: `LocalBusiness.contactPoint.telephone` je placeholder `+1-800-BUY-JACK` — zameniti realnim brojem.

### AIO (AI Search Optimization)

AI pretraživači (SearchGPT, Perplexity, Google AI Overviews) čitaju semantički HTML i strukturirane podatke.

**Semantički HTML:**
- Verifikovati pravilnu `h1/h2/h3` hijerarhiju na svakoj stranici (jedan `h1` per page)
- Koristiti `<section>`, `<article>`, `<nav>`, `<aside>` semantički
- Bitni sadržaj mora biti u tekstu, ne u slikama

**Robots & Sitemap:**
- `robots.ts` — osigurati da AI crawleri (`GPTBot`, `PerplexityBot`, `anthropic-ai`) nisu blokirani
- `sitemap.ts` — verifikovati da su sve stranice uključene sa pravilnim `priority` i `changeFrequency`

**Meta descriptions:**
- Svaka stranica mora imati unique, descriptive meta description (max 160 chars)
- Verifikovati kroz sve `buildMetadata` pozive

---

## Success Criteria

- [ ] `npx eslint .` → 0 errors, 0 warnings
- [ ] `npm run build` → prolazi bez grešaka
- [ ] Nema `style={{}}` ni `text-[#hex]` van `components/about/` (referentna impl. može ostati)
- [ ] Svaka komponenta ima sopstveni `.module.css`
- [ ] JSON-LD validacija prolazi na schema.org validator
- [ ] `robots.txt` dozvoljava AI crawlere
- [ ] `sitemap.xml` sadrži sve stranice

---

## Out of Scope

- Customer requests (logo boja, slike, copywriting) — blokirano čeka customer materijal
- Responsive promene — već srednjeno, ne dirajmo
- Nova funkcionalnost

---

## Reference

- `components/about/` — referentna implementacija
- `lib/seo.ts` — SEO utilities
- Next.js docs: [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), [Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
