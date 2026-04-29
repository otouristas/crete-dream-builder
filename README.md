# Crete Dream Builder — Kagiampakis Residences

Next.js (App Router) marketing site for **Kagiampakis Residences**, a traditional stone villa in Avdou, Crete.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploying on Vercel

1. Import this repository in [Vercel](https://vercel.com) and use the default Next.js preset (install command `npm install`, build `npm run build`, output `.next`).
2. Set **environment variable** `NEXT_PUBLIC_SITE_URL` to your canonical public URL, for example `https://www.your-domain.com` (no trailing slash). This drives:
   - `metadataBase` and absolute Open Graph / Twitter image URLs in [`src/app/layout.tsx`](src/app/layout.tsx)
   - URLs in [`src/app/sitemap.ts`](src/app/sitemap.ts) and [`src/app/robots.ts`](src/app/robots.ts)
3. If `NEXT_PUBLIC_SITE_URL` is omitted, the app falls back to `VERCEL_URL` (preview/production) or `http://localhost:3000` for local builds.

Static assets for the gallery and branding live under [`public/`](public/) (`/logo.png`, `/property/*.jpg`). Optional [`public/llms.txt`](public/llms.txt) summarizes the property for humans and LLM crawlers.
