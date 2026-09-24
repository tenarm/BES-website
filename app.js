/* =========================================================================
   TenArm BES — interactions & motion (Redesigned)
   Framework-free. Lenis (CDN) is progressive enhancement.
   ========================================================================= */
(function () {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Smooth scroll (progressive enhancement) ---- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 0.9, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* ---- Scroll progress + header state ---- */
  const bar = $('#progressBar');
  const header = $('#siteHeader');

  const onScroll = () => {
    const h = document.documentElement;
    const scrollY = h.scrollTop;
    const p = scrollY / (h.scrollHeight - h.clientHeight || 1);
    if (bar) bar.style.width = (p * 100).toFixed(2) + '%';
    if (header) header.classList.toggle('scrolled', scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Active nav link tracking ---- */
  const navLinks = $$('.nav-links a[href^="#"]');
  const sectionIds = navLinks.map(a => a.getAttribute('href').slice(1));
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    let currentActiveId = null;
    const setActive = (id) => {
      currentActiveId = id;
      navLinks.forEach(a => {
        const isActive = (a.getAttribute('href') === '#' + id) && window.scrollY > 100;
        a.classList.toggle('active', isActive);
      });
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    sections.forEach(s => observer.observe(s));
    /* ---- Hero Text Rotator ---- */
  const rotator = $('#heroRotator');
  if (rotator && !reduce) {
    const phrases = [
      "for ambitious businesses.",
      "that turns chaos into choreography.",
      "where every rupee is accounted for.",
      "that never drops a baton.",
      "built to scale without friction.",
      "that unifies your entire operation."
    ];
    let rIdx = 0;
    setTimeout(() => {
      setInterval(() => {
        rIdx = (rIdx + 1) % phrases.length;
        // Fade out
        rotator.classList.add('fade-out');
        setTimeout(() => {
          // Swap text, prepare for fade in
          rotator.textContent = phrases[rIdx];
          rotator.classList.remove('fade-out');
          rotator.classList.add('fade-in');
          // Trigger reflow
          void rotator.offsetWidth;
          // Fade in
          rotator.classList.remove('fade-in');
        }, 400); // Wait for transition
      }, 3500);
    }, 2000); // Delay start until initial reveal finishes
  }
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 100) {
        navLinks.forEach(a => a.classList.remove('active'));
      } else if (currentActiveId) {
        setActive(currentActiveId);
      }
    }, { passive: true });
  }

  /* ---- Stagger indices ---- */
  const groups = new Map();
  $$('[data-stagger]').forEach(el => {
    const parent = el.parentElement;
    const i = groups.get(parent) || 0;
    el.style.setProperty('--i', i);
    groups.set(parent, i + 1);
  });

  /* ---- Reveal on scroll (IntersectionObserver) ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));

  /* ---- Hero word reveal (immediate) ---- */
  requestAnimationFrame(() => $$('[data-reveal-word]').forEach(el => el.classList.add('in')));

  /* ---- Magnetic buttons ---- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    $$('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.35;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---- Spotlight cards ---- */
  if (!reduce) {
    $$('.spotlight').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---- Hero command centre: live activity feed ---- */
  const ccFeed = $('#ccFeed');
  if (ccFeed) {
    const ccEvents = [
      ['Order confirmed', 'Rajesh Fabricators', '₹8.5L'],
      ['Stock reserved', 'Pune Hub · TMT bar', '120 MT'],
      ['Goods dispatched', 'Mumbai Warehouse', '490 MT'],
      ['Invoice paid', 'Skyline Traders', '₹42.5L'],
      ['SRV-2048 closed', 'TenArm Go Field', 'Service'],
      ['Books balanced', 'General Ledger', '0.00s delay'],
      ['PO approved', 'JSW Steel', '₹1.22 Cr'],
      ['Quote accepted', 'Pioneer Works', '₹14.2L'],
    ];
    let ci = 0;
    const pushCC = () => {
      const [ev, who, amt] = ccEvents[ci % ccEvents.length];
      const row = document.createElement('div');
      row.className = 'cc-item';
      row.innerHTML = `<span class="cc-bullet"></span><span><b>${ev}</b> · ${who}</span><span class="cc-amt">${amt}</span>`;
      ccFeed.appendChild(row);
      while (ccFeed.children.length > 3) ccFeed.removeChild(ccFeed.firstChild);
      ci++;
    };
    pushCC(); pushCC(); pushCC();
    if (!reduce) setInterval(pushCC, 2400);
  }

  /* ---- Hero KPI count-up ---- */
  $$('[data-cc-count]').forEach(el => {
    const target = parseFloat(el.dataset.ccCount);
    const pre = el.dataset.ccPrefix || '', suf = el.dataset.ccSuffix || '';
    const dec = el.dataset.ccCount.indexOf('.') >= 0 ? 1 : 0;
    if (reduce) { el.textContent = pre + target.toFixed(dec) + suf; return; }
    const dur = 1200, t0 = performance.now();
    const run = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (target * e).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  });

  /* ---- Paradigm live-activity stream ---- */
  const ledger = $('#ledgerRows');
  if (ledger) {
    const events = [
      ['Order confirmed', 'Rajesh Fabricators'], ['Stock reserved', 'Pune · 120 MT'],
      ['Goods received', 'Mumbai · 490 MT'], ['Invoice raised', '₹1.22 Cr'],
      ['Payment received', '₹40 L'], ['Leave approved', 'R. Kumar'],
      ['Ticket resolved', 'SRV-2048'], ['PO approved', 'JSW Steel'],
    ];
    let n = 0;
    const fmtTime = (m) => '09:' + String(41 + (m % 18)).padStart(2, '0');
    const addRow = () => {
      const [evt, who] = events[n % events.length];
      const row = document.createElement('div');
      row.className = 'ledger-row new';
      row.innerHTML = `<span class="seq">${fmtTime(n)}</span><span class="evt">${evt}</span><span class="amt">${who}</span>`;
      ledger.prepend(row);
      while (ledger.children.length > 6) ledger.removeChild(ledger.lastChild);
      n++;
    };
    for (let i = 0; i < 6; i++) addRow();
    if (!reduce) {
      const startStream = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { if (!ledger.dataset.on) { ledger.dataset.on = '1'; setInterval(addRow, 2200); } }
      }, { threshold: 0.3 });
      startStream.observe(ledger);
    }
  }

  /* ---- Product tour: sidebar tabs + auto-advance ---- */
  const bwNavs = $$('.bw-nav');
  const bwScreens = $$('.bw-screen');
  let tourIdx = 0, tourTimer = null;
  const showTour = (n) => {
    tourIdx = ((n % bwScreens.length) + bwScreens.length) % bwScreens.length;
    bwNavs.forEach((t, i) => t.classList.toggle('active', i === tourIdx));
    bwScreens.forEach((p, i) => p.classList.toggle('active', i === tourIdx));
  };
  const tourStart = () => { if (!tourTimer) tourTimer = setInterval(() => showTour(tourIdx + 1), 4200); };
  bwNavs.forEach((tab, i) => tab.addEventListener('click', () => {
    showTour(i);
    if (tourTimer) { clearInterval(tourTimer); tourTimer = null; if (!reduce) tourStart(); }
  }));
  if (bwScreens.length && !reduce) {
    const tourObs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) tourStart();
      else if (tourTimer) { clearInterval(tourTimer); tourTimer = null; }
    }, { threshold: 0.35 });
    const tourSection = $('#product');
    if (tourSection) tourObs.observe(tourSection);
  }

  /* ---- App catalogue render ---- */
  const apps = [
    ['description', 'Sales'], ['inventory_2', 'Inventory'], ['payments', 'Finance'], ['shopping_cart', 'Procurement'],
    ['groups', 'CRM'], ['build', 'Service'], ['local_shipping', 'Logistics'], ['assignment', 'Projects'],
    ['badge', 'HR'], ['account_balance_wallet', 'Payroll'], ['factory', 'Manufacturing'], ['sell', 'Assets'],
    ['home_repair_service', 'Maintenance'], ['receipt_long', 'GST Invoicing'], ['auto_awesome', 'Ambient AI'],
    ['folder', 'Documents'], ['lock', 'Customer Portal'], ['bar_chart', 'Reporting']
  ];
  const grid = $('#appGrid');
  if (grid) {
    apps.forEach((a, i) => {
      const el = document.createElement('div');
      el.className = 'app';
      el.setAttribute('data-app-name', a[1]);
      el.setAttribute('data-reveal', '');
      el.setAttribute('data-stagger', '');
      el.style.setProperty('--i', i % 6);
      el.innerHTML = `<span class="app-ic material-symbols-outlined">${a[0]}</span><b>${a[1]}</b>`;
      grid.appendChild(el);
      io.observe(el);
    });
  }

  /* ---- TenArm Go feature <-> screen ---- */
  const feats = $$('.go-feat');
  const screens = $$('.screen');
  let goIdx = 0, goTimer = null;
  const showScreen = (n) => {
    goIdx = n;
    feats.forEach(f => f.classList.toggle('active', +f.dataset.screen === n));
    screens.forEach(s => s.classList.toggle('active', +s.dataset.screen === n));
  };
  const autoGo = () => { goTimer = setInterval(() => showScreen((goIdx + 1) % screens.length), 3600); };
  feats.forEach(f => f.addEventListener('click', () => {
    showScreen(+f.dataset.screen);
    if (goTimer) { clearInterval(goTimer); if (!reduce) autoGo(); }
  }));
  if (screens.length && !reduce) {
    const goObs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting && !goTimer) autoGo();
      else if (!e[0].isIntersecting && goTimer) { clearInterval(goTimer); goTimer = null; }
    }, { threshold: 0.3 });
    const goSection = $('#go');
    if (goSection) goObs.observe(goSection);
  }

  /* ---- Constellation nodes click to scroll to app card ---- */
  $$('.orbit-node').forEach(node => {
    node.addEventListener('click', () => {
      const appName = node.dataset.app;
      if (!appName) return;
      const targetCard = $(`[data-app-name="${appName}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlight-pulse');
        setTimeout(() => targetCard.classList.remove('highlight-pulse'), 1800);
      }
    });
  });

  /* ---- AI interactive prompt simulator ---- */
  const aiChips = $$('.ai-chip');
  const aiBox = $('#aiAnswerBox');
  if (aiChips.length && aiBox) {
    const answers = {
      margin: {
        text: 'Gross margin steady at <b>34.2%</b>. Identified <b>1.4%</b> margin leakage on small-batch freight to Hyderabad due to partial load dispatches. Suggest consolidating dispatches.',
        kpis: '<span>Potential Savings: <b style="color:var(--green)">₹3.2 L / mo</b></span><span>Recommendation: <b>Route Consolidation</b></span>'
      },
      cash: {
        text: 'Projected net cash flow through Q4: <b>₹1.48 Cr surplus</b>. Receivables velocity is healthy with <b>86%</b> collected within 30 days. No liquidity crunch anticipated.',
        kpis: '<span>Projected Balance: <b style="color:var(--green)">₹2.68 Cr</b></span><span>Confidence: <b>94% (High)</b></span>'
      },
      stock: {
        text: '<b>2 items</b> require attention: 12mm TMT rebar at Pune hub will reach safety buffer in 4 days. Supplier <b>PO-0142</b> already queued for approval to replenish 200 MT.',
        kpis: '<span>Stockout Risk: <b style="color:var(--green)">Low (Mitigated)</b></span><span>Auto-PO: <b>Ready for Sign-off</b></span>'
      },
      audit: {
        text: '<b>3 transactions</b> awaiting executive authorization: PO-2026-0142 (₹1.22 Cr) requires dual sign-off. Line item variance is strictly within budget (+0.4%). All prerequisite vendor compliance records verified.',
        kpis: '<span>Pending Approvals: <b style="color:var(--brand)">₹1.22 Cr</b></span><span>Compliance Checks: <b style="color:var(--green)">100% Passed</b></span>'
      }
    };
    aiChips.forEach(chip => {
      chip.addEventListener('click', () => {
        aiChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const q = chip.dataset.q;
        const ans = answers[q] || answers.margin;
        aiBox.style.opacity = '0';
        setTimeout(() => {
          aiBox.innerHTML = `
            <div class="ai-answer-text">${ans.text}</div>
            <div class="ai-answer-kpi">${ans.kpis}</div>
          `;
          aiBox.style.opacity = '1';
        }, 150);
      });
    });
  }

  /* ---- Count-up stats ---- */
  const counters = $$('.stat-num');
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      cObs.unobserve(el);
      if (reduce) { el.textContent = target + suffix; return; }
      const dur = 1300, t0 = performance.now();
      const run = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObs.observe(c));

  /* ---- Mobile nav ---- */
  const toggle = $('#navToggle');
  if (toggle) toggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));

  /* ---- Smooth anchor navigation ---- */
  const HEADER_OFFSET = 52;
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      document.body.classList.remove('nav-open');
      if (lenis) {
        lenis.scrollTo(target, { offset: -HEADER_OFFSET });
      } else {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      }
    });
  });
})();
