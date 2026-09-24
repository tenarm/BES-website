# Video Asset: Hero — Live Command Center

**Section:** Hero (top of page)
**Replaces:** CSS-animated KPI card with counters and chart
**Duration:** 12–15 seconds, looping
**Dimensions:** 1280×720 (16:9), transparent/dark background preferred

## What to Capture

A screen recording of the actual TenArm BES dashboard showing:

1. **Opening shot** — Dashboard loads with the greeting ("Good morning, [Name]") and "Live Execution" badge
2. **KPI tiles animate in** — Revenue MTD, Open Orders, Gross Margin, Cash in Bank — numbers populate
3. **Revenue chart** — The 30-day revenue line chart draws smoothly
4. **Activity feed** — 3-4 real-time activity items appear one by one:
   - "Order confirmed · Rajesh Fab · ₹8.5L"
   - "Goods received · Mumbai · 490 MT"
   - "Invoice paid · Skyline · ₹42.5L"
5. **Loop point** — Subtle fade to restart

## Visual Direction

- **Clean, sharp UI** — Show the actual product, not a mockup
- **Dark browser chrome** with traffic lights (macOS style)
- **No cursor visible** — Pre-script the interaction so it feels like a live system
- **Smooth, 60fps** — No jank, no loading spinners
- Use demo/seed data with realistic Indian business names and ₹ amounts

## Usage Notes

- Embed as `<video autoplay muted loop playsinline>` inside the `.hero-visual` container
- Add `poster` attribute with a static frame for instant display before video loads
- Fallback: keep the current CSS card for browsers that don't support video
