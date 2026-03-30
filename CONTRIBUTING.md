# Contributing

Thanks for your interest in contributing to tarso.dev!

## Editing Content

All prose content lives in `src/content/` as Markdown/MDX files. To suggest an edit:

1. Fork the repository
2. Edit the relevant file in `src/content/blog/` or `src/content/projects/`
3. Submit a pull request with a brief description of your changes

### Blogs

Files in `src/content/blog/` use MDX format. Each file needs frontmatter:

```yaml
---
title: "Post Title"
date: 2026-01-15
excerpt: "Short description."
coverImage: "/images/cover.jpg"  # optional
draft: false
---
```

### Projects

Files in `src/content/projects/` use Markdown. Each file needs frontmatter:

```yaml
---
title: "Project Name"
github: "https://github.com/user/repo"
description: "Short description."
---
```

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Guidelines

- Keep blog post file names lowercase with hyphens (e.g., `my-post-title.mdx`)
- Place images in `public/images/` and reference them as `/images/filename.jpg`
- Run `npm run build` before submitting to make sure the site builds cleanly
