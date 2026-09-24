# Video Asset: Paradigm — Real-Time Data Flow

**Section:** The TenArm Difference ("See what changes when your system actually works")
**Replaces:** CSS live activity ledger with animated rows
**Duration:** 12–15 seconds, looping
**Dimensions:** 560×400 (landscape card), dark background
**Type:** Motion graphic or screen recording

## What to Show

A live activity feed showing business events flowing through the system in real-time:

### Animation Flow

1. **Empty ledger appears** (0s–2s)
   - Dark card with "Live activity" header and "real-time" badge
   - Empty state with a subtle shimmer

2. **Events stream in** (2s–10s)
   - Activity rows slide in one by one (every 1.5 seconds):
     1. `09:14` · **Sales** · "Quote QT-421 → Confirmed order SO-421" · `₹8.5L` · ✓
     2. `09:14` · **Inventory** · "Stock reserved · Mumbai · 490 MT" · auto · ✓
     3. `09:15` · **Finance** · "AR entry created · Rajesh Fab" · `₹8.5L` · ✓
     4. `09:16` · **Logistics** · "Dispatch scheduled · TRK-0088" · auto · ✓
     5. `09:18` · **Finance** · "Payment received · Skyline" · `₹42.5L` · ✓
   - Each row slides in from the right with a subtle green flash
   - Show how ONE action (confirming an order) cascades automatically through 4 modules

3. **Steady state** (10s–15s)
   - All rows visible, new ones keep appearing
   - Older rows fade/scroll up
   - A small counter shows "47 events today"

## Visual Direction

- **Dark background** (#001233 navy) — this section is on dark
- **Monospace timestamps** — JetBrains Mono
- **Color-coded module tags** — Sales (blue), Inventory (green), Finance (gold), Logistics (purple)
- **Green checkmarks** for completed events
- **"auto" badge** for events triggered automatically by the system (not by a human)
- **No visible cursor** — Events appear by themselves to emphasize automation

## Key Message

The viewer should think: "One person confirmed a quote, and the system automatically reserved stock, created an accounting entry, and scheduled a dispatch — all in 2 minutes."

## Usage Notes

- Embed as `<video>` in the `.paradigm-visual` container
- Replace the `.ledger` CSS component
- Keep the Quote → Order → Reserve → Ship → Invoice → Books Balanced flow path as HTML (it's static and explanatory)
