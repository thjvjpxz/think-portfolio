# Nguyễn Kim Thi — Portfolio

Personal portfolio website built with Next.js 16, showcasing backend engineering experience, projects, and skills.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| i18n | next-intl |
| Font | Space Grotesk, DM Sans, JetBrains Mono |
| Package Manager | pnpm |

## Features

- Bilingual support: Vietnamese (default) and English via `/vi/` and `/en/` URL prefixes
- Dark-themed glassmorphism design
- Typing animation in hero section
- Smooth scroll navigation
- Responsive layout for desktop and mobile
- Contact form UI

## Project Structure

```
app/
  [locale]/           Next.js locale routing
    layout.tsx
    page.tsx
  components/         UI sections
  hooks/              Custom React hooks
  globals.css         Design tokens and base styles
messages/
  vi.json             Vietnamese translations
  en.json             English translations
i18n/
  routing.ts          Locale configuration
  request.ts          next-intl server config
data/                 Structured content (typed)
proxy.ts              next-intl routing proxy (Next.js 16)
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects automatically to `/vi/`.

## Locales

| URL | Language |
|---|---|
| `/vi/` | Tiếng Việt (default) |
| `/en/` | English |

Switch language using the locale button in the top-right navigation bar.

## Build

```bash
pnpm build
pnpm start
```
