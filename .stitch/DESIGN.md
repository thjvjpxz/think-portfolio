# Design System: Nguyen Kim Thi Portfolio
**Project ID:** 10743930912041421117
**Screen ID:** 1842185abcad440c922722a1b8437f23

## 1. Visual Theme & Atmosphere

A commanding, developer-grade dark theme that evokes the feeling of a futuristic terminal control room. The aesthetic blends IDE-inspired elements (terminal mockups, monospace code blocks, git-status-style outputs) with modern glassmorphism surfaces. High-contrast Electric Cyan accents pop against the deep space black canvas, creating visual energy without sacrificing readability. The overall mood is: **precise, technically sophisticated, and confidently minimal**.

## 2. Color Palette & Roles

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Background** | Deep Space Black | `#0a0a0f` | Page background, input field backgrounds |
| **Surface** | Glass Dark | `rgba(255,255,255,0.03)` | Card backgrounds, glass containers |
| **Surface Border** | Frosted Edge | `rgba(255,255,255,0.08)` | Card borders, dividers, inactive pill badges |
| **Primary Accent** | Electric Cyan | `#3abff8` | CTAs, links, active states, section highlights, glow effects |
| **Primary Glow** | Cyan Aura | `rgba(58,191,248,0.3–0.5)` | Box-shadow glow on buttons and active elements |
| **Success / Active** | Emerald Signal | `#10b981` / `green-400` | Active job indicator, success states, graduation badge |
| **Text Primary** | Clean White | `slate-100` (~`#f1f5f9`) | Headings, names, primary content |
| **Text Secondary** | Quiet Slate | `slate-300` (~`#cbd5e1`) | Subheadings, nav links, tech tag labels |
| **Text Muted** | Fog Gray | `slate-400` (~`#94a3b8`) | Body copy, descriptions, captions |
| **Terminal BG** | GitHub Dark | `#0d1117` | Terminal mockup background |
| **Terminal Chrome** | Panel Dark | `#161b22` | Terminal title bar background |
| **Gradient Text** | Cyan-to-Blue | `from-primary to-blue-500` | Name highlight in hero section |
| **Project Accent — Manga** | Cyan | `cyan-500` | Smart Manga project card border/icon |
| **Project Accent — Finance** | Lime | `lime-500` | Personal Finance project card |
| **Project Accent — Exam** | Emerald | `emerald-500` | Auto Gen Test Exam project card |
| **Project Accent — WordPress** | Red Signal | `red-500` | WordPress YouTube Sync project card |
| **Project Accent — EduSmart** | Sky | `sky-500` | EduSmart AI project card |
| **Project Accent — Texture** | Purple | `purple-500` | Texture Image Search project card |

## 3. Typography Rules

| Element | Font Family | Weight | Size | Character |
|---------|------------|--------|------|-----------|
| **Display / Hero Name** | Space Grotesk | Black (900) | 5xl–7xl (`text-5xl lg:text-7xl`) | Tight tracking, commanding presence |
| **Section Headings** | Space Grotesk | Bold (700) | 3xl (`text-3xl`) | Clean, authoritative |
| **Card Titles** | Space Grotesk | Bold (700) | xl (`text-xl`) | Solid, readable |
| **Body Copy** | Space Grotesk | Regular (400) | sm–base | Relaxed leading, comfortable reading |
| **Code / Terminal / Tags** | Fira Code | Regular–Medium (400–500) | xs–sm | Monospace, developer-authentic feel |
| **Nav Links** | Space Grotesk | Medium (500) | sm | Clean, unobtrusive |
| **Stat Numbers** | Space Grotesk | Bold (700) | 3xl | Large, impactful accent numbers |
| **Labels / Captions** | Space Grotesk | Medium (500) | xs–sm | Subtle, informational |

## 4. Component Stylings

### Buttons
- **Primary CTA**: Electric Cyan (`bg-primary`) fill, Dark text (`text-background-dark`), rounded-lg (8px), bold font, cyan glow shadow (`shadow-[0_0_15px_rgba(58,191,248,0.3)]`), intensifying glow on hover (`shadow-[0_0_25px_rgba(58,191,248,0.5)]`)
- **Secondary / Ghost**: Glass surface (`bg-surface-dark`), frosted border (`border-surface-border`), white text, border brightens on hover

### Cards / Containers
- **Glass Card**: `bg-surface-dark` with `border border-surface-border`, generously rounded (`rounded-xl`, 12px), `backdrop-blur-sm`, border transitions to `primary/30` or `primary/50` on hover
- **Terminal Card**: GitHub Dark background (`#0d1117`), frosted border, deep shadow with primary glow (`shadow-2xl shadow-primary/10`), realistic traffic light dots (red/yellow/green)
- **Stat Cards**: Same glass-card pattern, `hover:border-primary/50` transition, Material icon in primary color

### Inputs / Forms
- **Text Input**: Dark background (`bg-background-dark`), frosted border, rounded-lg, focus state: cyan border + ring (`focus:border-primary focus:ring-1 focus:ring-primary`)
- **Textarea**: Same as input, fixed height (`h-32`), `resize-none`

### Pills / Badges
- **Tech Tag (in cards)**: Small rounded rectangles (`rounded`), `bg-surface-border`, monospace text in `slate-300`, `text-xs`
- **Skill Pill**: Pill-shaped (`rounded-full`), glass surface with border, monospace text, hover: border and text transition to primary
- **Active Tag**: `bg-primary/10` background with `text-primary` text
- **Status Badge**: Rounded-lg, `bg-surface-border`, icon + text, used for education achievements

### Timeline
- **Vertical Line**: `w-[2px]`, surface-border color with primary gradient fading from top
- **Active Node**: 24px circle, dark background, primary border, pulsing inner dot with cyan glow shadow
- **Inactive Node**: Same circle, surface-border color, transitions on hover

### Section Headers
- Heading text + decorative horizontal line: `h-px flex-1 bg-gradient-to-r from-surface-border to-transparent`

## 5. Layout Principles

- **Max Width**: `max-w-7xl` (~1280px) centered with `mx-auto`
- **Horizontal Padding**: `px-6` mobile, `lg:px-20` desktop
- **Section Spacing**: `gap-24` between major sections (96px), generous vertical rhythm
- **Section Internal Spacing**: `gap-8` (32px) between heading and content
- **Grid Patterns**:
  - Hero: `grid-cols-1 lg:grid-cols-2` (stacked on mobile, side-by-side on desktop)
  - Stats: `grid-cols-2 md:grid-cols-4`
  - Projects: `grid-cols-1 md:grid-cols-2`
  - Skills: `grid-cols-1 md:grid-cols-3`
  - Contact: `grid-cols-1 md:grid-cols-2`
- **Card Padding**: `p-6` standard, `p-8` for prominent cards (education)
- **Navbar**: Sticky top, `z-50`, glass background (`bg-background-dark/80 backdrop-blur-md`), border-bottom
- **Footer**: Full-width border-top, glass background, flexbox center alignment
