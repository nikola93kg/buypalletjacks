# Project TODO

---

## Customer Requests (awaiting / blocked)

- [ ] Change logo color from yellow to blue (`Header.tsx`, `Footer.tsx`)
- [ ] Brighten overall background (`--color-bg` token in `globals.css`, audit all `#F8FAFC` uses)
- [ ] Remove map (decide: remove `UsaMap.tsx` entirely or keep static fallback in Locations page)
- [ ] Replace all copy — customer will supply new text
- [ ] Replace Altra and Crown section images (`PalletJackModels.tsx`)
- [ ] Replace warranty photo with pallet jack + 2-month warranty sign (`Warranty.tsx`)

---

## Refactoring — Pages

### `app/contact/page.tsx`
- [ ] Extract all inline `style={{}}` and hardcoded Tailwind color tokens into a `components/contact/contact.module.css`
- [ ] Split into sub-components: `ContactHeader`, `ContactInfo`, `ContactFormWrapper`
- [ ] Move form logic out of page — form state belongs in `ContactForm.tsx` only

### `app/locations/page.tsx`
- [ ] Audit for inline styles and hardcoded colours
- [ ] Extract into sub-components under `components/locations/` (same pattern as `components/about/`)

### `app/page.tsx` (Homepage)
- [ ] Page is likely just a list of component imports — verify it stays clean, no logic leaking in

---

## Refactoring — Home Components (`components/home/`)

Each file below still uses inline `style={{}}` and Tailwind arbitrary values like `text-[#0F172A]`, `bg-[#1D4ED8]`. Refactor each to a CSS module using the `WhyRefurbished.module.css` + `about.module.css` pattern.

- [ ] **`Hero.tsx`** — largest file, most inline styles; extract to `Hero.module.css`
- [ ] **`FinalCTA.tsx`** — heavy inline styles (radial gradients, font-family), extract to `FinalCTA.module.css`
- [ ] **`Benefits.tsx`** — audit and extract to `Benefits.module.css`
- [ ] **`HowItWorks.tsx`** — audit and extract to `HowItWorks.module.css`
- [ ] **`PalletJackModels.tsx`** — audit and extract to `PalletJackModels.module.css`
- [ ] **`GalleryPreview.tsx`** — inline `style={{ fontFamily }}` and arbitrary classes; extract to `GalleryPreview.module.css`
- [ ] **`Faq.tsx`** — audit and extract to `Faq.module.css`
- [ ] **`Warranty.tsx`** — audit and extract to `Warranty.module.css`
- [ ] **`DeliveryBulk.tsx`** — audit and extract to `DeliveryBulk.module.css`

---

## Refactoring — Layout Components (`components/layout/`)

- [ ] **`LocationsFooterSection.tsx`** — 7 occurrences of `style={{ fontFamily: "'Outfit', sans-serif" }}`; move to CSS module
- [ ] **`Footer.tsx`** — 2 inline `fontFamily` styles; move to CSS module
- [ ] **`MobileStickyCTA.tsx`** — 2 inline style blocks; move to CSS module
- [ ] **`Header.tsx`** — 1 inline `mixBlendMode` style; move to CSS module

---

## Cleanup

- [ ] **Delete `app/about/page.module.css`** — superseded by `components/about/about.module.css` (file is now orphaned and unused)
- [ ] **Audit `globals.css`** — remove any utility classes or base styles that are no longer used by any component after CSS module migration
- [ ] **Audit `app/globals.css` font-family declarations** — `fontFamily: "'Outfit', sans-serif"` is repeated as inline styles in ~10+ components; should be controlled entirely via CSS module classes or a single CSS custom property
- [ ] **Confirm `lib/utils.ts`** — check for dead exports
- [ ] **Remove `public/note.txt`** — public-facing stray file, should not be in production

---

## Standards Reference (apply consistently across all refactors)

The `components/about/` folder is the reference implementation:
- All styles in a `.module.css` file — zero `style={{}}`, zero `bg-[#hex]` Tailwind tokens
- Types and data co-located inside the component file that owns them
- Page files contain only: metadata export + component imports + bare JSX return
- Sub-components (card renderers) live in the same file as their parent section component
- CSS uses explicit named classes — no global selectors except `:hover`, `:first-child` etc.





## new todo:

- obrati paznju na responsive part, hero sekcija da se sredi (trust cards da se centrira lepo)
- navinks da bude fullscreen kad se klikne na burger menu
- stavi zagrade za broj telefona u navigaciji
- dodaj u gitignore folder za ui-ux-pro-max koji je otisao na github repo
- imas branch development pa tamo odradi sve ove stvari, ocisti ceo repo
- na istom branchu odradi code refactoring, ocisti sve nepotrebne fajlove
- reorganizuj kod i iskoristi ove skilove koje si ubacio