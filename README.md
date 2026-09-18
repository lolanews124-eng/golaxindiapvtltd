# Golax India — Next.js

Next.js migration of the Golax India corporate website (SEO-first static site).

## Stack

- Next.js 16 (App Router + SSG)
- Tailwind CSS v3 + shadcn/ui
- Static data files (locations, blog, services)
- Forms → mailto (opens user’s email app to contact@golaxindia.com)


## Folder structure

```
golax-next/          ← This project (NEW)
Golax_india/         ← Original Vite project (unchanged)
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Generates 508 static pages
npm start        # Production server
```

## Contact forms

Website forms open the visitor’s email app with a pre-filled message to `contact@golaxindia.com` (mailto). There is no admin panel or lead database.

## SEO

- `/sitemap.xml` — auto-generated from all routes
- `/robots.txt` — auto-generated
- Per-page metadata via Next.js Metadata API
- JSON-LD schema on location & service pages

## What was removed (by design)

- AI chat widget
- Supabase integration
- Admin panel / lead database

## Deploy

Push to GitHub → connect to Vercel → set domain `golaxindiapvtltd.in`
