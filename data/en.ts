import type { PortfolioData } from "./types";

export const enPortfolioData: PortfolioData = {
  about: {
    title: "About Me",
    paragraphs: [
      "I am a product-minded Backend Developer focused on building server-side systems that are stable, secure, and scalable as real usage grows.",
      "From Java/Spring Boot and PHP (Laravel, CakePHP) to FastAPI, I typically own API design, data modeling, authentication flows, and containerized delivery so teams can ship consistently from local to production.",
      "Across my public GitHub projects, I prioritize clear architecture, clean code, and disciplined engineering workflows with linting/testing to solve problems like OCR/TTS, AI-powered exam generation, WordPress automation, and Gemini-integrated learning platforms.",
    ],
    stats: [
      { value: "2+", label: "Professional Experience" },
      { value: "12+", label: "Projects Completed" },
      { value: "3.27", label: "University GPA" },
      { value: "Good", label: "Graduation Class" },
    ],
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        id: "smart-manga-platform",
        title: "Smart Manga Website Platform with OCR and TTS",
        description:
          "Independently built a complete website using Java Spring Boot (Backend) and Next.js (Frontend). Integrated intelligent features: OCR for extracting dialogue from images and TTS for converting text into speech.",
        tags: ["#Spring Boot", "#Next.js", "#OCR", "#Text-to-Speech"],
        icon: "book",
        accentTextClass: "text-[#3abff8]",
        accentBgClass: "bg-[#3abff8]/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/webtoonnkt",
            ariaLabel:
              "Open Smart Manga Website Platform with OCR and TTS project",
          },
        ],
        metaLabel: "Full-stack Developer",
      },
      {
        id: "personal-finance-app",
        title: "Personal Finance App (Flutter, Offline-first)",
        description:
          "This project was built with a vibe coding approach to accelerate MVP delivery: I used AI to speed up scaffolding, then manually reviewed architecture and stabilized critical data flows. Developed a cross-platform personal finance mobile app with Flutter, using Riverpod for state management, Drift (SQLite) for offline-first local storage, and Supabase for authentication/cloud features. Added navigation with go_router, data visualization with charts, and CSV export/sharing utilities.",
        tags: [
          "#Flutter",
          "#Dart",
          "#Riverpod",
          "#SQLite",
          "#Drift",
          "#Supabase",
          "#go_router",
          "#Mobile App",
        ],
        icon: "wallet",
        accentTextClass: "text-lime-400",
        accentBgClass: "bg-lime-500/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/personal_finance_app",
            ariaLabel: "Open Personal Finance App repository",
          },
        ],
        metaLabel: "Flutter Developer",
      },
      {
        id: "auto-gen-test-exam",
        title: "Auto Gen Test Exam (AI-Powered Exam Generator)",
        description:
          "This is a vibe-coded full-stack AI project: I used AI to accelerate implementation, then focused on API quality, module structure, and production readiness. The backend uses FastAPI (Python) to orchestrate Gemini API and expose REST endpoints, while the frontend is built with Next.js. The project includes a Git-based CI/CD workflow and is currently deployed with the frontend on Vercel and the backend on Render, plus local development support via Docker Compose and Makefile for setup, testing, and linting.",
        tags: [
          "#FastAPI",
          "#Next.js",
          "#Gemini API",
          "#Docker Compose",
          "#Full-stack",
        ],
        icon: "sparkles",
        accentTextClass: "text-emerald-400",
        accentBgClass: "bg-emerald-500/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/auto-gen-test-exam",
            ariaLabel: "Open Auto Gen Test Exam repository",
          },
        ],
        metaLabel: "Full-stack Developer",
      },
      {
        id: "wp-update-video-to-youtube",
        title: "WordPress: Auto Update/Sync Videos to YouTube",
        description:
          "Developed a WordPress-based solution (PHP-focused) to automate updating/syncing video content to YouTube. The project is containerized with Docker Compose for quick local setup, and includes a workflow to install plugin dependencies via Composer inside wp-content/plugins.",
        tags: [
          "#WordPress",
          "#PHP",
          "#Docker Compose",
          "#Composer",
          "#Automation",
        ],
        icon: "video",
        accentTextClass: "text-red-400",
        accentBgClass: "bg-red-500/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/wp-update-video-to-youtube",
            ariaLabel: "Open wp-update-video-to-youtube repository",
          },
        ],
        metaLabel: "WordPress Developer",
      },
      {
        id: "edusmart-htkdtm-final",
        title: "EduSmart – AI-Powered Learning Assistant Platform",
        description:
          "Built a full-stack web application for personalized learning support. Frontend is developed with Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui and uses NextAuth for authentication. Backend is implemented with FastAPI, SQLAlchemy ORM, JWT auth, and OpenAPI/Swagger documentation, with Google Gemini AI integrated to power the AI chat and learning features.",
        tags: [
          "#Next.js",
          "#TypeScript",
          "#FastAPI",
          "#PostgreSQL",
          "#JWT",
          "#NextAuth",
          "#Gemini AI",
          "#TailwindCSS",
        ],
        icon: "graduation-cap",
        accentTextClass: "text-sky-400",
        accentBgClass: "bg-sky-500/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/htkdtm-final",
            ariaLabel: "Open EduSmart (htkdtm-final) repository",
          },
        ],
        metaLabel: "Team Leader",
      },
      {
        id: "texture-image-retrieval",
        title: "Texture-Based Image Search System",
        description:
          "Led the team in planning and developing the application as a major coursework project. Directly implemented image-processing algorithms using C# WinForms and built Gabor filters for feature extraction.",
        tags: ["#C-Sharp", "#WinForms", "#Gabor Filters", "#Image Processing"],
        icon: "search",
        accentTextClass: "text-purple-400",
        accentBgClass: "bg-purple-500/10",
        metaLabel: "Team Leader",
      },
    ],
  },
  experience: {
    title: "Work Experience",
    items: [
      {
        id: "kaopiz-software",
        role: "Backend Developer",
        company: "Kaopiz Software",
        period: "10/2025 - Present",
        description:
          "Currently working on a CakePHP upgrade project and an internal AI initiative to streamline tester workflows.",
        tags: [
          "Laravel",
          "CakePHP",
          "Next.js",
          "Flask",
          "Docker",
          "Database",
          "API",
          "AI",
        ],
        active: true,
      },
      {
        id: "ngan-giang-technology",
        role: "Software Engineer",
        company: "OE- GALAXY CO., LTD",
        period: "11/2023 - 05/2025",
        description:
          "Contributed to two distinct projects: SIFMES built with Laravel and a LiDAR project implemented with Windows Forms.",
        tags: ["Laravel", "Windows Forms", "C#"],
        active: false,
      },
    ],
  },
  skills: {
    title: "Technical Arsenal",
    categories: [
      {
        id: "languages",
        title: "Languages",
        items: ["Java", "PHP", "Python", "TypeScript", "SQL", "C#"],
      },
      {
        id: "frameworks",
        title: "Frameworks & Platforms",
        items: [
          "Spring Boot",
          "Laravel",
          "CakePHP",
          "FastAPI",
          "Next.js",
          "Flutter",
          "Riverpod",
          "Windows Forms",
        ],
      },
      {
        id: "tools",
        title: "Tools & Infra",
        items: [
          "Docker",
          "Docker Compose",
          "Git / GitHub",
          "MySQL",
          "PostgreSQL",
          "Supabase",
          "Drift (SQLite)",
          "Postman",
          "Makefile",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    university: "Thuy Loi University",
    degree: "Faculty of Information Technology / Major in Information Systems",
    period: "2021 - 2025",
    badge: "Graduated with Good classification",
    achievements: [
      "Cumulative GPA: 3.27/4.0",
      "Excellent scholarship, Semester II, Academic Year 2022-2023",
    ],
  },
  contact: {
    email: "thi12a3qv2@gmail.com",
    githubUrl: "https://github.com/thjvjpxz",
    githubText: "github.com/thjvjpxz",
  },
};
