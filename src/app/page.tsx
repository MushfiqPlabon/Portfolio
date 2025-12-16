import Layout from "@/components/layout/layout";
import HeroSection from "@/components/sections/hero";
import ExperienceTimeline from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import CertificationsSection from "@/components/sections/certifications";
import LanguagesSpokenSection from "@/components/sections/languages-spoken";
import InterestsSection from "@/components/sections/interests";
import ContactSection from "@/components/sections/contact";
import { getPortfolioData } from "@/lib/data";

export default async function Home() {
  // Load portfolio data with caching for better performance
  const portfolioData = await getPortfolioData();

  return (
    <Layout>
      <HeroSection personalInfo={portfolioData.personalInfo} />
      <ExperienceTimeline experiences={portfolioData.experience} />
      <EducationSection education={portfolioData.education} />
      <ProjectsSection projects={portfolioData.projects} />
      <SkillsSection skills={portfolioData.skills} />
      <CertificationsSection certifications={portfolioData.certifications} />
      <LanguagesSpokenSection languages={portfolioData.languagesSpoken} />
      <InterestsSection interests={portfolioData.interests} />
      <ContactSection />
    </Layout>
  );
}