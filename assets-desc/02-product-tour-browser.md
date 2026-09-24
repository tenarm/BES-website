# Video Asset: Product Tour — Interactive Browser Walkthrough

**Section:** Product Tour ("See it in action")
**Replaces:** Static CSS browser mockup with tab switching
**Duration:** 30–40 seconds, looping
**Dimensions:** 1440×900 (16:10), with macOS browser chrome

## What to Capture

A polished screen recording cycling through 5 views of the actual TenArm BES app:

### Scene 1: Dashboard (0s–6s)
- Dashboard with KPI tiles, revenue chart, activity feed
- Hover briefly over a KPI tile showing the trend detail
- Hold for 3 seconds to let the viewer absorb

### Scene 2: Sales Orders (6s–14s)
- Navigate to Sales from the sidebar
- Sales order list shows 5-6 orders with status badges (Confirmed, Shipped, Invoiced, Paid)
- Click into one order to show the order detail with line items
- Hold on detail view for 2 seconds

### Scene 3: Inventory (14s–20s)
- Navigate to Inventory
- Stock-on-hand view with product bars showing fill levels
- One product shows a "low" warning (red bar)
- Hold for 3 seconds

### Scene 4: Finance — P&L (20s–28s)
- Navigate to Finance
- Profit & Loss view with Revenue, COGS, Gross Profit, Operating Expenses, Net Profit
- "Books balanced" green badge visible
- Receivables aging bar chart below
- Hold for 3 seconds

### Scene 5: CRM Pipeline (28s–36s)
- Navigate to CRM
- Kanban pipeline board with Lead → Qualified → Won columns
- Deal cards with company names and ₹ values
- Hold for 3 seconds, then smooth transition back to Dashboard

## Visual Direction

- **Real product footage** — This IS the product demo. It should look polished and real.
- **Smooth, deliberate navigation** — Pre-scripted mouse movements, no fumbling
- **Consistent data** — Use the same companies across views (Rajesh Fabricators, Skyline Traders, etc.)
- **No cursor trail effects** — Just a clean pointer
- **60fps, crisp text rendering** — Record on Retina display, export at 2x

## Usage Notes

- Replace the entire `.browser` container with a `<video>` element
- Keep the macOS-style browser chrome as an overlay or bake it into the video
- Add chapter markers via JavaScript for the sidebar tab buttons to seek to specific timestamps
