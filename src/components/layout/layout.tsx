import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-foreground">
      <Header />
      <main className="flex-grow pt-[max(4vh,4rem)]" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;