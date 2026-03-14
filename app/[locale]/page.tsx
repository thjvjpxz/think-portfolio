import dynamic from "next/dynamic";
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const portfolioData = getPortfolioData(locale);

  return (
    <>
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
