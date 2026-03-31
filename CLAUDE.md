# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Astro dev server
- `npm run build` — Production build (output: `dist/`)
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

Astro 6 static site with MDX support, deployed to Cloudflare Pages. Single-page personal site (index.astro) with a blog detail page (`/blog/[slug]`).

**Layouts:** `BaseLayout.astro` wraps the homepage; `BlogPostLayout.astro` wraps blog posts with its own reading controls toolbar (font, size, line-height), theme toggle, and breadcrumb nav — it does NOT use BaseLayout.

**Content collections** (defined in `src/content.config.ts`): `blog` (`.mdx`/`.md`), `projects`, `talks`, `hackathons`. All use glob loaders pointing to `src/content/<collection>/`. Blog posts with `draft: true` are filtered out at query time.

**Site config** (`src/config.ts`): Exports `SITE`, `SOCIAL`, `READING_FONTS`, `FONT_SIZES`, `LINE_HEIGHTS`. Reading experience settings (fonts, sizes, line heights) are configured here — follow the instructions in the file comments when adding new fonts.

**MDX components:** Custom components for MDX are mapped in `src/pages/blog/[slug].astro` via the `components` object passed to `<Content>`.

**Theming:** Dark/light via `data-theme` attribute on `<html>`, persisted to localStorage. CSS custom properties defined in `src/styles/global.css`.

## Deployment

Pushes to `main` auto-deploy via Cloudflare Pages. Wrangler config in `wrangler.toml`.
