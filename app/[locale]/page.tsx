import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import { getPortfolioData } from "@/data";

const About = dynamic(() => import("@/app/components/About"), { ssr: true });
const Experience = dynamic(() => import("@/app/components/Experience"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/app/components/Projects"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/app/components/Skills"), { ssr: true });
const Education = dynamic(() => import("@/app/components/Education"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/app/components/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/app/components/Footer"), { ssr: true });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

async function JsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const url = `${baseUrl}/${locale}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nguyễn Kim Thi",
    jobTitle: t("jobTitle"),
    url,
    email: "thi12a3qv2@gmail.com",
    sameAs: ["https://github.com/thjvjpxz"],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Laravel",
      "PHP",
      "Docker",
      "FastAPI",
      "Next.js",
      "CakePHP"
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nguyen Kim Thi Portfolio",
    url: baseUrl,
    inLanguage: [locale === "vi" ? "vi-VN" : "en-US"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const portfolioData = getPortfolioData(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Education data={portfolioData.education} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer />
    </>
  );
}
