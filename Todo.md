# Website — Manual Todo List

Items that need to be completed manually by the team.

---

## Links & URLs

- [ ] **Privacy Policy** — Create page and update `href` in footer (`website/index.html` line 1045)
- [ ] **Terms of Service** — Create page and update `href` in footer (line 1045)
- [ ] **Security** — Create page and update `href` in footer (line 1045)
- [ ] **LinkedIn** — Add company LinkedIn URL in footer (line 1039)
- [ ] **X / Twitter** — Add company X/Twitter URL in footer (line 1039)
- [ ] **Partners page** — Create page or form, update "Become a partner →" link in CTA (line 1020) and footer (line 1038)
- [x] **Documentation link** — Added `https://docs.tenarm.com` to nav and footer
- [ ] **Sign in URL** — Verify `https://app.tenarm.com` is the correct login URL (line 67)

## Contact Form

- [ ] **Form backend** — Currently `onsubmit` just resets the form (line 1013). Integrate with:
  - Option A: Formspree / Netlify Forms / Google Forms
  - Option B: Backend API endpoint
  - Option C: Email forwarding service (e.g., `mailto:` with form data)
- [ ] **Email address** — Verify `hello@tenarm.com` is correct (line 1039)

## Content

- [ ] **Pricing numbers** — Add actual pricing or "Starting at ₹X/user/month" to the pricing cards (lines 968–990)
- [ ] **Testimonials** — When real customer quotes are available, uncomment the testimonials section (lines 905–934) and replace placeholder names/companies
- [ ] **OG image** — Add `og:image` meta tag with a social sharing preview image (after line 15)
- [ ] **Favicon** — Verify `brand/TENARM_Favicon.svg` renders correctly at small sizes; consider adding a `.ico` fallback

## Video Assets

- [ ] **Record/produce video assets** — See `website/assets-desc/` for detailed descriptions of each video needed
- [ ] **Replace CSS mockups with videos** — Once videos are ready, embed them in the corresponding sections

## Hosting & DNS

- [ ] **Custom domain** — Point `tenarm.com` to the hosting provider
- [ ] **SSL certificate** — Ensure HTTPS is configured
- [ ] **Analytics** — Add Google Analytics / Plausible / Fathom tracking script
- [ ] **Cookie consent** — Add cookie banner if analytics is enabled (GDPR/India DPDPA compliance)

## SEO

- [ ] **Sitemap** — Create `sitemap.xml`
- [ ] **robots.txt** — Create with sitemap reference
- [ ] **Structured data** — Add JSON-LD Organization schema
- [ ] **Google Search Console** — Verify domain ownership
