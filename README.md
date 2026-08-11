# ag3l-site

Website for **AG3L Assurances** — a bilingual (FR / EN) static site built with
[Vite](https://vitejs.dev/) + [Tailwind CSS](https://tailwindcss.com/).

- **Live site:** https://ag3l.ca
- **Hosting:** GitHub Pages, deployed automatically by GitHub Actions on every
  push to `main`.

---

## How to make a change (the short version)

1. Edit the **source** files (see [Project layout](#project-layout)).
2. Commit and push to `main`.
3. Wait ~1–2 minutes. GitHub builds the site and deploys it automatically.
4. Hard-refresh the site to see it: **Cmd/Ctrl + Shift + R**.

> You never edit or commit the `dist/` folder — it is the build output and is
> produced automatically by GitHub. Only edit the source files.

Watch a deploy happen here:
**https://github.com/nijiati-abulizi/ag3l-site/actions**

---

## Editing content

The pages are plain HTML. Edit the file for the page and language you want:

| Page | French | English |
|------|--------|---------|
| Home | `index.html` | `en/index.html` |
| About | `about.html` | `en/about.html` |
| Who we are | `who.html` | `en/who.html` |
| Services | `services.html` | `en/services.html` |
| Team | `equipe.html` | `en/team.html` |
| Contact | `contact.html` | `en/contact.html` |

- **Links** are just `<a href="...">`. Internal links start with `/`
  (e.g. `/contact.html`, `/en/contact.html`).
- **Images** live in `public/assets/img/` and are referenced as
  `/assets/img/<name>` in the HTML.
- **Styles** are Tailwind utility classes in the HTML, plus custom CSS in
  `src/styles.css`. Small interactive bits are in `src/app.js`.

---

## Running it locally (optional)

Only needed if you want to preview changes on your own computer before pushing.
Requires [Node.js](https://nodejs.org/) 20+.

```bash
npm install      # first time only — installs dependencies
npm run dev      # start a local preview at http://localhost:5173
```

Other commands:

```bash
npm run build    # build the production site into dist/ (CI does this for you)
npm run preview  # preview the built site locally
```

> If you clone this repo fresh, run `npm install` once. Dependencies
> (`node_modules/`) are **not** stored in git — that is normal.

---

## Project layout

```
.
├── index.html, about.html, …   # French pages (source)
├── en/                         # English pages (source)
├── src/                        # styles.css, app.js, main.js
├── public/                     # static files copied as-is into the build
│   ├── assets/img/             # images
│   ├── CNAME                   # custom domain (ag3l.ca) — do not remove
│   └── .nojekyll               # tells Pages not to run Jekyll
├── .github/workflows/deploy.yml# builds & deploys on every push to main
├── vite.config.js              # lists every page so Vite builds them all
├── tailwind.config.js
└── dist/                       # BUILD OUTPUT — auto-generated, not in git
```

### Adding a brand-new page

1. Create the `.html` file (copy an existing page as a starting point).
2. Add it to the `input` list in `vite.config.js` so it gets built.
3. Commit and push.

---

## How deployment works

`.github/workflows/deploy.yml` runs on every push to `main`:

1. `npm ci` — installs dependencies from `package-lock.json`.
2. `npm run build` — Vite builds the site into `dist/` (and copies `CNAME` +
   `.nojekyll` from `public/`).
3. The `dist/` folder is published to GitHub Pages, which serves `ag3l.ca`.

Nothing to run by hand — pushing to `main` is the deploy.

### Custom domain
The domain `ag3l.ca` is kept working by `public/CNAME`. Leave that file in
place. If the domain ever stops resolving, check
**Settings → Pages → Custom domain** in the GitHub repo.
