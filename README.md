# HsnHacks Website

This repository contains the Next.js site for the HSN Hacks hackathon.

## Prerequisites
- Node.js 18.17+ (or the version bundled with the latest LTS release)
- npm 9+ (bundled with Node.js) or Yarn 1.x/2.x

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to view the site. Edits inside the `app/` directory hot-reload automatically.

## Project Structure
- `app/` - App Router pages, layouts, and shared UI (`_components/`).
- `public/` - Static assets such as sponsor logos and the favicon.
- `styles` are managed via Tailwind classes declared in `app/globals.css`.

## Available Scripts
- `npm run dev` - Launches the Next.js development server.
- `npm run build` - Creates an optimized production build in `.next/`.
- `npm start` - Serves the production build locally (runs after `npm run build`).
- `npm run lint` - Runs ESLint using the Next.js configuration.

## Environment Configuration
No secrets are required for the basic site. If you add APIs or dynamic features, store any keys in a `.env.local` file (ignored by git) and read them with `process.env`.

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `.next` output to your hosting provider.

**Recommended:** Deploy with Vercel. Connect your repository, set the framework to Next.js, and Vercel will handle builds automatically.

For other platforms, ensure Node.js 18+ is available, run `npm install` followed by `npm run build`, and start the server with `npm start`.
