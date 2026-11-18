/* ==========================================================================
   Daad Aljaber — portfolio behaviour
   1. Render content from data.js
   2. Navigation (mobile menu, active section, scrolled state)
   3. Project panels
   4. Hero byte field (canvas)
   5. Contact form
   ========================================================================== */
(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const SITE = window.SITE || {};
  const P = SITE.profile || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const has = (v) => Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && String(v).trim() !== "";

  // el("p", { class: "x" }, "text" | Node | [children])
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === false || v === null || v === undefined) continue;
        if (k === "class") node.className = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    append(node, children);
    return node;
  }
  function append(node, children) {
    if (children === undefined || children === null || children === false) return;
    if (Array.isArray(children)) children.forEach((c) => append(node, c));
    else if (children instanceof Node) node.appendChild(children);
    else node.appendChild(document.createTextNode(String(children)));
  }
  const list = (items, cls) => has(items) ? el("ul", { class: cls }, items.map((t) => el("li", null, t))) : null;
  const target = (name) => document.querySelector(`[data-render="${name}"]`);
  const isExternal = (url) => /^https?:\/\//.test(url);
  const linkAttrs = (url) => isExternal(url) ? { href: url, target: "_blank", rel: "noopener noreferrer" } : { href: url };

  /* ======================================================================
     1. Render
     ====================================================================== */

  // Social links in hero
  const social = document.querySelector("[data-social]");
  if (social) {
    [["LinkedIn", P.linkedin], ["GitHub", P.github]].forEach(([label, url]) => {
      if (has(url)) social.appendChild(el("li", null, el("a", linkAttrs(url), label)));
    });
    if (!social.children.length) social.remove();
  }

  // CV link(s)
  if (has(P.cv)) document.querySelectorAll("[data-cv-link]").forEach((a) => a.setAttribute("href", P.cv));

  // Education
  const eduTarget = target("education");
  if (eduTarget && has(SITE.education)) {
    SITE.education.forEach((e) => {
      eduTarget.appendChild(el("article", { class: "edu" }, [
        el("h3", { class: "edu__school" }, e.school),
        el("p", { class: "edu__meta" }, [
          has(e.degree) && el("span", null, e.degree),
          has(e.track) && el("span", null, e.track),
          has(e.college) && el("span", null, e.college)
        ]),
        has(e.dates) && el("p", { class: "edu__dates" }, e.dates),
        has(e.notes) && el("p", { class: "edu__dates" }, e.notes),
        has(e.coursework) && el("p", { class: "edu__course-title" }, "Relevant coursework"),
        list(e.coursework, "edu__courses")
      ]));
    });
  }

  // Experience
  const expTarget = target("experience");
  if (expTarget && has(SITE.experience)) {
    SITE.experience.forEach((x) => {
      expTarget.appendChild(el("li", null, [
        el("p", { class: "timeline__dates" }, has(x.dates) ? x.dates : ""),
        el("div", null, [
          el("h3", { class: "timeline__org" }, x.org),
          has(x.role) && el("p", { class: "timeline__role" }, x.role),
          has(x.description) && el("p", { class: "timeline__desc" }, x.description),
          list(x.achievements, "timeline__list"),
          list(x.skills, "tags")
        ])
      ]));
    });
  }

  // Projects
  const projTarget = target("projects");
  if (projTarget && has(SITE.projects)) {
    SITE.projects.forEach((p, i) => {
      const id = `project-${i}`;
      const details = [
        ["Overview", has(p.overview) && el("dd", null, p.overview)],
        ["Problem", has(p.problem) && el("dd", null, p.problem)],
        ["My role and contributions", has(p.role) && el("dd", null, Array.isArray(p.role) ? list(p.role) : p.role)],
        ["Technologies", has(p.tech) && el("dd", null, list(p.tech, "tags"))],
        ["Key outcomes", has(p.outcomes) && el("dd", null, Array.isArray(p.outcomes) ? list(p.outcomes) : p.outcomes)]
      ].filter(([, dd]) => dd).map(([label, dd]) => el("div", null, [el("dt", null, label), dd]));

      const panelInner = el("div", { class: "project__inner" },
        el("div", { class: "project__grid" }, [
          has(p.image) && el("figure", { class: "project__figure" },
            el("img", { src: p.image, alt: `Preview of ${p.title}`, loading: "lazy", width: "800", height: "600" })),
          el("div", null, [
            el("dl", { class: "project__details" }, details),
            has(p.github) && el("a", Object.assign({ class: "project__link" }, linkAttrs(p.github)), "View repository on GitHub")
          ])
        ])
      );

      const toggle = el("button", {
        class: "project__toggle", type: "button", "aria-expanded": "false", "aria-controls": id
      }, [
        el("span", null, [
          el("span", { class: "project__title" }, p.title),
          has(p.summary) && el("span", { class: "project__summary" }, p.summary),
          has(p.context) && el("span", { class: "project__context" }, p.context)
        ]),
        el("span", { class: "project__icon", "aria-hidden": "true" })
      ]);

      const panel = el("div", { class: "project__panel", id, role: "region", "aria-label": p.title }, panelInner);

      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        panel.dataset.open = String(open);
      });

      projTarget.appendChild(el("li", null, [toggle, panel]));
    });
  }

  // Certifications & leadership share the ledger layout
  function renderLedger(name, items, map) {
    const t = target(name);
    if (!t || !has(items)) return;
    items.forEach((item) => {
      const m = map(item);
      t.appendChild(el("li", null, [
        el("h3", { class: "ledger__name" }, m.title),
        has(m.date) && el("p", { class: "ledger__date" }, m.date),
        has(m.sub) && el("p", { class: "ledger__sub" }, m.sub),
        has(m.desc) && el("p", { class: "ledger__desc" }, m.desc),
        has(m.link) && el("a", Object.assign({ class: "ledger__link" }, linkAttrs(m.link)), "View credential")
      ]));
    });
  }
  renderLedger("certifications", SITE.certifications, (c) => ({ title: c.name, sub: c.issuer, date: c.date, link: c.link }));
  renderLedger("leadership", SITE.leadership, (l) => ({ title: l.name, sub: l.role, date: l.date, desc: l.description }));

  // Skills
  const skillTarget = target("skills");
  if (skillTarget && has(SITE.skills)) {
    SITE.skills.forEach((g) => {
      if (!has(g.items)) return;
      skillTarget.appendChild(el("div", { class: "skills__group" }, [el("h3", null, g.group), list(g.items)]));
    });
  }

  // Contact details
  const contact = document.querySelector("[data-contact]");
  if (contact) {
    const rows = [
      ["Email", has(P.email) && el("a", { href: `mailto:${P.email}` }, P.email)],
      ["LinkedIn", has(P.linkedin) && el("a", linkAttrs(P.linkedin), P.linkedin.replace(/^https?:\/\/(www\.)?/, ""))],
      ["GitHub", has(P.github) && el("a", linkAttrs(P.github), P.github.replace(/^https?:\/\/(www\.)?/, ""))],
      ["Location", has(P.location) && P.location],
      ["CV", has(P.cv) && el("a", { href: P.cv, download: true }, "Download CV (PDF)")]
    ];
    rows.filter(([, v]) => v).forEach(([k, v]) => contact.appendChild(el("div", null, [el("dt", null, k), el("dd", null, v)])));
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));

  /* ======================================================================
     2. Navigation
     ====================================================================== */
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  function setMenu(open) {
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.querySelector(".nav__toggle-label").textContent = open ? "Close" : "Menu";
    menu.classList.toggle("is-open", open);
  }
  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => setMenu(toggleBtn.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggleBtn.focus(); }
    });
  }

  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the nav link for the section in view
  const navLinks = [...document.querySelectorAll('.nav__menu a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${entry.target.id}`));
        navLinks.forEach((a) => { if (a.hasAttribute("aria-current")) a.setAttribute("aria-current", "true"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ======================================================================
     4. Hero byte field
     A grid of hex characters that resolves on load, drifts slowly,
     and brightens/scrambles around the pointer.
     ====================================================================== */
  function byteField(canvas) {
    const ctx = canvas.getContext("2d");
    const HEX = "0123456789ABCDEF";
    const rand = () => HEX[(Math.random() * 16) | 0];
    const CELL_W = 15, CELL_H = 20, FONT = 12;
    let w = 0, h = 0, cols = 0, rows = 0, cells = [];
    let pointer = { x: -9999, y: -9999 };
    let start = performance.now();
    let running = false, visible = true, raf = 0, last = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL_W);
      rows = Math.ceil(h / CELL_H);
      cells = new Array(cols * rows).fill(0).map(() => ({
        ch: rand(),
        settle: reduceMotion ? 0 : 200 + Math.random() * 1400,
        // a sparse set of cells stays faintly brighter, like a highlighted byte
        base: Math.random() < 0.06 ? 0.42 : 0.16
      }));
    }

    function draw(now) {
      const t = now - start;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${FONT}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textBaseline = "top";
      const R = 110;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = cells[r * cols + c];
          const x = c * CELL_W + 3, y = r * CELL_H + 4;
          const dx = x - pointer.x, dy = y - pointer.y;
          const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / R);
          const settling = t < cell.settle;
          if (!reduceMotion && (settling || Math.random() < 0.0025 + near * 0.12)) cell.ch = rand();
          const a = settling ? 0.08 : Math.min(1, cell.base + near * 0.75);
          ctx.fillStyle = `rgba(201,191,174,${a})`;
          ctx.fillText(cell.ch, x, y);
        }
      }
    }

    function loop(now) {
      if (!running) return;
      if (now - last > 50) { draw(now); last = now; }   // ~20fps is plenty for this
      raf = requestAnimationFrame(loop);
    }
    function play() { if (running || reduceMotion || !visible) return; running = true; raf = requestAnimationFrame(loop); }
    function pause() { running = false; cancelAnimationFrame(raf); }

    resize();
    draw(performance.now());

    // Pointer tracks across the whole hero so the field reacts as you approach it
    const hero = canvas.closest(".hero");
    hero.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduceMotion) draw(performance.now());
    });
    hero.addEventListener("pointerleave", () => { pointer.x = pointer.y = -9999; if (reduceMotion) draw(performance.now()); });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resize(); draw(performance.now()); }, 120);
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visible ? play() : pause();
      }).observe(canvas);
    }
    document.addEventListener("visibilitychange", () => (document.hidden ? pause() : play()));
    play();
  }

  const canvas = document.querySelector(".hero__canvas");
  if (canvas && canvas.getContext) byteField(canvas);

  // Trigger the one-time load sequence
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-loaded")));

  /* ======================================================================
     5. Contact form
     Uses Formspree if profile.formEndpoint is set; otherwise opens the
     visitor's email app with the message filled in.
     ====================================================================== */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = form.querySelector(".form__status");
    const setStatus = (msg, isError) => { status.textContent = msg; status.classList.toggle("is-error", !!isError); };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll("input, textarea")];
      let firstInvalid = null;
      fields.forEach((f) => {
        const ok = f.checkValidity() && f.value.trim() !== "";
        f.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) {
        setStatus("Please fill in your name, a valid email, and a message.", true);
        firstInvalid.focus();
        return;
      }

      const data = Object.fromEntries(new FormData(form));

      if (has(P.formEndpoint)) {
        setStatus("Sending…");
        try {
          const res = await fetch(P.formEndpoint, {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error(res.statusText);
          form.reset();
          setStatus("Message sent. I’ll reply by email.");
        } catch (err) {
          setStatus("The message didn’t send. Check your connection and try again, or email me directly.", true);
        }
        return;
      }

      if (has(P.email)) {
        const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
        window.location.href = `mailto:${P.email}?subject=${subject}&body=${body}`;
        setStatus("Your email app should open with the message ready to send.");
      } else {
        setStatus("Messaging isn’t set up yet. Please reach out on LinkedIn or GitHub.", true);
      }
    });

    form.addEventListener("input", (e) => {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity() && e.target.value.trim()) {
        e.target.setAttribute("aria-invalid", "false");
      }
    });
  }
})();
