# Video Asset: AI — Ambient Intelligence in Action

**Section:** AI ("It doesn't just record your business. It watches your back.")
**Replaces:** CSS neural network with floating insight cards
**Duration:** 20–25 seconds, looping
**Dimensions:** 640×480 (4:3), dark background
**Type:** Screen recording + motion overlay

## What to Show

A recording of the TenArm AI insights appearing naturally during a work session:

### Scene 1: Working Context (0s–5s)
- User is on the Sales Orders screen, reviewing an order
- Normal workflow — nothing special happening
- The top-right corner shows a subtle "AI" indicator (amber dot)

### Scene 2: First Insight Appears (5s–10s)
- A slim notification slides in from the right edge:
  - **Icon:** Warning triangle
  - **Title:** "Margin dip detected"
  - **Detail:** "Freight cost to Hyderabad up 1.4% — partial load dispatches"
  - **Action:** "View analysis →"
- The notification has a subtle gold border (premium feel)
- It stays visible for 3 seconds

### Scene 3: Second Insight (10s–15s)
- User navigates to Inventory view
- Another insight slides in:
  - **Icon:** Package/box
  - **Title:** "Reorder recommended"
  - **Detail:** "TMT 12mm · Pune warehouse · 4 days of stock remaining"
  - **Action:** "Create PO →"
- Shows how AI surfaces context-aware information

### Scene 4: Third Insight — Overdue PO (15s–20s)
- On the Procurement view, an inline highlight appears on a PO row:
  - **Badge:** "3 days overdue"
  - **Tooltip:** "Expected delivery was Sep 20. Supplier: JSW Steel"
- Shows how AI integrates into existing views rather than being a separate screen

### Scene 5: Resolution (20s–25s)
- Quick flash of the "Potential savings: ₹3.2L/mo" summary card
- Fades to the AI core icon with "Ambient · Built-in · Zero Egress" tagline

## Visual Direction

- **Real product UI** — Show insights appearing within the actual TenArm interface
- **Subtle, not flashy** — The AI should feel helpful, not intrusive
- **Gold accent** (#a07a3f) for AI-related elements
- **Smooth slide-in animations** — 300ms ease-out
- **No sci-fi neural network imagery** — This is practical business AI, not a movie

## Usage Notes

- Embed as `<video>` in the `.ai-visual` container
- Keep the floating insight cards as a static fallback
- The "Ask TenArm" interactive demo below the video should remain as HTML (it's interactive)
