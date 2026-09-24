# TenArm BES — Marketing Website (`new-website/`)

A clean, professional, framework-free marketing site for the TenArm Business
Execution System. The brand is **maroon `#a60212`**, used with **restraint,
Netflix-style**: a neutral canvas of near-black + clean warm-grays, with maroon
reserved for CTAs, the brand mark, live/active states, and the solar-system
core — so the color is *flavour*, never a wash. Plus Framer-style motion (spring
reveals, smooth scroll, animated capability pipeline, a live event ledger, an
orbiting **solar-system** diagram, and an interactive TenArm Go phone mockup).

## Concept

> **ERP records what already happened. TenArm BES runs what happens next.**

The site tells one story: a Business Execution System is a *system of action*,
not just a system of record. The copy leads with **business outcomes**, not
internal architecture — the hero is a live "command center" (revenue, orders,
cash, and a plain-English activity feed), and a **Product Tour** shows the real
BES web screens (Dashboard, Sales, Inventory, Finance, CRM) in a browser mockup.
The final act introduces **TenArm Go**, the mobile companion that carries the
same execution into the field (service, attendance + location, HR self-service,
approvals).

> Deliberately kept jargon-free: no `organization_id`, no kernel/RBAC/event-
> sourcing/projection language on the page. Those live in `../website/content.txt`
> and the codebase, not the marketing surface.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page markup (single page, anchored sections) |
| `css/*.css` | Design system split into 12 modular pieces, linked in cascade order (`01-foundation` → `12-decorative`). No build step; the old monolithic `styles.css` was retired. |
| `app.js` | Motion & interactions (no build step, vanilla JS) |

**Stylesheet pieces (loaded in order):** `01-foundation` (tokens, reset, layout, buttons) · `02-nav` · `03-hero` (hero + marquee) · `04-story` (problem, belief, values, paradigm) · `05-platform` (bento + product tour) · `06-catalogue` (orbital + app grid) · `07-tenarm-go` · `08-ai` · `09-social-proof` (how, stats, testimonials, compare, pricing) · `10-cta-footer` · `11-motion-responsive` · `12-decorative`.

**Colour system (applied section by section):**
- **Maroon** — brand focal points *only*: logo, primary CTAs, hero headline accent, the orbital "core".
- **Green** — positive / success / outcomes: trust ticks, live-feed bullets, the "confidence" meter, "Books Balanced" node, the "how it works" journey, the compare table's TenArm column (green ✓ vs muted ✕ on legacy), the "Recommended" pricing tier, won deals.
- **Gold** — premium surfaces: Ambient AI, TenArm Go, testimonials.
- **Navy (accent)** — structural/platform icon tiles: the pillar bento and the 18-app grid (calm "trust" tone instead of more red).
- **Slate** — neutral text/borders and muted negative states; genuine warning tones (red/amber) appear only on the "problem" cards' meters.

The full marketing copy source of truth lives in `../website/content.txt`.

## View it

No build. No install. Just open the file — or serve it for correct font/CDN loads:

```bash
cd new-website
python3 -m http.server 8080
# open http://localhost:8080
```

## Dependencies (all optional / progressive enhancement)

- **Google Fonts** — Bricolage Grotesque (display), Inter (UI), JetBrains Mono
  (technical). Falls back to system sans if offline.
- **Lenis** (CDN) — buttery smooth scroll. If it fails to load, native scroll
  is used. **Every scroll reveal uses `IntersectionObserver`, so no content is
  ever hidden behind a missing script.**
- Respects `prefers-reduced-motion` — all loops/animations disable gracefully.

## Design tokens (`:root` in `styles.css`)

The brand maroon is a full 50→950 scale derived from `#a60212`, but the **canvas
is neutral** — maroon appears only where it should pop:

| Token | Value | Use |
|-------|-------|-----|
| `--brand-600` / `--brand` | `#a60212` | **Primary brand** — CTAs, brand mark, live/active states, solar core |
| `--brand-700` / `--brand-dark` | `#85010f` | Hover / pressed |
| `--brand-bright` | `#d11a2a` | Gradient / sun highlight |
| `--brand-200` | `#f6c3c7` | Hero underline highlight |
| `--ink-900` … `--ink-400` | warm-neutral grays | Headings → muted text (the canvas) |
| `--bg` | `#fdfcfb` | Clean near-neutral light surface |
| `--dk-bg` | `#131110` | Netflix near-black (warm-neutral) dark sections |
| `--green` / `--green-500` | `#13a06b` | **Contrast accent** — charts, positive/up metrics, pricing ticks |
| `--pastel-mint/peach/sky/lilac/blush` | soft tints | Solar-system planets, value-card icons, avatars |
| `--gold` | `#e6b566` | Supporting accent (TenArm Go eyebrow, testimonial stars) |

Maroon is the brand but is used **surgically** (Netflix-style) so the page never
looks "maroonish": neutral warm-grays carry the layout, section-label kickers are
neutral pills with maroon *text* only, ambient glows are near-invisible, and the
solar-system **sun** is the one bold maroon focal point. **Green stays the
deliberate contrast** (growth / positive).

Semantic aliases (`--text`, `--text-body`, `--line`, `--surface`, radii,
shadows, `--spring` easing) keep components off the raw scale so the palette can
be re-tuned in one place.

## Section map

Hero (live command center, green revenue chart) → trust marquee → the tension
(ERP vs spreadsheets vs BES) → **Why we exist** (vision manifesto) → **Principles
& values** (4 iconed cards; growth card is green) → the paradigm shift (live
activity stream) → outcome pillars → **Product Tour** (BES web screens) → the
catalogue (**orbital constellation** — BES core + orbiting app nodes + 18-app
grid) → how it works → **Ambient AI** (zero-egress ambient intelligence) →
**TenArm Go** (mobile companion, phone mockup) → stats → **Testimonials**
(avatars) → why-we-stand-out comparison → **Pricing** (2 tiers) → CTA → footer.

> **Sequence note:** page order matches the nav — Why → Platform → Apps → **AI →
> TenArm Go** → Pricing. AI (a live capability) leads; TenArm Go (the mobile
> companion) follows.
