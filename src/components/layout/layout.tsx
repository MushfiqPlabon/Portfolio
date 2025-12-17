import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPortfolioData } from "@/lib/data";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const portfolioData = await getPortfolioData();
  
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-foreground">
      <Header />
      <main className="flex-grow pt-[max(4vh,4rem)]" id="main-content">
        {children}
      </main>
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
};

export default Layout;