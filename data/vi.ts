import type { PortfolioData } from "./types";

export const viPortfolioData: PortfolioData = {
  about: {
    title: "Về tôi",
    paragraphs: [
      "Tôi là Backend Developer định hướng sản phẩm, chuyên xây dựng hệ thống phía máy chủ ổn định, bảo mật và có khả năng mở rộng theo tăng trưởng thực tế.",
      "Từ Java/Spring Boot và PHP (Laravel, CakePHP) đến FastAPI, tôi thường phụ trách thiết kế API, mô hình dữ liệu, xác thực và container hoá để đội ngũ triển khai nhất quán từ local đến production.",
      "Thông qua các dự án public trên GitHub, tôi theo đuổi tư duy kỹ thuật rõ ràng: kiến trúc tách lớp, clean code, và quy trình kỹ luật với lint/test để xử lý các bài toán như OCR/TTS, AI exam generation, automation WordPress và nền tảng học tập tích hợp Gemini.",
    ],
    stats: [
      { value: "2+", label: "Kinh nghiệm làm việc" },
      { value: "12+", label: "Dự án hoàn thành" },
      { value: "3.27", label: "GPA Đại học" },
      { value: "Giỏi", label: "Xếp loại tốt nghiệp" },
    ],
  },
  projects: {
    title: "Dự án nổi bật",
    items: [
      {
        id: "nen-tang-manga-thong-minh",
        title: "Nền tảng Website truyện tranh thông minh tích hợp OCR và TTS",
        description:
          "Tự phát triển trang web hoàn chỉnh bằng Java Spring Boot (Backend) và Next.js (Frontend). Tích hợp tính năng thông minh: OCR để trích xuất lời thoại từ ảnh và TTS để chuyển văn bản thành giọng nói.",
        tags: ["#Spring Boot", "#Next.js", "#OCR", "#TTS"],
        icon: "book",
        accentTextClass: "text-[#3abff8]",
        accentBgClass: "bg-[#3abff8]/10",
        links: [
          {
            href: "https://github.com/thjvjpxz/webtoonnkt",
            ariaLabel:
              "Mở dự án Nền tảng Website truyện tranh thông minh tích hợp OCR và TTS",
          },
        ],
        metaLabel: "Lập trình viên Full-stack",
      },
      {
        id: "personal-finance-app",
        title: "Personal Finance App (Flutter, ưu tiên offline)",
        description:
          "Dự án được triển khai theo hướng vibe coding để tăng tốc MVP: tôi dùng AI để scaffold nhanh, rồi tự rà soát kiến trúc và chỉnh luồng dữ liệu quan trọng. Ứng dụng quản lý tài chính cá nhân đa nền tảng được xây dựng bằng Flutter, tổ chức state management với Riverpod, lưu trữ local theo hướng offline-first bằng Drift (SQLite), và tích hợp Supabase cho xác thực/tính năng cloud. Điều hướng bằng go_router, hiển thị biểu đồ thống kê và hỗ trợ xuất dữ liệu CSV + chia sẻ.",
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
            ariaLabel: "Mở repository Personal Finance App",
          },
        ],
        metaLabel: "Flutter Developer",
      },
      {
        id: "auto-gen-test-exam",
        title: "Auto Gen Test Exam (Ứng dụng tạo đề thi bằng AI)",
        description:
          "Đây là dự án vibe coding theo hướng full-stack AI: tôi dùng AI để tăng tốc phát triển, sau đó tập trung kiểm soát chất lượng API, cấu trúc module và quy trình chạy thật. Backend dùng FastAPI (Python) để điều phối Gemini API và cung cấp REST API; frontend dùng Next.js để xây dựng giao diện người dùng. Dự án có pipeline CI/CD theo Git workflow và đang deploy frontend trên Vercel, backend trên Render; đồng thời hỗ trợ chạy local nhanh bằng Docker Compose và Makefile cho cài đặt, test và lint.",
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
            ariaLabel: "Mở repository Auto Gen Test Exam",
          },
        ],
        metaLabel: "Lập trình viên Full-stack",
      },
      {
        id: "wp-update-video-to-youtube",
        title: "WordPress: Tự động cập nhật/đồng bộ video lên YouTube",
        description:
          "Xây dựng một giải pháp trên nền WordPress (chủ yếu PHP) để tự động hoá việc cập nhật/đồng bộ nội dung video lên YouTube. Dự án được đóng gói bằng Docker Compose để chạy local nhanh, kèm script cài dependencies cho các plugin bằng Composer trong wp-content/plugins.",
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
            ariaLabel: "Mở repository wp-update-video-to-youtube",
          },
        ],
        metaLabel: "WordPress",
      },
      {
        id: "edusmart-htkdtm-final",
        title: "EduSmart – Nền tảng hỗ trợ học tập bằng AI",
        description:
          "Xây dựng ứng dụng web full-stack hỗ trợ học tập cá nhân hoá. Frontend dùng Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui, tích hợp NextAuth cho đăng nhập/xác thực. Backend dùng FastAPI + SQLAlchemy ORM + JWT, có tài liệu OpenAPI/Swagger, và tích hợp Google Gemini AI để triển khai các tính năng AI chat/hỗ trợ học tập.",
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
            ariaLabel: "Mở repository EduSmart (htkdtm-final)",
          },
        ],
        metaLabel: "Nhóm trưởng",
      },
      {
        id: "truy-xuat-anh-theo-ket-cau",
        title: "Hệ thống tìm kiếm ảnh dựa trên kết cấu",
        description:
          "Dẫn dắt nhóm lên kế hoạch và phát triển ứng dụng (bài tập lớn). Trực tiếp lập trình thuật toán xử lý ảnh bằng C# WinForms, xây dựng bộ lọc Gabor để trích xuất đặc trưng.",
        tags: ["#C-Sharp", "#WinForms", "#Gabor Filters", "#Image Processing"],
        icon: "search",
        accentTextClass: "text-purple-400",
        accentBgClass: "bg-purple-500/10",
        metaLabel: "Nhóm trưởng",
      },
    ],
  },
  experience: {
    title: "Kinh nghiệm làm việc",
    items: [
      {
        id: "kaopiz-software",
        role: "Backend Developer",
        company: "Kaopiz Software",
        period: "10/2025 - Hiện tại",
        description:
          "Hiện đang tham gia dự án nâng cấp CakePHP và một dự án nội bộ ứng dụng AI để tối ưu hóa quy trình kiểm thử.",
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
        role: "Kỹ sư phần mềm",
        company: "CÔNG TY TNHH THƯƠNG MẠI VÀ PHÁT TRIỂN CÔNG NGHỆ NGÂN GIANG",
        period: "11/2023 - 05/2025",
        description:
          "Tham gia hai dự án: SIFMES được phát triển bằng Laravel và dự án LiDAR được xây dựng bằng Windows Forms.",
        tags: ["Laravel", "Windows Forms", "C#", "Python", "Database"],
        active: false,
      },
    ],
  },
  skills: {
    title: "Kho vũ khí kỹ thuật",
    categories: [
      {
        id: "languages",
        title: "Ngôn ngữ",
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
        title: "Công cụ & Hạ tầng",
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
    title: "Học vấn",
    university: "Đại Học Thuỷ Lợi",
    degree: "Khoa Công Nghệ Thông Tin / Ngành Hệ Thống Thông Tin",
    period: "2021 - 2025",
    badge: "Tốt nghiệp loại Giỏi",
    achievements: [
      "GPA tích lũy: 3.27/4.0",
      "Học bổng loại Xuất sắc, học kỳ II năm học 2022-2023",
    ],
  },
  contact: {
    email: "thi12a3qv2@gmail.com",
    githubUrl: "https://github.com/thjvjpxz",
    githubText: "github.com/thjvjpxz",
  },
};
