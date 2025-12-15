import { PortfolioData } from "@/types";
import { unstable_cache } from 'next/cache';

// Utility function to get portfolio data
// Use Next.js unstable_cache for server-side caching
const getCachedPortfolioData = unstable_cache(
  async () => {
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
        }
      }
    };

    return portfolioData;
  },
  ['portfolio-data'],
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['portfolio']
  }
);

export async function getPortfolioData(): Promise<PortfolioData> {
  return await getCachedPortfolioData();
}