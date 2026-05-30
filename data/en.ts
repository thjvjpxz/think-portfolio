import type { PortfolioData } from "./types";

export const enPortfolioData: PortfolioData = {
  hero: {
    role: "PHP / Backend Developer",
    summary: "Backend Developer with 2+ years of experience maintaining, upgrading, and integrating backend systems.",
    facts: [
      "2+ years experience",
      "CakePHP 2.x -> 5.x",
      "Queue / Scheduler",
      "Data sync & database locks"
    ],
    contactLinks: {
      github: "https://github.com/thjvjpxz",
      email: "mailto:thi12a3qv2@gmail.com",
      cv: "/api/cv?locale=en"
    }
  },
  capabilities: {
    title: "Capabilities",
    blocks: [
      {
        title: "Legacy migration & Regression risk",
        evidencePoints: [
          "Hands-on experience migrating legacy CakePHP 2.x systems to 5.x.",
          "Analyzed impact scopes and resolved old logic bugs to mitigate regression risks.",
          "Ensured compatibility for core business flows post-migration."
        ]
      },
      {
        title: "Backend operations & Automation",
        evidencePoints: [
          "Developed Laravel scheduled jobs and queue workers for email automation.",
          "Managed job states, implemented retry mechanisms, and detailed logging.",
          "Built stable operational flows that are easy to monitor in production."
        ]
      },
      {
        title: "API, Database & Data sync",
        evidencePoints: [
          "Designed REST APIs and optimized data synchronization between systems (e.g., PLC to SQL Server).",
          "Applied database locks, retries, and logging to protect data integrity.",
          "Proficient in SQL queries, schema analysis, and handling data constraints."
        ]
      }
    ]
  },
  experience: {
    title: "Work Experience",
    items: [
      {
        id: "kaopiz-software",
        company: "Kaopiz Software",
        role: "Backend Developer",
        period: "10/2025 - Present",
        responsibilities: [
          "Upgrading legacy CakePHP 2.x system to 5.x, ensuring business logic compatibility.",
          "Building automated email reminder workflows using Laravel scheduled jobs and queues.",
          "Developing an internal AI testing and data synchronization tool using UI, cronjobs, and webhooks."
        ],
        stack: ["PHP", "CakePHP", "Laravel", "Python", "Flask", "React", "PostgreSQL", "Docker"],
        active: true
      },
      {
        id: "ngan-giang-technology",
        company: "NGAN GIANG TECHNOLOGY TRADING AND DEVELOPMENT CO., LTD",
        role: "Software Engineer",
        period: "11/2023 - 05/2025",
        responsibilities: [
          "Developed production management modules for the SIFMES system.",
          "Built a SOAP Service for automated data synchronization from PLCs to SQL Server.",
          "Handled percentage completion logic across phases/stations and displayed it on the UI."
        ],
        stack: ["PHP", "Laravel", "C#", "SOAP", "SQL Server"],
        active: false
      }
    ]
  },
  professionalProjects: {
    title: "Professional Work",
    items: [
      {
        id: "ai-testing-tool",
        name: "Internal AI Testing & Data Sync Tool",
        period: "04/2026 - Present",
        company: "Kaopiz Software",
        role: "Full-stack Developer",
        description: "Internal tool to support AI testing and synchronize data between two systems via UI, periodic cronjobs, and webhooks.",
        stack: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
        highlights: [
          "Designed the data mapping flow.",
          "Managed synchronization states, database locks, retries, and logging to ensure data integrity."
        ]
      },
      {
        id: "cakephp-migration",
        name: "Legacy CakePHP 2.x to 5.x Migration",
        period: "10/2025 - 04/2026",
        company: "Kaopiz Software",
        role: "Full-stack Developer",
        description: "Upgraded a legacy backend system from CakePHP 2.x to 5.x, ensuring core business flows remained compatible.",
        stack: ["PHP", "CakePHP", "SQL", "Git"],
        highlights: [
          "Migrated screens and controllers.",
          "Investigated logic bugs from version 2.x, analyzed impact scopes, and performed smoke tests to reduce regression risks."
        ]
      },
      {
        id: "laravel-email-automation",
        name: "Email Automation via Laravel Scheduled Jobs & Queues",
        period: "10/2025 - 11/2025",
        company: "Kaopiz Software",
        role: "Backend Developer",
        description: "Built an automated email reminder flow to support system operations.",
        stack: ["PHP", "Laravel", "Scheduler/Cron", "Queue", "Database", "Logging"],
        highlights: [
          "Developed scheduled commands and dispatched jobs via queues.",
          "Managed delivery states, retries, and error logs for operational monitoring."
        ]
      },
      {
        id: "sifmes-plc-sync",
        name: "SIFMES Production Management & PLC Data Sync",
        period: "11/2023 - 05/2025",
        company: "Ngan Giang",
        role: "Software Engineer",
        description: "Developed a production management module and a data synchronization flow from devices to the management system.",
        stack: ["PHP", "Laravel", "C#", "SOAP", "SQL Server"],
        highlights: [
          "Handled percentage completion logic across phases/stations.",
          "Built a SOAP Service to sync data from PLCs to SQL Server and track progress on the UI."
        ]
      }
    ]
  },
  publicProjects: {
    title: "Public Code Samples (GitHub)",
    items: [
      {
        id: "auto-gen-test-exam",
        title: "Auto Gen Test Exam",
        description: "AI-based exam generation app (FastAPI/Gemini/Next.js) with CI/CD pipeline and Docker Compose.",
        tags: ["FastAPI", "Next.js", "Gemini", "Docker"],
        githubUrl: "https://github.com/thjvjpxz/auto-gen-test-exam",
        icon: "sparkles",
        accentTextClass: "text-emerald-500",
        accentBgClass: "bg-emerald-50"
      },
      {
        id: "nen-tang-manga-thong-minh",
        title: "Smart Manga Platform (OCR & TTS)",
        description: "Full-stack web app extracting dialog from manga images and reading them aloud (Spring Boot/Next.js).",
        tags: ["Spring Boot", "Next.js", "OCR", "TTS"],
        githubUrl: "https://github.com/thjvjpxz/webtoonnkt",
        icon: "book",
        accentTextClass: "text-blue-500",
        accentBgClass: "bg-blue-50"
      },
      {
        id: "wp-update-video-to-youtube",
        title: "WordPress Auto-Sync YouTube",
        description: "PHP/WordPress automation flow to upload and sync videos to YouTube.",
        tags: ["WordPress", "PHP", "Docker"],
        githubUrl: "https://github.com/thjvjpxz/wp-update-video-to-youtube",
        icon: "video",
        accentTextClass: "text-red-500",
        accentBgClass: "bg-red-50"
      },
      {
        id: "edusmart",
        title: "EduSmart",
        description: "Personalized learning platform integrated with Gemini AI (FastAPI, JWT, Next.js).",
        tags: ["FastAPI", "Next.js", "PostgreSQL"],
        githubUrl: "https://github.com/thjvjpxz/htkdtm-final",
        icon: "graduation-cap",
        accentTextClass: "text-sky-500",
        accentBgClass: "bg-sky-50"
      },
      {
        id: "personal-finance-app",
        title: "Personal Finance App",
        description: "Offline-first Flutter mobile app for personal finance using Drift (SQLite) and Supabase.",
        tags: ["Flutter", "SQLite", "Supabase"],
        githubUrl: "https://github.com/thjvjpxz/personal_finance_app",
        icon: "wallet",
        accentTextClass: "text-lime-600",
        accentBgClass: "bg-lime-50"
      },
      {
        id: "truy-xuat-anh-theo-ket-cau",
        title: "Texture-based Image Retrieval",
        description: "Image processing algorithm in C# WinForms using Gabor filters for feature extraction.",
        tags: ["C#", "WinForms", "Gabor"],
        icon: "search",
        accentTextClass: "text-purple-500",
        accentBgClass: "bg-purple-50"
      }
    ]
  },
  skills: {
    title: "Skills",
    categories: [
      {
        id: "languages",
        title: "Languages & Frameworks",
        items: ["PHP (Laravel, CakePHP)", "Java (Spring Boot)", "Python (Flask)", "TypeScript (Next.js)", "C#"]
      },
      {
        id: "databases",
        title: "Databases",
        items: ["SQL Server", "MySQL", "PostgreSQL", "SQL queries & indexing", "Database locks"]
      },
      {
        id: "systems",
        title: "Systems & API",
        items: ["RESTful API", "Scheduled jobs", "Queue jobs & workers", "Data synchronization", "SOAP"]
      },
      {
        id: "tools",
        title: "Tools & Infrastructure",
        items: ["Docker / Compose", "Git / GitHub", "Postman", "Linux / Shell", "Makefile"]
      }
    ]
  },
  education: {
    title: "Education",
    university: "Thuy Loi University",
    degree: "Information Systems",
    period: "2021 - 2025",
    badge: "Good",
    achievements: [
      "Cumulative GPA: 3.27/4.0",
      "Excellent Scholarship (Semester II, 2022-2023)"
    ]
  },
  contact: {
    email: "thi12a3qv2@gmail.com",
    phone: "0369.219.100",
    website: "https://kimthi1708.id.vn",
    githubUrl: "https://github.com/thjvjpxz",
    githubText: "github.com/thjvjpxz"
  }
};
