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

## CI/CD (GitHub Actions + Cloud Run)

This repo includes:

- `CI`: runs `pnpm lint` and `pnpm build` on pull requests and pushes to `main`
- `Deploy Cloud Run`: manual deployment workflow (`workflow_dispatch`) using Docker

### 1) Required GitHub repository variables

Configure these in **Settings > Secrets and variables > Actions > Variables**:

- `GCP_PROJECT_ID` (example: `my-gcp-project`)
- `GCP_REGION` (example: `asia-southeast1`)
- `GCP_ARTIFACT_REPOSITORY` (example: `portfolio-images`)
- `CLOUD_RUN_SERVICE` (example: `think-portfolio`)

### 2) Required GitHub repository secrets

Configure these in **Settings > Secrets and variables > Actions > Secrets**:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

### 3) One-time Google Cloud setup

Enable APIs:

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com iamcredentials.googleapis.com
```

Create Artifact Registry (if not created):

```bash
gcloud artifacts repositories create portfolio-images \
  --repository-format=docker \
  --location=asia-southeast1
```

Grant deploy permissions to the service account used by GitHub Actions:

```bash
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL" \
  --role="roles/iam.serviceAccountUser"
```

### 4) Deploy

In GitHub, go to **Actions > Deploy Cloud Run > Run workflow**.

After first deploy, set runtime secrets/env vars in Cloud Run service:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
