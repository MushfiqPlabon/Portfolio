import { PortfolioData } from "@/types";

// Utility function to get portfolio data (no caching)
export async function getPortfolioData(): Promise<PortfolioData> {
  const dataModule = await import("../../data/data.json");
  let portfolioData = dataModule.default as PortfolioData;

  // Merge environment variables with the static data to eliminate redundancy
  // This allows environment variables to override the static data
  portfolioData = {
    ...portfolioData,
    personalInfo: {
      ...portfolioData.personalInfo,
      location: process.env.NEXT_PUBLIC_ADDRESS || portfolioData.personalInfo.location,
      links: {
        ...portfolioData.personalInfo.links,
        email: process.env.NEXT_PUBLIC_EMAIL || portfolioData.personalInfo.links.email,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || portfolioData.personalInfo.links.linkedin,
        github: process.env.NEXT_PUBLIC_GITHUB_URL || portfolioData.personalInfo.links.github,
        resume: process.env.NEXT_PUBLIC_RESUME || portfolioData.personalInfo.links.resume,
      }
    }
  };

  return portfolioData;
}