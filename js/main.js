const CONTACT = {
  email: "fedeabeledo01@gmail.com",
  linkedin: "https://linkedin.com/in/federico-abeledo",
  github: "https://github.com/fedeabeledo",
  whatsapp: "https://wa.me/5491153230016",
};

const CERT_LOGOS = {
  Microsoft: "img/cert-microsoft.svg",
  Cisco: "img/cert-cisco.svg",
  KPMG: "img/cert-kpmg.svg",
  Hack4U: "img/cert-hack4u.svg",
};

const CV_PATHS = {
  en: "cv/Federico-Abeledo-CV-EN.pdf",
  es: "cv/Federico-Abeledo-CV-ES.pdf",
};

const contentCache = {};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, obj);
}

function preferredLang() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") return stored;
  } catch (e) {
    /* ignore */
  }
  if (
    typeof navigator !== "undefined" &&
    navigator.language &&
    navigator.language.toLowerCase().startsWith("es")
  ) {
    return "es";
  }
  return "en";
}

async function loadContent(lang) {
  if (contentCache[lang]) return contentCache[lang];
  const res = await fetch(`content/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load content/${lang}.json`);
  const data = await res.json();
  contentCache[lang] = data;
  return data;
}

function applySimpleI18n(root, data) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getByPath(data, el.getAttribute("data-i18n"));
    if (typeof value === "string") el.textContent = value;
  });

  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = getByPath(data, el.getAttribute("data-i18n-aria"));
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });

  root.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = getByPath(data, el.getAttribute("data-i18n-alt"));
    if (typeof value === "string") el.setAttribute("alt", value);
  });
}

function fillList(ul, items, className) {
  while (ul.firstChild) ul.removeChild(ul.firstChild);
  items.forEach((item) => {
    const li = document.createElement("li");
    if (className) li.className = className;
    li.textContent = item;
    ul.appendChild(li);
  });
}

function renderExperience(data) {
  const kpmgBullets = document.getElementById("kpmg-bullets");
  if (kpmgBullets) fillList(kpmgBullets, data.experience.kpmg.bullets);

  const buer = document.getElementById("buerentals-summary");
  if (buer) buer.textContent = data.experience.buerentals.bullets[0] || "";
}

function renderSkills(data) {
  const primary = document.getElementById("skills-primary-items");
  if (primary) fillList(primary, data.skills.primary.items, "chip--solid");

  const langList = document.getElementById("skills-languages");
  if (langList) {
    while (langList.firstChild) langList.removeChild(langList.firstChild);
    data.skills.languages.items.forEach((row) => {
      const li = document.createElement("li");
      const name = document.createElement("span");
      name.className = "lang-rows__name";
      name.textContent = row.lang;
      const level = document.createElement("span");
      level.className = "lang-rows__level";
      level.textContent = row.level;
      li.appendChild(name);
      li.appendChild(level);
      langList.appendChild(li);
    });
  }

  const groups = document.getElementById("skills-groups");
  if (groups) {
    while (groups.firstChild) groups.removeChild(groups.firstChild);
    data.skills.groups.forEach((group) => {
      const wrap = document.createElement("div");
      wrap.className = "skills__group";
      const title = document.createElement("h4");
      title.className = "skills__group-title";
      title.textContent = group.name;
      const ul = document.createElement("ul");
      ul.className = "chip-list";
      group.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "chip--outline";
        li.textContent = item;
        ul.appendChild(li);
      });
      wrap.appendChild(title);
      wrap.appendChild(ul);
      groups.appendChild(wrap);
    });
  }
}

function renderCertifications(data) {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  while (grid.firstChild) grid.removeChild(grid.firstChild);

  data.certifications.items.forEach((cert) => {
    const li = document.createElement("li");
    li.className = cert.inProgress ? "cert cert--progress" : "cert";

    const top = document.createElement("div");
    top.className = "cert__top";

    const logo = document.createElement("img");
    logo.className = "cert__logo";
    logo.src = CERT_LOGOS[cert.issuer] || "img/cert-microsoft.svg";
    logo.alt = "";
    logo.setAttribute("aria-hidden", "true");
    logo.width = 48;
    logo.height = 48;
    top.appendChild(logo);

    if (cert.inProgress) {
      const badge = document.createElement("span");
      badge.className = "cert__badge";
      badge.setAttribute("data-i18n", "certifications.inProgress");
      badge.textContent = data.certifications.inProgress;
      top.appendChild(badge);
    } else {
      const year = document.createElement("span");
      year.className = "cert__year";
      year.textContent = cert.year || "";
      top.appendChild(year);
    }

    const mid = document.createElement("div");
    const code = document.createElement("span");
    code.className = "cert__code";
    code.textContent = cert.code;
    const name = document.createElement("h3");
    name.className = "cert__name";
    name.textContent = cert.name;
    mid.appendChild(code);
    mid.appendChild(name);

    const issuer = document.createElement("span");
    issuer.className = "cert__issuer";
    issuer.textContent = cert.issuer;

    li.appendChild(top);
    li.appendChild(mid);
    li.appendChild(issuer);
    grid.appendChild(li);
  });
}

function renderEducation(data) {
  const segments = document.getElementById("edu-segments");
  if (segments) {
    while (segments.firstChild) segments.removeChild(segments.firstChild);
    const completed = data.education.completed;
    const total = data.education.total;
    for (let i = 0; i < total; i += 1) {
      const span = document.createElement("span");
      span.className = i < completed ? "edu__seg is-on" : "edu__seg";
      segments.appendChild(span);
    }
    segments.setAttribute("aria-label", data.education.progressAria);
  }

  const count = document.getElementById("edu-count");
  if (count) {
    count.textContent = `${data.education.completed} / ${data.education.total}`;
  }
}

function linkLabel(data, labelKey) {
  if (labelKey === "backend") return data.projects.backend;
  if (labelKey === "frontend") return data.projects.frontend;
  return data.projects.source;
}

function renderProjects(data) {
  const list = document.getElementById("project-list");
  if (!list) return;
  while (list.firstChild) list.removeChild(list.firstChild);

  data.projects.items.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project";

    const body = document.createElement("div");
    body.className = "project__body";

    const title = document.createElement("h3");
    title.className = "project__title";
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "project__desc";
    desc.textContent = project.desc;

    const tags = document.createElement("p");
    tags.className = "project__tags";
    tags.textContent = project.tags.join(" · ");

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(tags);

    const links = document.createElement("div");
    links.className = "project__links";
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = `${linkLabel(data, link.labelKey)} ↗`;
      links.appendChild(a);
    });

    li.appendChild(body);
    li.appendChild(links);
    list.appendChild(li);
  });
}

function updateCvLinks(lang) {
  const href = CV_PATHS[lang] || CV_PATHS.en;
  document.querySelectorAll("[data-cv-link]").forEach((el) => {
    el.setAttribute("href", href);
  });
}

function updateLangToggle(lang, data) {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  const en = btn.querySelector('[data-lang-mark="en"]');
  const es = btn.querySelector('[data-lang-mark="es"]');
  if (en) en.classList.toggle("nav__lang-active", lang === "en");
  if (es) es.classList.toggle("nav__lang-active", lang === "es");
  // Visible text is "EN / ES"; keep it inside the accessible name (WCAG 2.5.3).
  btn.setAttribute("aria-label", `EN / ES — ${data.toggles.langAria}`);
}

function updateThemeToggle(theme, data) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const next = theme === "dark" ? "light" : "dark";
  const label =
    next === "dark" ? data.toggles.themeToDark : data.toggles.themeToLight;
  const aria =
    next === "dark"
      ? data.toggles.themeToDarkAria
      : data.toggles.themeToLightAria;
  btn.textContent = label;
  btn.setAttribute("aria-label", `${label} — ${aria}`);
  btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

async function applyLanguage(lang) {
  const data = await loadContent(lang);
  document.documentElement.lang = lang;
  applySimpleI18n(document, data);
  renderExperience(data);
  renderSkills(data);
  renderCertifications(data);
  renderEducation(data);
  renderProjects(data);
  updateCvLinks(lang);
  updateLangToggle(lang, data);
  const theme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  updateThemeToggle(theme, data);
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    /* ignore */
  }
  return data;
}

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    /* ignore */
  }
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function greet() {
  const style =
    "color:#9CC29A;font-family:ui-monospace,monospace;font-size:12px";
  console.log("%cfede@portfolio:~$ whoami", style);
  console.log("%cFederico Abeledo — cybersecurity · GRC · curious builder", style);
}

async function init() {
  greet();
  setupReveal();

  const langToggle = document.getElementById("lang-toggle");
  const themeToggle = document.getElementById("theme-toggle");

  let lang = preferredLang();
  let data = await applyLanguage(lang);

  if (langToggle) {
    langToggle.addEventListener("click", async () => {
      lang = lang === "en" ? "es" : "en";
      data = await applyLanguage(lang);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      setTheme(next);
      updateThemeToggle(next, data);
    });
  }
}

init().catch((err) => {
  console.error(err);
});
