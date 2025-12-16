import Image from "next/image";
import Layout from "@/components/layout/layout";
import { getPortfolioData } from "@/lib/data";

export default async function About() {
  const portfolioData = await getPortfolioData();

  return (
    <Layout>
      <div className="py-[max(3vh,2rem)] px-4">
        <div className="max-w-[min(90vw,1200px)] mx-auto">
          <h1 className="text-[var(--fluid-text-4xl)] md:text-[var(--fluid-text-5xl)] font-bold mb-12 text-center">
            About <span className="text-primary-accent">Me</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1 flex justify-center">
              <div className="bg-glass-white bg-opacity-100 backdrop-blur-lg border border-glass-border rounded-2xl p-1 w-64 h-64 flex items-center justify-center">
                <Image
                  src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "https://res.cloudinary.com/djyxbgv9s/image/upload/v1765779054/1000002113_2_v2rkmi.jpg"}
                  alt="Mushfiqur Rahman Plaban"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-primary-accent">{portfolioData.personalInfo.name}</h2>
              <p className="text-xl mb-4">{portfolioData.personalInfo.title}</p>
              <p className="text-foreground mb-6">{portfolioData.personalInfo.objective}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-lg p-4">
                  <p className="text-foreground text-sm">Location</p>
                  <p className="text-foreground">{portfolioData.personalInfo.location}</p>
                </div>
                <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-lg p-4">
                  <p className="text-foreground text-sm">Email</p>
                  <p className="text-foreground">{portfolioData.personalInfo.links.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary-accent">Professional Journey</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground">
                My journey in technology began with a passion for problem-solving and creating digital solutions.
                With a background in business management and a specialized education in computer science fundamentals,
                I{"'"}ve uniquely positioned myself to bridge the gap between technical execution and business strategy.
              </p>
              <p className="text-foreground">
                From taking over family business operations after my father{"'"}s passing to diving deep into web technologies
                and full-stack development, my path has been marked by adaptability and continuous learning.
                Today, I combine my technical skills with business acumen to deliver well-round and impactful applications.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary-accent">Approach & Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-accent">Interdisciplinary Thinking</h3>
                <p className="text-foreground">
                  I believe in leveraging diverse experiences to create comprehensive solutions that address both technical and business needs.
                </p>
              </div>
              <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-accent">Continuous Learning</h3>
                <p className="text-foreground">
                  Staying updated with the latest technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-accent">User-Centric Design</h3>
                <p className="text-foreground">
                  Ensuring that every solution is built with the end-user experience in mind.
                </p>
              </div>
              <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-accent">Efficiency & Scalability</h3>
                <p className="text-foreground">
                  Creating applications that are not only functional but also optimized for performance and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}