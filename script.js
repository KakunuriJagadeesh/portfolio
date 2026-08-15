import {
  profile,
  stats,
  skills,
  experience,
  projects,
  education,
  certifications,
} from "./data.js";

/* ---------- helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chips = (arr) => `<div class="chips">${arr.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;

/* ---------- simple text bindings ---------- */
const bindings = {
  "nav.name": profile.name,
  "hero.name": profile.name,
  "hero.title": profile.title,
  "hero.tagline": profile.tagline,
  "hero.location": profile.location,
  "hero.summary": profile.summary,
  "footer.copy": `© ${new Date().getFullYear()} ${profile.name}`,
};
document.querySelectorAll("[data-bind]").forEach((n) => {
  const v = bindings[n.dataset.bind];
  if (v != null) n.textContent = v;
});

const hrefs = {
  "hero.mailto": `mailto:${profile.email}`,
  "hero.resume": profile.resumeUrl,
};
document.querySelectorAll("[data-bind-href]").forEach((n) => {
  const v = hrefs[n.dataset.bindHref];
  if (v) n.setAttribute("href", v);
});

document.title = `${profile.name} — ${profile.title}`;

/* ---------- stats ---------- */
$("#stats").innerHTML = stats
  .map(
    (s) => `<div class="stat">
      <div class="stat-value">${esc(s.value)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`
  )
  .join("");

/* ---------- education ---------- */
$("#educationCard").innerHTML = `
  <h3 class="card-label">Education</h3>
  <div class="edu-school">${esc(education.school)}</div>
  <div class="edu-degree">${esc(education.degree)}</div>
  <div class="edu-period">${esc(education.period)}</div>`;

/* ---------- stack ---------- */
$("#stackGrid").innerHTML = skills
  .map(
    (g) => `<div class="stack-card reveal">
      <h3 class="card-label">${esc(g.group)}</h3>
      ${chips(g.items)}
    </div>`
  )
  .join("");

/* ---------- experience timeline ---------- */
const chevron = `<svg class="job-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

$("#timeline").innerHTML = experience
  .map((job, i) => {
    const current = /present/i.test(job.period);
    const open = i === 0;
    return `<div class="tl-item reveal ${current ? "current" : ""}">
      <article class="job ${open ? "open" : ""}">
        <button class="job-head" type="button" aria-expanded="${open}">
          <div class="job-head-main">
            <div class="job-top">
              <span class="job-company">${esc(job.company)}</span>
              ${current ? `<span class="badge">Current</span>` : ""}
              <span class="badge badge-domain">${esc(job.domain)}</span>
            </div>
            <div class="job-role">${esc(job.role)}</div>
            <div class="job-meta">${esc(job.period)} &nbsp;·&nbsp; ${esc(job.location)}</div>
            <p class="job-blurb">${esc(job.blurb)}</p>
          </div>
          ${chevron}
        </button>
        <div class="job-body">
          <div class="job-body-inner">
            <div class="job-body-pad">
              <ul class="hl-list">
                ${job.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
              </ul>
              <div class="job-stack">${chips(job.stack)}</div>
            </div>
          </div>
        </div>
      </article>
    </div>`;
  })
  .join("");

$("#timeline").addEventListener("click", (e) => {
  const btn = e.target.closest(".job-head");
  if (!btn) return;
  const job = btn.closest(".job");
  const nowOpen = !job.classList.contains("open");
  job.classList.toggle("open", nowOpen);
  btn.setAttribute("aria-expanded", String(nowOpen));
});

/* ---------- projects + filters ---------- */
const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];

$("#filters").innerHTML = allTags
  .map(
    (t, i) =>
      `<button class="filter ${i === 0 ? "active" : ""}" type="button" data-tag="${esc(t)}">${esc(t)}</button>`
  )
  .join("");

$("#projects").innerHTML = projects
  .map(
    (p) => `<article class="proj reveal" data-tags="${esc((p.tags || []).join("|"))}">
      <div class="proj-head">
        <h3 class="proj-name">${esc(p.name)}</h3>
      </div>
      <div class="proj-context">${esc(p.context)}</div>

      <div class="proj-block">
        <h4>Problem</h4>
        <p>${esc(p.problem)}</p>
      </div>
      <div class="proj-block">
        <h4>Approach</h4>
        <p>${esc(p.approach)}</p>
      </div>
      <div class="proj-block outcome">
        <h4>Outcome</h4>
        <p>${esc(p.outcome)}</p>
      </div>

      <div class="proj-foot">
        ${chips(p.stack)}
        ${
          p.repo
            ? `<a class="repo-link" href="${esc(p.repo)}" target="_blank" rel="noopener">
                 View source
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>
               </a>`
            : ""
        }
      </div>
    </article>`
  )
  .join("");

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
  btn.classList.add("active");
  const tag = btn.dataset.tag;
  document.querySelectorAll(".proj").forEach((card) => {
    const tags = (card.dataset.tags || "").split("|");
    card.classList.toggle("hidden", tag !== "All" && !tags.includes(tag));
  });
});

/* ---------- certifications ---------- */
$("#certGrid").innerHTML = certifications
  .map(
    (c) => `<div class="cert reveal">
      <span class="cert-name">${esc(c.name)}</span>
      <span class="cert-year">${esc(c.year)}</span>
    </div>`
  )
  .join("");

/* ---------- contact links ---------- */
const contacts = [
  { label: "Email", href: `mailto:${profile.email}`, primary: true },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}` },
].filter((c) => c.href && !/^(mailto:|tel:)?$/.test(c.href));

$("#contactLinks").innerHTML = contacts
  .map(
    (c) =>
      `<a class="btn ${c.primary ? "btn-primary" : "btn-ghost"}" href="${esc(c.href)}"${
        c.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""
      }>${esc(c.label)}</a>`
  )
  .join("");

/* ---------- hide résumé button if file is missing ---------- */
(async () => {
  const link = $("#resumeLink");
  if (!link || location.protocol === "file:") return;
  try {
    const res = await fetch(profile.resumeUrl, { method: "HEAD" });
    if (!res.ok) link.remove();
  } catch {
    link.remove();
  }
})();

/* ---------- theme ---------- */
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.dataset.theme = "light";
}
$("#themeToggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

/* ---------- mobile nav ---------- */
const navToggle = $("#navToggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- nav shadow on scroll ---------- */
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- scroll reveal ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((n, i) => {
  n.style.transitionDelay = `${Math.min(i % 6, 5) * 55}ms`;
  revealObserver.observe(n);
});

/* ---------- active section in nav ---------- */
const sections = ["about", "stack", "experience", "work", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navMap = new Map(
  [...document.querySelectorAll(".nav-links a")].map((a) => [a.getAttribute("href").slice(1), a])
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navMap.forEach((a) => a.classList.remove("active"));
      navMap.get(entry.target.id)?.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));
