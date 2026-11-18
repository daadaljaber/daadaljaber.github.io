/* ==========================================================================
   Daad Aljaber — portfolio behaviour
   1. Language (English / Arabic) and page text
   2. Render content from data.js
   3. Navigation (mobile menu, active section, scrolled state)
   4. Hero byte field (canvas)
   5. Contact form
   ========================================================================== */
(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const SITE = window.SITE || {};
  const DICT = window.I18N || { en: {} };
  const P = SITE.profile || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const has = (v) => Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && String(v).trim() !== "";

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
     1. Language
     ====================================================================== */
  let LANG = root.lang === "ar" ? "ar" : "en";

  // Page text from i18n.js, falling back to English.
  const u = (key) => (DICT[LANG] && DICT[LANG][key]) || (DICT.en && DICT.en[key]) || "";
  // A field of a data.js entry: Arabic from entry.ar when available, otherwise English.
  const t = (entry, field) => {
    if (LANG === "ar" && entry.ar && has(entry.ar[field])) return entry.ar[field];
    return entry[field];
  };

  function applyStaticText() {
    document.querySelectorAll("[data-i18n]").forEach((n) => {
      const v = u(n.getAttribute("data-i18n"));
      if (v) n.textContent = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => {
      const v = u(n.getAttribute("data-i18n-aria"));
      if (v) n.setAttribute("aria-label", v);
    });
    // The switch is written in the language it switches to.
    const sw = document.querySelector("[data-lang-toggle]");
    if (sw) sw.setAttribute("lang", LANG === "ar" ? "en" : "ar");

    document.title = u("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", u("meta.description"));
    const menuBtn = document.querySelector(".nav__toggle");
    if (menuBtn) {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.querySelector(".nav__toggle-label").textContent = u(open ? "nav.close" : "nav.menu");
    }
  }

  function setLanguage(lang, remember) {
    LANG = lang === "ar" ? "ar" : "en";
    root.lang = LANG;
    root.dir = LANG === "ar" ? "rtl" : "ltr";
    if (remember) { try { localStorage.setItem("lang", LANG); } catch (e) {} }
    applyStaticText();
    renderAll();
    root.classList.remove("i18n-pending");
    if (window.__resizeByteField) window.__resizeByteField();
  }

  /* ======================================================================
     2. Render
     ====================================================================== */
  function renderAll() {
    renderSocial();
    renderEducation();
    renderExperience();
    renderProjects();
    renderLedger("certifications", SITE.certifications, (c) => ({ title: t(c, "name"), sub: t(c, "issuer"), date: t(c, "date"), link: c.link }));
    renderLedger("leadership", SITE.leadership, (l) => ({ title: t(l, "name"), sub: t(l, "role"), date: t(l, "date"), desc: t(l, "description") }));
    renderSkills();
    renderContact();
    if (has(P.cv)) document.querySelectorAll("[data-cv-link]").forEach((a) => a.setAttribute("href", P.cv));
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  }

  function renderSocial() {
    const social = document.querySelector("[data-social]");
    if (!social) return;
    social.textContent = "";
    [["LinkedIn", P.linkedin], ["GitHub", P.github]].forEach(([label, url]) => {
      if (has(url)) social.appendChild(el("li", null, el("a", Object.assign({ lang: "en" }, linkAttrs(url)), label)));
    });
    social.hidden = !social.children.length;
  }

  function renderEducation() {
    const box = target("education");
    if (!box || !has(SITE.education)) return;
    box.textContent = "";
    SITE.education.forEach((e) => {
      box.appendChild(el("article", { class: "edu" }, [
        el("h3", { class: "edu__school" }, t(e, "school")),
        el("p", { class: "edu__meta" }, [
          has(t(e, "degree")) && el("span", null, t(e, "degree")),
          has(t(e, "track")) && el("span", null, t(e, "track")),
          has(t(e, "college")) && el("span", null, t(e, "college"))
        ]),
        has(t(e, "dates")) && el("p", { class: "edu__dates" }, t(e, "dates")),
        has(t(e, "notes")) && el("p", { class: "edu__dates" }, t(e, "notes")),
        has(t(e, "coursework")) && el("p", { class: "edu__course-title" }, u("edu.coursework")),
        list(t(e, "coursework"), "edu__courses")
      ]));
    });
  }

  function renderExperience() {
    const box = target("experience");
    if (!box || !has(SITE.experience)) return;
    box.textContent = "";
    SITE.experience.forEach((x) => {
      box.appendChild(el("li", null, [
        el("p", { class: "timeline__dates" }, has(t(x, "dates")) ? t(x, "dates") : ""),
        el("div", null, [
          el("h3", { class: "timeline__org" }, t(x, "org")),
          has(t(x, "role")) && el("p", { class: "timeline__role" }, t(x, "role")),
          has(t(x, "description")) && el("p", { class: "timeline__desc" }, t(x, "description")),
          list(t(x, "achievements"), "timeline__list"),
          list(t(x, "skills"), "tags")
        ])
      ]));
    });
  }

  function renderProjects() {
    const box = target("projects");
    if (!box || !has(SITE.projects)) return;
    box.textContent = "";
    SITE.projects.forEach((p, i) => {
      const id = `project-${i}`;
      const title = t(p, "title");
      const asList = (v) => Array.isArray(v) ? list(v) : v;
      const details = [
        ["proj.overview", has(t(p, "overview")) && el("dd", null, t(p, "overview"))],
        ["proj.problem", has(t(p, "problem")) && el("dd", null, t(p, "problem"))],
        ["proj.role", has(t(p, "role")) && el("dd", null, asList(t(p, "role")))],
        ["proj.tech", has(t(p, "tech")) && el("dd", null, list(t(p, "tech"), "tags"))],
        ["proj.outcomes", has(t(p, "outcomes")) && el("dd", null, asList(t(p, "outcomes")))]
      ].filter(([, dd]) => dd).map(([key, dd]) => el("div", null, [el("dt", null, u(key)), dd]));

      const panelInner = el("div", { class: "project__inner" },
        el("div", { class: "project__grid" }, [
          has(p.image) && el("figure", { class: "project__figure" },
            el("img", { src: p.image, alt: `${u("proj.preview")} ${title}`, loading: "lazy", width: "800", height: "600" })),
          el("div", null, [
            el("dl", { class: "project__details" }, details),
            has(p.github) && el("a", Object.assign({ class: "project__link" }, linkAttrs(p.github)), u("proj.github"))
          ])
        ])
      );

      const toggle = el("button", { class: "project__toggle", type: "button", "aria-expanded": "false", "aria-controls": id }, [
        el("span", null, [
          el("span", { class: "project__title" }, title),
          has(t(p, "summary")) && el("span", { class: "project__summary" }, t(p, "summary")),
          has(t(p, "context")) && el("span", { class: "project__context" }, t(p, "context"))
        ]),
        el("span", { class: "project__icon", "aria-hidden": "true" })
      ]);

      const panel = el("div", { class: "project__panel", id, role: "region", "aria-label": title }, panelInner);
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        panel.dataset.open = String(open);
      });
      box.appendChild(el("li", null, [toggle, panel]));
    });
  }

  function renderLedger(name, items, map) {
    const box = target(name);
    if (!box || !has(items)) return;
    box.textContent = "";
    items.forEach((item) => {
      const m = map(item);
      box.appendChild(el("li", null, [
        el("h3", { class: "ledger__name" }, m.title),
        has(m.date) && el("p", { class: "ledger__date" }, m.date),
        has(m.sub) && el("p", { class: "ledger__sub" }, m.sub),
        has(m.desc) && el("p", { class: "ledger__desc" }, m.desc),
        has(m.link) && el("a", Object.assign({ class: "ledger__link" }, linkAttrs(m.link)), u("cert.view"))
      ]));
    });
  }

  function renderSkills() {
    const box = target("skills");
    if (!box || !has(SITE.skills)) return;
    box.textContent = "";
    SITE.skills.forEach((g) => {
      const items = t(g, "items");
      if (!has(items)) return;
      box.appendChild(el("div", { class: "skills__group" }, [el("h3", null, t(g, "group")), list(items)]));
    });
  }

  function renderContact() {
    const box = document.querySelector("[data-contact]");
    if (!box) return;
    box.textContent = "";
    const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, "");
    const rows = [
      ["contact.email", has(P.email) && el("a", { href: `mailto:${P.email}`, dir: "ltr" }, P.email)],
      ["contact.linkedin", has(P.linkedin) && el("a", Object.assign({ dir: "ltr" }, linkAttrs(P.linkedin)), strip(P.linkedin))],
      ["contact.github", has(P.github) && el("a", Object.assign({ dir: "ltr" }, linkAttrs(P.github)), strip(P.github))],
      ["contact.location", has(t(P, "location")) && t(P, "location")],
      ["contact.cv", has(P.cv) && el("a", { href: P.cv, download: true }, u("contact.cv.link"))]
    ];
    rows.filter(([, v]) => v).forEach(([k, v]) => box.appendChild(el("div", null, [el("dt", null, u(k)), el("dd", null, v)])));
  }

  /* ======================================================================
     3. Navigation
     ====================================================================== */
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  function setMenu(open) {
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.querySelector(".nav__toggle-label").textContent = u(open ? "nav.close" : "nav.menu");
    menu.classList.toggle("is-open", open);
  }
  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => setMenu(toggleBtn.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggleBtn.focus(); }
    });
  }

  const langBtn = document.querySelector("[data-lang-toggle]");
  if (langBtn) langBtn.addEventListener("click", () => {
    setLanguage(LANG === "ar" ? "en" : "ar", true);
    if (menu && menu.classList.contains("is-open")) setMenu(false);
  });

  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = [...document.querySelectorAll('.nav__menu a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.getAttribute("href") === `#${entry.target.id}`) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ======================================================================
     4. Hero byte field
     ====================================================================== */
  function byteField(canvas) {
    const ctx = canvas.getContext("2d");
    const HEX = "0123456789ABCDEF";
    const rand = () => HEX[(Math.random() * 16) | 0];
    const CELL_W = 15, CELL_H = 20, FONT = 12;
    let w = 0, h = 0, cols = 0, rows = 0, cells = [];
    const pointer = { x: -9999, y: -9999 };
    const start = performance.now();
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
        base: Math.random() < 0.06 ? 0.42 : 0.16
      }));
    }

    function draw(now) {
      const tm = now - start;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${FONT}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textBaseline = "top";
      ctx.direction = "ltr";
      const R = 110;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = cells[r * cols + c];
          const x = c * CELL_W + 3, y = r * CELL_H + 4;
          const dx = x - pointer.x, dy = y - pointer.y;
          const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / R);
          const settling = tm < cell.settle;
          if (!reduceMotion && (settling || Math.random() < 0.0025 + near * 0.12)) cell.ch = rand();
          const a = settling ? 0.08 : Math.min(1, cell.base + near * 0.75);
          ctx.fillStyle = `rgba(201,191,174,${a})`;
          ctx.fillText(cell.ch, x, y);
        }
      }
    }

    function loop(now) {
      if (!running) return;
      if (now - last > 50) { draw(now); last = now; }
      raf = requestAnimationFrame(loop);
    }
    function play() { if (running || reduceMotion || !visible) return; running = true; raf = requestAnimationFrame(loop); }
    function pause() { running = false; cancelAnimationFrame(raf); }

    resize();
    draw(performance.now());
    window.__resizeByteField = () => { resize(); draw(performance.now()); };

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

  /* ---------- start ---------- */
  setLanguage(LANG, false);

  const canvas = document.querySelector(".hero__canvas");
  if (canvas && canvas.getContext) byteField(canvas);

  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-loaded")));

  /* ======================================================================
     5. Contact form
     ====================================================================== */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = form.querySelector(".form__status");
    const setStatus = (key, isError) => { status.textContent = u(key); status.classList.toggle("is-error", !!isError); };

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
        setStatus("form.invalid", true);
        firstInvalid.focus();
        return;
      }

      const data = Object.fromEntries(new FormData(form));

      if (has(P.formEndpoint)) {
        setStatus("form.sending");
        try {
          const res = await fetch(P.formEndpoint, {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error(res.statusText);
          form.reset();
          setStatus("form.sent");
        } catch (err) {
          setStatus("form.failed", true);
        }
        return;
      }

      if (has(P.email)) {
        const subject = encodeURIComponent(`${u("form.subject")} ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
        window.location.href = `mailto:${P.email}?subject=${subject}&body=${body}`;
        setStatus("form.mailto");
      } else {
        setStatus("form.unset", true);
      }
    });

    form.addEventListener("input", (e) => {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity() && e.target.value.trim()) {
        e.target.setAttribute("aria-invalid", "false");
      }
    });
  }
})();
