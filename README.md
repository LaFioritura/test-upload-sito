# Notebook 666

An ongoing personal research notebook mapping correspondence systems, numerology, and cosmological
hierarchies across esoteric thought — centered, chapter by chapter, on Rudolf Steiner's anthroposophy.
Built with **Vite + React + React Router**, set in system Helvetica, laid out like a Swiss-poster field
guide rather than a wiki.

No author's name is attached to it by design. It's meant to be picked up, checked against its sources,
and extended by anyone.

## What changed in this version

- **Language**: fully in English.
- **Depth**: every entry was rewritten and substantially expanded — more sources, more specifics, more
  connective tissue between entries.
- **The diagram**: no longer a tree or a flowchart. The homepage now shows a scattered constellation of
  twelve terms with no top node and no required reading order — click any term, or ignore the diagram
  entirely and use the index below it.
- **Typeface**: the whole site is set in system Helvetica (`Helvetica Neue, Helvetica, Arial,
  sans-serif`). Helvetica itself isn't a web font that can be legally bundled and shipped, so the site
  relies on the real thing where the visitor's OS has it (mostly macOS and iOS) and falls back to Arial,
  its closest metric match, everywhere else — which is the standard, licensing-safe way to "use
  Helvetica" on the web.
- **Look**: a bold red/blue/yellow system on black and white, thick rules, big numerals — closer to
  Swiss International Style than to a research-paper template, while keeping the sourcing discipline
  that made the earlier versions of this project usable as reference material.
- **The opening**: the homepage and the new `/method` entry no longer lead with Steiner's name. They lead
  with the pattern — correspondence systems in general — and name him only once the method that makes
  him worth this much attention has been laid out. Every entry after `/method` uses his name freely.
- **Images**: see the note below — this version uses a small set of original graphic icons instead of
  photographs.

## A note on the images

This notebook doesn't embed photographs of real artworks, real historical photos of Steiner or the
Goetheanum, or reproductions of paintings by Kandinsky or Hilma af Klint, even though several entries
describe exactly those things. Two practical reasons: first, a public repository is not a safe place to
guess at image licensing — public-domain status depends on jurisdiction and on the specific photograph
or scan, not just on how long ago the artist died, and getting it wrong in a permanent, redistributable
project is a real risk rather than a theoretical one. Second, embedding real photos would have meant a
patchwork of licenses and visual styles across twenty-six entries, working against the single, deliberate
graphic identity this version is trying to build.

Instead, `src/components/Icons.jsx` holds a small set of original flat icons — a sun, a scale, a spiral,
a network, a seed, a flame, a crystal, a double figure, a compass, a beam, a book, roots — drawn for this
project in the site's own red/blue/yellow system, and placed at the top of each entry to match its
theme. If you want to replace any of them with a properly licensed photograph later, each `PageHead` call
takes an `icon` prop — swap it for an `<img>` and it'll sit in the same spot.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # to check the build locally
```

## Structure

```
notebook-666/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx                  every route
│   ├── index.css                the entire visual system, one file
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── PageHead.jsx          tag + icon + title + dek, used by every entry
│   │   ├── Diagram.jsx           the constellation diagram
│   │   ├── Icons.jsx             the original icon set
│   │   ├── SeeAlso.jsx
│   │   └── Sources.jsx
│   └── pages/                    26 entries, one component each
└── README.md
```

## Publish to GitHub

```bash
git init
git add .
git commit -m "Notebook 666"
git branch -M main
git remote add origin https://github.com/<your-username>/notebook-666.git
git push -u origin main
```

## Deploy on Vercel

Import the repository at [vercel.com](https://vercel.com). Vercel auto-detects Vite; build command and
output directory are filled in automatically. Deploy. Every push to `main` updates the live site.

## Adding an entry

1. Copy an existing page in `src/pages/` as a template.
2. Add its route in `src/App.jsx`.
3. Add it to the `GROUPS` array in `src/pages/Home.jsx`, in the right thematic group.
4. If it's central enough to earn a place in the opening diagram, add a node in
   `src/components/Diagram.jsx` — no hierarchy, so it can go anywhere.
5. Keep the notebook's one hard rule: original doctrine (grouped under Cosmology, The Three Powers,
   Applied) stays clearly separate from later reception and outside comparisons (grouped under Reception
   & Comparisons). Mixing the two is the one mistake this project tries hardest to avoid.

## License

Code and layout: MIT. The text is an original synthesis drawn from the sources cited at the bottom of
each entry — check them before republishing anything from here elsewhere.
