# tarso.dev

Personal website and blog for Giorgi Tarsaidze, built with [Astro](https://astro.build/) and MDX.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Blogs

Create a new `.mdx` file in `src/content/blog/`:

```yaml
---
title: "My Post Title"
date: 2026-01-15
excerpt: "A short description of the post."
coverImage: "/images/my-cover.jpg"  # optional
draft: false
---

Your markdown content here.
```

### Projects

Create a new `.md` file in `src/content/projects/`:

```yaml
---
title: "Project Name"
github: "https://github.com/user/repo"
description: "Short description of the project."
---
```

## Deployment

The site deploys to Cloudflare Pages. Every push to `main` triggers a build.

- Build command: `npm run build`
- Output directory: `dist`
