## Portfolio Template (Next.js + TypeScript)

A reusable portfolio template with:
- Light and dark mode toggle
- Neutral Tailwind color system
- Max-width container layout
- Component-based sections (hero, projects, experience)
- Subtle hover micro-interactions
- SEO metadata (Open Graph + Twitter + robots)

## Run Locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Template Content

Edit `src/lib/portfolio-content.ts` to update:
- Name and bio
- Skills
- Featured projects
- Side projects
- Experience entries

The UI components consume this typed content, so you can reuse the template quickly for other profiles.

## SEO Settings

Update site-level metadata in `src/app/layout.tsx`:
- `metadataBase`
- `title` / `description`
- `keywords`
- Open Graph + Twitter fields

## Build and Lint

```bash
npm run lint
npm run build
```

## Deploy

Deploy on [Vercel](https://vercel.com/) or any Node-compatible platform that supports Next.js App Router.
