# Jagadeesh Kakunuri — Portfolio

Single-page portfolio site. No build step, no framework, no dependencies.

## Run it

The site uses ES modules, so **opening `index.html` directly won't work** — you need a local server.

```bash
npx serve .
```

Or in Cursor/VS Code: install the **Live Server** extension → right-click `index.html` → *Open with Live Server*.

Or with Python:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173

## Project structure

```
portfolio/
├── index.html      # Markup + section scaffolding
├── styles.css      # All styling (design tokens at the top)
├── script.js       # Renders content from data.js, handles interactions
├── data.js         # ← ALL YOUR CONTENT LIVES HERE
└── assets/
    └── Jagadeesh_Kakunuri_Resume.pdf
```

## Editing

**Everything you'd want to change is in `data.js`.** Nothing else needs touching for content updates.

| What | Where in `data.js` |
|---|---|
| Name, contact, summary | `profile` |
| The four headline numbers | `stats` |
| Skill groups and chips | `skills` |
| Jobs and bullet points | `experience` |
| Project case studies | `projects` |
| Degree | `education` |
| Certifications | `certifications` |

### Before you publish — three things

1. **Add your GitHub URL.** `profile.github` is empty; the GitHub button in the contact section is hidden until you fill it in.
2. **Add repo links to projects.** Each project supports an optional `repo` field — uncomment it on the banking platform project and add links to any others you can share publicly. For a senior backend role, linkable code carries real weight.
3. **Check the résumé path.** `profile.resumeUrl` points at `assets/`. If the file is missing, the Résumé button removes itself automatically when served over HTTP.

### Colors

Change the accent in one place — `--accent` in `styles.css`:

```css
:root {
  --accent: #4f9cf9;   /* the blue used throughout */
}
```

Light and dark themes are both defined; the toggle in the nav switches between them and remembers the choice.

## Notes on the content

The `projects` entries are written in **Problem → Approach → Outcome** form. That's deliberate — it's how you'd narrate a system in a design interview, and it reads far better to a hiring manager than a list of technologies.

Two things worth strengthening as you iterate:

- **More numbers.** Right now only the 80% configuration-error reduction and the zero-downtime migration are quantified. Anything you can attach a figure to — throughput, p99 latency, request volume, data size, cost, incident reduction — makes the difference between "worked on" and "moved this by X."
- **Scope and ownership signals.** For senior roles, mention where you led design, mentored, set technical direction, or made an architectural call others followed.

## Deploy

Any static host works — it's three files and a PDF.

**Netlify / Vercel:** drag the folder onto the dashboard, or connect the repo. No build command, publish directory `.`

**GitHub Pages:**

```bash
git init && git add -A && git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

Then Settings → Pages → Deploy from branch → `main` / root.

## Browser support

Modern evergreen browsers. Uses ES modules, CSS custom properties, `color-mix()`, IntersectionObserver, and CSS grid row animation.
