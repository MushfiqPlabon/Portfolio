import Image from "next/image";
import Layout from "@/components/layout/layout";
import { getPortfolioData } from "@/lib/data";
import { GlassCard } from "@/components/glass/glass-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function About() {
  const portfolioData = await getPortfolioData();

  return (
    <Layout>
      <div className="py-[max(3vh,2rem)] px-4">
        <div className="max-w-[min(90vw,1200px)] mx-auto">
          {/* Hero Section with Typing Animation */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <div className="text-center mb-[clamp(1.5rem,3vw,2rem)]">
              <div className="mb-[clamp(1rem,2vw,1.5rem)]">
                <Image
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=2000&pause=500&color=2196F3&center=true&vCenter=true&width=600&lines=Mushfiqur+Rahman+Plaban;Developer+with+an+Operator's+Mindset;Systems+Thinker;Business-First+Developer"
                  alt="Typing Animation"
                  width={600}
                  height={60}
                  className="mx-auto"
                  unoptimized
                />
              </div>
              <p className="text-[var(--fluid-text-xl)] md:text-[var(--fluid-text-2xl)] font-semibold text-primary-accent italic mb-[clamp(1rem,2vw,1.5rem)]">
                &quot;I don&apos;t just write code. I architect resilient systems that aim to solve business problems.&quot;
              </p>
              
              {/* Social Badges */}
              <div className="flex flex-wrap justify-center gap-[clamp(0.5rem,1vw,0.75rem)] mb-[clamp(1.5rem,3vw,2rem)]">
                <Link href={portfolioData.personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white&style=flat-square" alt="LinkedIn" width={100} height={28} unoptimized />
                </Link>
                <Link href={portfolioData.personalInfo.links.github} target="_blank" rel="noopener noreferrer">
                  <Image src="https://img.shields.io/badge/GitHub-181717.svg?logo=github&logoColor=white&style=flat-square" alt="GitHub" width={90} height={28} unoptimized />
                </Link>
                <Link href={`mailto:${portfolioData.personalInfo.links.email}`}>
                  <Image src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white&style=flat-square" alt="Email" width={80} height={28} unoptimized />
                </Link>
                <Link href="https://facebook.com/hellraiser.mrp" target="_blank" rel="noopener noreferrer">
                  <Image src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white&style=flat-square" alt="Facebook" width={110} height={28} unoptimized />
                </Link>
                <Link href="https://instagram.com/hellraiser.mrp" target="_blank" rel="noopener noreferrer">
                  <Image src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white&style=flat-square" alt="Instagram" width={110} height={28} unoptimized />
                </Link>
              </div>
            </div>

            <Separator className="my-[clamp(1.5rem,3vw,2rem)]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--fluid-gap)]">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-[clamp(200px,30vw,300px)] h-[clamp(200px,30vw,300px)] rounded-2xl overflow-hidden border border-glass-border">
                  <Image
                    src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "https://res.cloudinary.com/djyxbgv9s/image/upload/v1765779054/1000002113_2_v2rkmi.jpg"}
                    alt={portfolioData.personalInfo.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(0.75rem,2vw,1rem)] text-primary-accent">{portfolioData.personalInfo.name}</h2>
                <p className="text-[var(--fluid-text-xl)] mb-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">{portfolioData.personalInfo.title}</p>
                <p className="text-foreground mb-[clamp(1rem,2vw,1.5rem)] leading-relaxed">{portfolioData.personalInfo.objective}</p>
                <div className="flex flex-wrap gap-[clamp(0.75rem,2vw,1rem)]">
                  <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground font-semibold">{portfolioData.personalInfo.location}</p>
                  </div>
                  <div className="bg-glass-white bg-opacity-100 backdrop-blur-sm border border-glass-border rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-foreground font-semibold">{portfolioData.personalInfo.links.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          {/* Business-Tech Bridge Section */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(1rem,2vw,1.5rem)] text-primary-accent">🌉 The Business-Tech Bridge</h2>
            <p className="text-foreground mb-[clamp(1rem,2vw,1.5rem)] leading-relaxed">
              My foundation isn&apos;t just code, it&apos;s <span className="font-bold text-primary-accent">Crisis Management</span>.
              Managing real-world business challenges, like critical transitions in my family&apos;s electronics business, taught me invaluable lessons:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(0.75rem,2vw,1rem)] mb-[clamp(1rem,2vw,1.5rem)]">
              <div className="bg-dark-bg bg-opacity-50 rounded-lg p-[clamp(0.75rem,2vw,1rem)] border border-glass-border">
                <span className="text-[var(--fluid-text-2xl)] mb-[clamp(0.25rem,1vw,0.5rem)] block">⏳</span>
                <p className="font-bold text-primary-accent mb-2">Downtime has real costs.</p>
                <p className="text-muted-foreground text-sm">Every minute counts.</p>
              </div>
              <div className="bg-dark-bg bg-opacity-50 rounded-lg p-[clamp(0.75rem,2vw,1rem)] border border-glass-border">
                <span className="text-[var(--fluid-text-2xl)] mb-[clamp(0.25rem,1vw,0.5rem)] block">🛡️</span>
                <p className="font-bold text-primary-accent mb-[clamp(0.25rem,1vw,0.5rem)]">Systems must be resilient.</p>
                <p className="text-muted-foreground text-sm">They must endure and adapt.</p>
              </div>
              <div className="bg-dark-bg bg-opacity-50 rounded-lg p-[clamp(0.75rem,2vw,1rem)] border border-glass-border">
                <span className="text-[var(--fluid-text-2xl)] mb-[clamp(0.25rem,1vw,0.5rem)] block">🎯</span>
                <p className="font-bold text-primary-accent mb-[clamp(0.25rem,1vw,0.5rem)]">Pragmatism is key.</p>
                <p className="text-muted-foreground text-sm">Focus on what works, efficiently.</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              This <span className="font-bold text-primary-accent">operational pragmatism</span> shapes my approach to software development. 
              I don&apos;t just build features; I architect <span className="font-bold text-primary-accent">reliable, resilient systems</span> that 
              directly solve business problems.
            </p>
          </GlassCard>
          
          {/* Toolkit Section */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(1rem,2vw,1.5rem)] text-primary-accent text-center">🛠️ My Toolkit</h2>
            <p className="text-center text-muted-foreground mb-[clamp(1.5rem,3vw,2rem)]">
              I focus on <span className="font-bold text-foreground">getting things done</span>. I use modern tools to build fast, scalable, and user-friendly applications.
            </p>
            
            <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
              <div className="text-center">
                <h4 className="text-[var(--fluid-text-xl)] font-semibold mb-[clamp(0.75rem,2vw,1rem)] text-primary-accent">The Logic (Backend)</h4>
                <div className="flex justify-center">
                  <Image 
                    src="https://skillicons.dev/icons?i=python,django,postgresql,supabase" 
                    alt="Backend Skills" 
                    width={200} 
                    height={50} 
                    unoptimized 
                  />
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <h4 className="text-[var(--fluid-text-xl)] font-semibold mb-[clamp(0.75rem,2vw,1rem)] text-primary-accent">The Look (Frontend)</h4>
                <div className="flex justify-center">
                  <Image 
                    src="https://skillicons.dev/icons?i=react,nextjs,tailwindcss,bootstrap" 
                    alt="Frontend Skills" 
                    width={250} 
                    height={50} 
                    unoptimized 
                  />
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <h4 className="text-[var(--fluid-text-xl)] font-semibold mb-[clamp(0.75rem,2vw,1rem)] text-primary-accent">The Workflow</h4>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  <Image 
                    src="https://skillicons.dev/icons?i=git,vercel,netlify" 
                    alt="Workflow Tools" 
                    width={150} 
                    height={50} 
                    unoptimized 
                  />
                  <Image 
                    src="https://img.shields.io/badge/AI%20Agents-8E75B2?style=flat-square&logo=openai&logoColor=white" 
                    alt="AI-Agents" 
                    width={110} 
                    height={28} 
                    unoptimized 
                  />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* AI-Native Workflow Section */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(1rem,2vw,1.5rem)] text-primary-accent text-center">🤖 My AI-Native Workflow (Human-in-the-Loop)</h2>
            <p className="text-center text-foreground mb-[clamp(1.5rem,3vw,2rem)]">
              I am an <span className="font-bold text-primary-accent">AI-Augmented Developer</span>. I use AI not to think <em>for</em> me, but to execute <em>with</em> me.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left p-[clamp(0.75rem,2vw,1rem)] text-primary-accent font-bold">Stage</th>
                    <th className="text-left p-[clamp(0.75rem,2vw,1rem)] text-primary-accent font-bold">👤 Human Responsibility (Me)</th>
                    <th className="text-left p-[clamp(0.75rem,2vw,1rem)] text-primary-accent font-bold">🤖 AI Responsibility (The Tool)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-glass-border hover:bg-glass-white hover:bg-opacity-20 transition-colors">
                    <td className="p-[clamp(0.75rem,2vw,1rem)] font-semibold text-foreground">1. ✨ Design</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Define the <span className="font-bold text-foreground">Schema</span>, <span className="font-bold text-foreground">Data Relationships</span>, and <span className="font-bold text-foreground">Business Rules</span>.</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Suggest optimization patterns or alternative libraries.</td>
                  </tr>
                  <tr className="border-b border-glass-border hover:bg-glass-white hover:bg-opacity-20 transition-colors">
                    <td className="p-[clamp(0.75rem,2vw,1rem)] font-semibold text-foreground">2. 🏗️ Build</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Implement <span className="font-bold text-foreground">Core Logic</span>, <span className="font-bold text-foreground">Security Constraints</span>, and <span className="font-bold text-foreground">Architecture</span>.</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Generate boilerplate, type definitions, and repetitive CRUD ops.</td>
                  </tr>
                  <tr className="hover:bg-glass-white hover:bg-opacity-20 transition-colors">
                    <td className="p-[clamp(0.75rem,2vw,1rem)] font-semibold text-foreground">3. 🔍 Polish</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Review code for <span className="font-bold text-foreground">Maintainability</span> and <span className="font-bold text-foreground">Edge Cases</span>.</td>
                    <td className="p-[clamp(0.75rem,2vw,1rem)] text-muted-foreground">Write Unit Tests and generate Docstrings.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-primary-accent italic mt-[clamp(1rem,2vw,1.5rem)] text-[var(--fluid-text-lg)]">
              Result: The whole process is streamlined and efficient.
            </p>
          </GlassCard>

          {/* Philosophy Section */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(1rem,2vw,1.5rem)] text-primary-accent">🌍 Philosophy: &quot;Knowing for the sake of Knowing&quot; & Human-Centric Systems</h2>
            
            <div className="space-y-[clamp(1rem,2vw,1.5rem)] text-foreground leading-relaxed">
              <p>
                📚 Inspired by <span className="font-bold text-primary-accent">Dr. Roy Casagranda</span>, my curiosity isn&apos;t just academic; 
                it&apos;s a boundless drive to understand <span className="font-bold">how systems impact people</span>, no matter the field. I delve into{" "}
                <span className="font-bold">any subject that piques my interest</span>, from history and geology to psychology and complex networks; 
                because each reveals universal principles of structure, interaction, and resilience that I apply directly to software.
              </p>

              <p>
                💖 As an <span className="font-bold text-primary-accent">Idealist (INFP-T)</span>, I&apos;m driven by an intense desire for knowledge 
                and a profound empathy for the world&apos;s challenges. My work is grounded in a deep sense of{" "}
                <span className="font-bold text-primary-accent">Stewardship</span>, a belief that we must be worthy caretakers of our world, 
                striving to serve everyone and everything with integrity. This spiritual foundation fuels my commitment to building technology that 
                genuinely solves human problems, enhances efficiency, and respects the user&apos;s experience. My work isn&apos;t just about code; 
                it&apos;s about creating thoughtful, sustainable systems that contribute positively to the &quot;real world&quot; I&apos;ve experienced firsthand.
              </p>
            </div>
          </GlassCard>

          {/* GitHub Stats Section */}
          <GlassCard className="p-[var(--fluid-padding)] mb-[var(--fluid-gap)]">
            <h2 className="text-[var(--fluid-text-3xl)] font-bold mb-[clamp(1rem,2vw,1.5rem)] text-primary-accent text-center">⚡ Activity & Stats</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-[clamp(1rem,2vw,1.5rem)] mb-[clamp(1rem,2vw,1.5rem)]">
              <Image 
                src="https://github-readme-stats.vercel.app/api?username=MushfiqPlabon&theme=neon&hide_border=true&include_all_commits=true&count_private=true&hide_rank=true" 
                alt="GitHub Stats" 
                width={400} 
                height={200} 
                unoptimized 
                className="rounded-lg"
              />
              <Image 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=MushfiqPlabon&theme=neon&hide_border=true&include_all_commits=true&count_private=true&layout=compact" 
                alt="Top Languages" 
                width={400} 
                height={200} 
                unoptimized 
                className="rounded-lg"
              />
            </div>

            <div className="text-center">
              <Image 
                src="https://visitcount.itsvg.in/api?id=MushfiqPlabon&icon=0&color=0" 
                alt="Profile Visitors" 
                width={200} 
                height={50} 
                unoptimized 
                className="mx-auto"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}