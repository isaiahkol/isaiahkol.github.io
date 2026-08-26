# Isaiah Kol — Engineering Portfolio

A static React/Vite portfolio configured for GitHub Pages and the custom domain `isaiahkol.com`.

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address printed in the terminal. To verify the production build:

```bash
npm run build
```

## Where to make common edits

- Homepage copy and cards: `src/App.tsx`
- Project writing and media order: `src/project-data.ts`
- Colors, typography, and layout: `src/styles.css`
- Images and videos: `public/media/`
- Custom domain: `public/CNAME`

See `MIGRATION_GUIDE.md` for the safe replacement and rollback process.
