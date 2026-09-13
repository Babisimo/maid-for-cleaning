# HANDOFF

Maid for Cleaning LLC marketing site. Next.js 15 (App Router, Turbopack) + Tailwind v4, single page.

## START HERE

- Run: `npm run dev` then open http://localhost:3000
- Page: `src/app/page.tsx`. Sections live in `src/app/components/`.
- Styling: all colors are tokens in `src/app/globals.css` (light on `:root`, dark on `[data-theme="dark"]`). Use token classes (`bg-surface`, `text-ink`, `text-brand`, `bg-brand-fill`), never raw hex or `bg-white`.
- Before shipping: `npx tsc --noEmit` and `npx eslint src`.

## Open items (not done)

1. **Leads go nowhere yet.** `src/app/api/lead/route.ts` validates and returns 200 but only `console.info`s the lead. Wire email (Resend/SendGrid) or a CRM at the `TODO`.
2. **Placeholders kept on purpose** (owner's call, 2026-09-12): phone `(555) 123-4567`, "Your City", "Map placeholder", logo standing in for a hero photo, "450+ cleans this year, 4.9/5 rating". Replace with real info before launch.
3. Hero wipe plays on every page load. Optional: once per session via `sessionStorage`.
4. Critique snapshot left open because item 2 is unresolved (`.impeccable/`, gitignored, local only).

## 2026-09-12: Front-end refresh

### Why
Critique scored the old page 15/32. Blocking bugs: prices, FAQ questions, and contact headings rendered white on white (unlayered custom CSS overrode Tailwind); the quote form only did `console.log` + `alert()`; no focus rings; unnamed menu button; offer contradicted policies (price tiers vs "$100/hr" vs mandatory first deep clean).

### Decisions (owner-approved)
- **Scope:** fix + visual upgrade, keep brand blue, logo, section anchors.
- **Voice:** warm local pro. No slang, emoji, or em dashes.
- **Pricing:** quote-only. Removed all prices; section now shows quote factors + booking steps taken from the policies (deposit, 24h rule, first visit is a deep clean).
- **Theme:** light default, dark mode follows device, sun/moon toggle saves choice in `localStorage` (`theme`). Inline script in `layout.tsx` sets `data-theme` before paint (no flash).
- **Length:** condensed layout. Desktop 7,214px to 5,472px, mobile 11,454px to 7,452px.

### Design system
- Palette from the logo: ink `#151B2D`, brand `#0061AF`, deep `#073B69`, rinse `#EEF4FA`, line `#D8E2EC`, paper `#FBFCFE`. Dark set uses the logo navy with `--brand: #6cb2ee` for text/icons; `--brand-fill` stays `#0061AF` for buttons.
- Type: Red Hat Display (headings, buttons) + Red Hat Text (body) via `next/font`.
- Shape: controls 10px, panels 20px, tags full pill.
- Logos: `public/logo-mark.png` (trimmed, transparent, navy wordmark) and `public/logo-mark-dark.png` (white wordmark for dark mode and footer). Original `logo.jpeg` untouched.

### Structure
Header (sticky, active-section underline, theme toggle) > Hero (+ trust strip) > Services (rows) > Pricing (quote factors + booking steps) > Short-term rentals > Reviews (swipe row on phones) > Questions and policies (tabs: FAQ / Policies / What's included) > Request a quote > Footer. Mobile gets a fixed Call / Get a quote bar.

- `#faq` and `#policies` anchors both point at the tabbed section; `InfoTabs` selects the matching tab on hash or link click and tells the header which link to underline (`info-tab` event).
- Removed: `CTA.tsx` (duplicate contact band), `ServiceCard.tsx` (replaced by `ServiceRow.tsx`).
- Added: `InfoTabs`, `ThemeToggle`, `MobileActionBar`, `ServiceRow`, `api/lead/route.ts`.

### Motion (reviewed against Emil Kowalski's design-engineering rules)
- Hero "squeegee wipe": fogged glass wiped clean once on load, 950ms after 250ms delay. Reduced motion: fog fades out over 400ms, no blade.
- Buttons scale to 0.97 on press (160ms). Hover styles gated to mouse devices.
- Accordion 220ms height + content fade. Nav underline 200ms. Mobile menu 200ms enter.
- Tab panel fades on click only; keyboard switching is instant.
- Quote success message fades in and rises 4px (250ms); focus moves to its heading.
- Theme switch is instant (transitions disabled for that frame). No scroll reveals by design.

### Verified
Typecheck, lint, impeccable detector clean. Playwright at 390 / 768 / 1024 / 1280 / 1440 in light and dark: no horizontal overflow, no console errors, toggle persists across reload, hash and nav links pick the right tab, arrow keys move tabs, form errors and success state render.

### References
- Figma before/after captures: https://www.figma.com/design/mGPdx0xEF017yFKCYMLEw7 (before `1-2`, after `2-2`; after predates dark mode and condensing). Starter plan: about 20 MCP calls/month, each capture uses 2.
