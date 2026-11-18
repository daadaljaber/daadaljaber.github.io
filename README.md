# Daad Aljaber — Personal Portfolio

Personal website of **Daad Aljaber**, Information Systems student (Cybersecurity track) at Prince Sultan University, with interests in cybersecurity consulting, governance, risk & compliance (GRC), and technology.

**Live site:** https://daadaljaber.github.io

> **Repository description** (paste into the GitHub “About” box):
> Personal portfolio of Daad Aljaber — Information Systems & Cybersecurity student focused on cybersecurity consulting and GRC. Built with plain HTML, CSS and JavaScript; hosted on GitHub Pages.
>
> **Suggested topics:** `portfolio` `cybersecurity` `grc` `github-pages` `html` `css` `javascript`

---

## Features

- Plain HTML5, CSS3 and JavaScript — no frameworks, no build step, no dependencies.
- All content (experience, projects, skills, links) lives in **one file**: `assets/js/data.js`.
- Empty fields are hidden automatically, so unfinished details never appear on the live site.
- Responsive from mobile to wide desktop; keyboard-accessible navigation and project panels; respects “reduce motion”.
- SEO: page title and description, Open Graph preview image, structured data (schema.org `Person`), `sitemap.xml`, `robots.txt`.
- Contact form that opens the visitor’s email app, or posts to [Formspree](https://formspree.io) if you add an endpoint.
- Custom 404 page.

## Repository structure

```
daadaljaber.github.io/
├── index.html                 # Page structure, metadata, hero and About text
├── 404.html                   # “Page not found” page
├── assets/
│   ├── css/
│   │   └── style.css          # All styles; colours and type are tokens at the top
│   ├── js/
│   │   ├── data.js            # ← ALL editable content lives here
│   │   └── main.js            # Rendering, navigation, hero animation, form
│   ├── img/
│   │   ├── favicon.svg
│   │   ├── og-image.png       # Image shown when the link is shared (1200×630)
│   │   └── projects/          # Project previews (replace with screenshots)
│   └── cv/
│       └── Daad-Aljaber-CV.pdf  # Placeholder — replace with your CV
├── robots.txt
├── sitemap.xml
├── .nojekyll                  # Tells GitHub Pages to serve files as-is
├── LICENSE
└── README.md
```

## Updating content

| To change…                               | Edit                                   |
|------------------------------------------|----------------------------------------|
| Email, LinkedIn, GitHub, CV path         | `profile` in `assets/js/data.js`       |
| Education, experience, projects          | `assets/js/data.js`                    |
| Certifications, skills, leadership       | `assets/js/data.js`                    |
| Hero introduction and About biography    | `index.html` (sections `hero`, `about`) |
| Colours, fonts, spacing                  | Tokens at the top of `assets/css/style.css` |
| CV                                       | Replace `assets/cv/Daad-Aljaber-CV.pdf` (keep the name) |
| Project screenshots                      | Add images to `assets/img/projects/` and update each project’s `image` path |

Every entry in `data.js` is a `{ ... }` block. To add one, copy a block, paste it below, and edit the text. Fields left as `""` or `[]` are not displayed. Search the file for `TODO` to see what still needs your details.

### Before going live — checklist

- [ ] `profile.email` — add your professional email (the contact form needs it)
- [ ] `profile.linkedin` — add your LinkedIn URL
- [ ] Replace the placeholder CV PDF
- [ ] Fill dates and descriptions for Riyad Bank, Tuwaiq Academy, McKinsey.org Forward and CRS
- [ ] Fill details and GitHub links for COOP CV Builder, FitSync and Cybersecurity Labs
- [ ] Replace project preview SVGs with real screenshots (about 1600×1200, 4:3)
- [ ] Remove any skill you can’t point to evidence for

### Optional: receive form messages without email apps

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint (for example `https://formspree.io/f/abcdwxyz`).
2. Paste it into `profile.formEndpoint` in `data.js`.

## Run locally

No build step. Either open `index.html` directly in a browser, or serve the folder (recommended, so paths behave exactly as on GitHub Pages):

```bash
# from the repository folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

The repository **must be named `<your-username>.github.io`** for the site to live at the root URL. For the GitHub account `daadaljaber`, that is **`daadaljaber.github.io`**.

1. **Create the repository** on GitHub: name `daadaljaber.github.io`, Public, no README (this project already has one).
2. **Push the code:**
   ```bash
   cd daadaljaber.github.io
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/daadaljaber/daadaljaber.github.io.git
   git push -u origin main
   ```
   Or upload the files with **Add file → Upload files** on the GitHub website (drag in the folder contents, including the hidden `.nojekyll` file).
3. **Turn on Pages:** repository **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://daadaljaber.github.io**. The **Actions** tab shows deployment progress.
5. Paste the repository description and topics from the top of this README into the repository’s **About** panel.

**Updating later:** edit files, commit, and push. GitHub Pages redeploys automatically.

### Using a different repository name

If you publish from another repository (for example `portfolio`), the site will be at `https://daadaljaber.github.io/portfolio/`. Update the `canonical` and `og:` URLs in `index.html`, the URLs in `sitemap.xml` and `robots.txt`, and change the `/assets/...` paths in `404.html` to `/portfolio/assets/...`.

### Custom domain (optional)

Add your domain under **Settings → Pages → Custom domain**, create the DNS records GitHub lists, then update the URLs in `index.html`, `sitemap.xml` and `robots.txt`.

## License

Code is MIT-licensed. Personal content (text, CV, images) is not; see `LICENSE`.
