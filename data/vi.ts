import type { PortfolioData } from "./types";

export const viPortfolioData: PortfolioData = {
  hero: {
    role: "PHP / Backend Developer",
    summary: "Backend developer tập trung vào hệ thống PHP legacy, automation vận hành và luồng dữ liệu cần độ tin cậy cao.",
    facts: [
      "2+ năm kinh nghiệm",
      "Nâng cấp CakePHP 2.x -> 5.x",
      "Queue & Scheduler Laravel",
      "Đồng bộ PLC -> SQL Server",
      "Database locks & Retry logic"
    ],
    contactLinks: {
      github: "https://github.com/thjvjpxz",
      email: "mailto:thi12a3qv2@gmail.com",
      cv: "/api/cv?locale=vi"
    }
  },
  capabilities: {
    title: "Năng lực chuyên môn",
    blocks: [
      {
        title: "Migration & Kiểm soát rủi ro",
        evidencePoints: [
          "Có kinh nghiệm trực tiếp migrate hệ thống legacy CakePHP 2.x lên 5.x.",
          "Phân tích phạm vi ảnh hưởng và xử lý lỗi logic cũ để giảm rủi ro regression.",
          "Đảm bảo tính tương thích cho các luồng nghiệp vụ cốt lõi sau khi nâng cấp."
        ]
      },
      {
        title: "Vận hành & Tự động hoá",
        evidencePoints: [
          "Phát triển Laravel scheduled jobs và queue workers cho các tác vụ email tự động.",
          "Quản lý trạng thái xử lý, triển khai cơ chế retry và logging chi tiết.",
          "Thiết lập luồng hoạt động ổn định và dễ dàng theo dõi trên production."
        ]
      },
      {
        title: "API, Database & Đồng bộ dữ liệu",
        evidencePoints: [
          "Thiết kế REST API và tối ưu luồng đồng bộ dữ liệu giữa các hệ thống (ví dụ: PLC về SQL Server).",
          "Áp dụng database locks, retry và logging để bảo vệ toàn vẹn dữ liệu.",
          "Làm việc tốt với SQL queries, phân tích schema và các ràng buộc dữ liệu."
        ]
      }
    ]
  },
  experience: {
    title: "Kinh nghiệm làm việc",
    items: [
      {
        id: "ntq-solution",
        company: "NTQ Solution JSC.",
        role: "Backend Developer",
        period: "06/2026 - Hiện tại",
        responsibilities: [
          "Gia nhập NTQ Solution từ 06/2026 trong vai trò Backend Developer."
        ],
        stack: ["PHP", "Laravel", "SQL", "Docker"],
        active: true
      },
      {
        id: "kaopiz-software",
        company: "Kaopiz Software",
        role: "Backend Developer",
        period: "10/2025 - 05/2026",
        responsibilities: [
          "Nâng cấp hệ thống legacy CakePHP 2.x lên 5.x, đảm bảo tương thích logic nghiệp vụ.",
          "Xây dựng luồng gửi email nhắc nhở tự động bằng Laravel scheduled jobs và queue.",
          "Phát triển công cụ nội bộ hỗ trợ kiểm thử AI và đồng bộ dữ liệu qua UI, cronjob, webhook."
        ],
        stack: ["PHP", "CakePHP", "Laravel", "Python", "Flask", "React", "PostgreSQL", "Docker"],
        active: false
      },
      {
        id: "ngan-giang-technology",
        company: "CÔNG TY TNHH THƯƠNG MẠI VÀ PHÁT TRIỂN CÔNG NGHỆ NGÂN GIANG",
        role: "Kỹ sư phần mềm",
        period: "11/2023 - 05/2025",
        responsibilities: [
          "Phát triển module quản lý sản xuất cho hệ thống SIFMES.",
          "Xây dựng SOAP Service đồng bộ dữ liệu tự động từ PLC về SQL Server.",
          "Xử lý logic tính phần trăm hoàn thành theo giai đoạn/trạm và hiển thị trên UI."
        ],
        stack: ["PHP", "Laravel", "C#", "SOAP", "SQL Server"],
        active: false
      }
    ]
  },
  professionalProjects: {
    title: "Dự án chuyên nghiệp",
    items: [
      {
        id: "ai-testing-tool",
        name: "Công cụ nội bộ hỗ trợ kiểm thử AI & đồng bộ dữ liệu",
        period: "04/2026 - 05/2026",
        company: "Kaopiz Software",
        role: "Full-stack Developer",
        description: "Công cụ nội bộ hỗ trợ kiểm thử AI và đồng bộ dữ liệu giữa hai hệ thống qua UI, cronjob định kỳ và webhook.",
        stack: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
        highlights: [
          "Thiết kế luồng mapping dữ liệu.",
          "Quản lý trạng thái đồng bộ, database lock, retry và logging để đảm bảo tính toàn vẹn dữ liệu."
        ]
      },
      {
        id: "cakephp-migration",
        name: "Nâng cấp hệ thống legacy CakePHP 2.x lên 5.x",
        period: "10/2025 - 04/2026",
        company: "Kaopiz Software",
        role: "Full-stack Developer",
        description: "Nâng cấp hệ thống backend legacy từ CakePHP 2.x lên 5.x, đảm bảo tương thích các luồng nghiệp vụ chính sau migration.",
        stack: ["PHP", "CakePHP", "SQL", "Git"],
        highlights: [
          "Migrate các màn hình và controller.",
          "Điều tra lỗi phát sinh và lỗi logic từ version 2.x, phân tích phạm vi ảnh hưởng và smoke test để giảm rủi ro regression."
        ]
      },
      {
        id: "laravel-email-automation",
        name: "Email automation bằng Laravel scheduled jobs và queue",
        period: "10/2025 - 11/2025",
        company: "Kaopiz Software",
        role: "Backend Developer",
        description: "Xây dựng luồng gửi email nhắc nhở tự động phục vụ vận hành hệ thống.",
        stack: ["PHP", "Laravel", "Scheduler/Cron", "Queue", "Database", "Logging"],
        highlights: [
          "Phát triển scheduled command và dispatch job qua queue.",
          "Quản lý trạng thái gửi, retry và log lỗi để hỗ trợ theo dõi vận hành."
        ]
      },
      {
        id: "sifmes-plc-sync",
        name: "Hệ thống quản lý sản xuất SIFMES và đồng bộ dữ liệu PLC",
        period: "11/2023 - 05/2025",
        company: "Ngân Giang",
        role: "Kỹ sư phần mềm",
        description: "Phát triển module quản lý sản xuất và luồng đồng bộ dữ liệu từ thiết bị về hệ thống quản lý.",
        stack: ["PHP", "Laravel", "C#", "SOAP", "SQL Server"],
        highlights: [
          "Xử lý logic phần trăm hoàn thành theo giai đoạn/trạm.",
          "Xây dựng SOAP Service đồng bộ dữ liệu từ PLC về SQL Server và hỗ trợ theo dõi tiến độ trên UI."
        ]
      }
    ]
  },
  publicProjects: {
    title: "Mã nguồn công khai (GitHub Samples)",
    items: [
      {
        id: "auto-gen-test-exam",
        title: "Auto Gen Test Exam",
        description: "Ứng dụng tạo đề thi bằng AI (FastAPI/Gemini/Next.js) với pipeline CI/CD và Docker Compose.",
        tags: ["FastAPI", "Next.js", "Gemini", "Docker"],
        githubUrl: "https://github.com/thjvjpxz/auto-gen-test-exam",
        icon: "sparkles",
        accentTextClass: "text-emerald-500",
        accentBgClass: "bg-emerald-50"
      },
      {
        id: "nen-tang-manga-thong-minh",
        title: "Nền tảng Manga tích hợp OCR & TTS",
        description: "Web app full-stack trích xuất lời thoại từ ảnh truyện tranh và đọc thành tiếng (Spring Boot/Next.js).",
        tags: ["Spring Boot", "Next.js", "OCR", "TTS"],
        githubUrl: "https://github.com/thjvjpxz/webtoonnkt",
        icon: "book",
        accentTextClass: "text-blue-500",
        accentBgClass: "bg-blue-50"
      },
      {
        id: "wp-update-video-to-youtube",
        title: "WordPress Auto-Sync YouTube",
        description: "Plugin và luồng tự động hoá PHP/WordPress để upload/sync video lên YouTube.",
        tags: ["WordPress", "PHP", "Docker"],
        githubUrl: "https://github.com/thjvjpxz/wp-update-video-to-youtube",
        icon: "video",
        accentTextClass: "text-red-500",
        accentBgClass: "bg-red-50"
      },
      {
        id: "edusmart",
        title: "EduSmart",
        description: "Nền tảng hỗ trợ học tập cá nhân hoá tích hợp Gemini AI (FastAPI, JWT, Next.js).",
        tags: ["FastAPI", "Next.js", "PostgreSQL"],
        githubUrl: "https://github.com/thjvjpxz/htkdtm-final",
        icon: "graduation-cap",
        accentTextClass: "text-sky-500",
        accentBgClass: "bg-sky-50"
      },
      {
        id: "personal-finance-app",
        title: "Personal Finance App",
        description: "Ứng dụng di động Flutter quản lý tài chính offline-first với Drift (SQLite) và Supabase.",
        tags: ["Flutter", "SQLite", "Supabase"],
        githubUrl: "https://github.com/thjvjpxz/personal_finance_app",
        icon: "wallet",
        accentTextClass: "text-lime-600",
        accentBgClass: "bg-lime-50"
      },
      {
        id: "truy-xuat-anh-theo-ket-cau",
        title: "Tìm kiếm ảnh dựa trên kết cấu",
        description: "Thuật toán xử lý ảnh bằng C# WinForms sử dụng bộ lọc Gabor để trích xuất đặc trưng.",
        tags: ["C#", "WinForms", "Gabor"],
        icon: "search",
        accentTextClass: "text-purple-500",
        accentBgClass: "bg-purple-50"
      }
    ]
  },
  skills: {
    title: "Kỹ năng chuyên môn",
    categories: [
      {
        id: "languages",
        title: "Ngôn ngữ & Framework",
        items: ["PHP (Laravel, CakePHP)", "Java (Spring Boot)", "Python (Flask)", "TypeScript (Next.js)", "C#"]
      },
      {
        id: "databases",
        title: "Cơ sở dữ liệu",
        items: ["SQL Server", "MySQL", "PostgreSQL", "SQL queries & indexing", "Database locks"]
      },
      {
        id: "systems",
        title: "Hệ thống & API",
        items: ["RESTful API", "Scheduled jobs", "Queue jobs & workers", "Data synchronization", "SOAP"]
      },
      {
        id: "tools",
        title: "Công cụ & Hạ tầng",
        items: ["Docker / Compose", "Git / GitHub", "Postman", "Linux / Shell", "Makefile"]
      }
    ]
  },
  education: {
    title: "Học vấn",
    university: "Đại Học Thuỷ Lợi",
    degree: "Khoa CNTT / Hệ Thống Thông Tin",
    period: "2021 - 2025",
    badge: "Giỏi",
    achievements: [
      "GPA tích lũy: 3.27/4.0",
      "Học bổng Xuất sắc (Kỳ II năm học 2022-2023)"
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
