# Video Asset: TenArm Go — Mobile Companion

**Section:** TenArm Go ("Your team doesn't stop at a desk.")
**Replaces:** CSS phone mockup with 4 static screens
**Duration:** 20–25 seconds, looping
**Dimensions:** 390×844 (iPhone 14/15 resolution), with phone frame overlay
**Type:** Screen recording of mobile app (or prototype)

## What to Capture

A screen recording cycling through 4 key mobile workflows:

### Scene 1: Field Service Dispatch (0s–6s)
- App opens to "Field · Today" view
- Map shows 3 service pins with a route line
- Active ticket card:
  - "Ticket SRV-2048 · HVAC — no cooling"
  - "Unit 4B, Pioneer Works"
  - Status: "En route" (amber badge)
- User taps "Start job" — status changes to "In progress" (green)
- Satisfying micro-animation on the status change

### Scene 2: Geo-Verified Attendance (6s–12s)
- Swipe to Attendance screen
- Large "Clock in" button with a pulsing ring
- User taps it — ring fills, location captured
- "Mumbai Warehouse · verified" confirmation appears
- Location coordinates display: "19.076, 72.877"
- Team status: "On site: 14 · En route: 3 · Off shift: 6"

### Scene 3: HR Self-Service (12s–17s)
- Navigate to "My Leave" screen
- Leave balance cards: Annual (12), Sick (6), Casual (3)
- Apply for leave form:
  - "Aug 12 – Aug 14 · Annual · 3 days"
  - User taps "Submit"
  - Confirmation animation

### Scene 4: One-Tap Approvals (17s–23s)
- Push notification slides down: "Approval needed · PO-0142 · ₹1.22 Cr"
- Navigate to Approvals screen showing badge count (3)
- Top approval card:
  - "PO-2026-0142 · JSW Steel · 200 MT TMT bar · ₹1.22 Cr"
- User taps "Approve" — satisfying green checkmark animation
- Badge count drops from 3 to 2

## Visual Direction

- **Native mobile feel** — Smooth 60fps, natural swipe gestures
- **iPhone frame overlay** — Use a minimal device frame (just the rounded corners and notch)
- **Light theme** for readability
- **Realistic data** — Use the same companies/employees from the desktop video
- **Haptic-style micro-animations** — Subtle bounces on button taps

## Delivery Format

- **Preferred:** MP4 with phone frame baked in (transparent edges via WebM for supported browsers)
- **Alternative:** Record just the screen content, overlay the phone frame in CSS

## Usage Notes

- Embed as `<video>` inside the `.phone-screen` container
- The phone frame (`.phone` with `.phone-notch`) stays as CSS
- Add floating notification cards (`.go-float`) as CSS overlays on top of the video
- Left sidebar feature buttons can seek to video timestamps for interactivity
