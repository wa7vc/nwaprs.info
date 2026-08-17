# nwaprs.info

Site for Northwest APRS (NWAPRS), built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Development

```sh
npm install
npm run dev
```

This runs Eleventy's dev server (`http://localhost:8080`) and the Tailwind CLI watcher side by side. Eleventy handles templates/content; Tailwind compiles `src/assets/css/tailwind.css` straight into `_site/assets/css/style.css`, and Eleventy is configured to live-reload when that file changes.

## Production build

```sh
npm run build
```

Runs Eleventy once, then Tailwind with `--minify`, into `_site/`.

## Structure

- `src/_data/` — global data: site metadata, FAQ entries, link directories, build-time info
- `src/_includes/layouts/` — `base.njk` (html shell), `page.njk` (generic pages), `station-config.njk` (TNC/digipeater settings pages)
- `src/_includes/partials/` — header, footer, SEO head
- `src/_includes/components/` — reusable pieces: info tables, FAQ accordion, link lists, and the retro decorative bits (beacon pulse)
- `src/station-config/` — the 5 station/digipeater settings pages, sharing a layout via the directory data file `station-config.json`; `src/station-config-overview.njk` is the "Station Configuration" hub page they nest under in the nav
- Nav is driven entirely by `eleventyNavigation` front matter on each page — no separate nav data file to keep in sync
