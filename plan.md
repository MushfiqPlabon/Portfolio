### **Project Plan & Specification: Personal Portfolio Website**
**Objective:** To build a visually stunning, animated, and interactive portfolio website with a "liquid glassmorphism" theme. This specification contains the exact file content required for an AI agent to build the project.

**Executing Agent:** `qwen-coder`

---

### **Core Technologies**
*   **Runtime / Package Manager:** Bun
*   **Framework:** Next.js 15 with App Router
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v3 (IMPORTANT: Explicitly install Tailwind CSS v3 using bun, not v4)
*   **UI Primitives:** Radix UI (Headless)
*   **Animation:** Framer Motion
*   **React Version:** React 19

---

### **Phase 0: File & Content Generation**
**Goal:** Create every necessary configuration and data file with its final content.

*   **Step 1: Create the Public Content File**
    *   **Path:** `data/data.json`
    *   **Action:** Create the file and populate it with the following JSON content.
    *   **Content:**
        ```json
        {
          "personalInfo": {
            "name": "Mushfiqur Rahman Plaban",
            "title": "Building Digital Solutions with an Interdisciplinary Approach",
            "objective": "Fusing a background in business management with full-stack development skills to deliver well-rounded and impactful applications.",
            "location": "Lalbagh, Dhaka, Bangladesh",
            "links": {
              "email": "rahman.mushfiq2000@gmail.com",
              "linkedin": "https://linkedin.com/in/mushfiq-plaban",
              "github": "https://github.com/MushfiqPlabon",
              "facebook": "https://www.facebook.com/hellraiser.mrp/",
              "resume": "https://docs.google.com/document/d/1zG87LK52AjDRVfxoi5SV3BS2EB4pGb0NbNxftwPbQ_Y/edit?usp=sharing"
            }
          },
          "experience": [
            {
              "company": "Shovon Electronics",
              "title": "Business Manager",
              "location": "Dhaka, Bangladesh",
              "duration": "Feb 2021 – Dec 2021",
              "description": [
                "Took over family business management after father's passing.",
                "Managed operations for institutional clients (e.g., Institute of Engineers, Bangladesh).",
                "Oversaw procurement, administrative tasks, legal formalities, and employee management.",
                "Balanced business responsibilities with BBA studies and self-learning in web technologies."
              ]
            }
          ],
          "education": [
            {
              "institution": "Phitron by Programming Hero",
              "degree": "Phitron AI/ML Course – Fall",
              "duration": "Oct 2025 (In Progress)"
            },
            {
              "institution": "Phitron by Programming Hero",
              "degree": "CS Fundamentals",
              "duration": "Oct 2024 – Sept 2025"
            },
            {
              "institution": "Stanford University",
              "degree": "Python Fundamentals (Code in Place 2025)",
              "duration": "Apr 2025 – Jun 2025"
            },
            {
              "institution": "National University, Bangladesh",
              "degree": "Bachelor of Business Administration (BBA), Marketing",
              "duration": "Jun 2019 – July 2023"
            }
          ],
          "projects": [
            {
              "title": "HomeSer – Household Service Platform",
              "stack": "React.js, Redux, Django DRF, PostgreSQL, SSLCommerz",
              "description": "Engineered a full-stack service marketplace allowing users to book household services. Implemented secure authentication and integrated SSLCommerz for digital payments.",
              "image": "/images/projects/homeser-project.webp",
              "liveSite": "https://homeser-frontend-react.vercel.app/",
              "githubFrontend": "https://github.com/MushfiqPlabon/homeser-frontend-react",
              "githubBackend": "https://github.com/MushfiqPlabon/homeser-backend-drf"
            },
            {
              "title": "EventMan – Event Management System",
              "stack": "Django MVT, HTMX, PostgreSQL, Cloudinary",
              "description": "Developed a monolithic event management application focusing on server-side rendering efficiency. Utilised HTMX for dynamic interactions without a full SPA framework.",
              "image": "/images/projects/eventman-project.webp",
              "liveSite": "https://event-man-drab.vercel.app/",
              "github": "https://github.com/MushfiqPlabon/Eventman"
            }
          ],
          "skills": {
            "languages": ["Python", "JavaScript", "HTML5", "CSS3"],
            "frameworks": ["React.js", "Redux Toolkit", "Django", "Django REST Framework", "TailwindCSS", "Bootstrap"],
            "tools": ["PostgreSQL", "Supabase", "Git", "GitHub", "Vercel", "Render"],
            "ai": ["AI-Augmented Development", "Prompt Engineering", "Gemini-CLI", "AI-Assisted Debugging", "GitHub Copilot"],
            "business": ["Business management", "Client coordination", "Communication", "Adaptability"]
          }
        }
        ```

*   **Step 2: Create the Private Secrets File**
    *   **Path:** `.env`
    *   **Action:** Create the file and populate it with the exact content below.
    *   **Content:**
        ```
        # These are your private credentials. Fill them in but do not commit this file.
        NEXT_PUBLIC_EMAIL="rahman.mushfiq2000@gmail.com"
        NEXT_PUBLIC_PHONE="+8801641879353"
        NEXT_PUBLIC_ADDRESS="Lalbagh, Dhaka, Bangladesh"
        ```

*   **Step 3: Create the Git Ignore File**
    *   **Path:** `.gitignore`
    *   **Action:** Create the file and populate it with the exact content below.
    *   **Content:**
        ```
        # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

        # Dependencies
        /node_modules
        /.pnp
        .pnp.js

        # Testing
        /coverage

        # Next.js build output
        /.next/
        /out/

        # Production
        /build

        # Local Environment Variables
        .env
        .env*.local
        !/.env.example

        # Misc
        .DS_Store
        *.pem
        ```

---

### **Phase 1: Project Scaffolding & Configuration with Tailwind CSS v3**
**Goal:** Initialize the project and configure the design system using Tailwind CSS v3 specifically.

*   **Step 4: Execute Scaffolding & Installation**
    *   **Action:** Execute the following shell commands in order. IMPORTANT: Install Tailwind CSS v3 explicitly, not v4. Enable Turbopack build system.
    *   **Commands:**
        ```bash
        bun create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
        bun add framer-motion clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-icons
        bun add -D tailwindcss@^3.4.13 @types/react@^19 @types/node@^22 @types/react-dom@^19
        ```

*   **Step 5: Configure Tailwind CSS v3 for Glassmorphism**
    *   **Path:** `tailwind.config.ts`
    *   **Action:** Overwrite the file with the following content. This configuration is for Tailwind CSS v3.
    *   **Content:**
        ```typescript
        import type { Config } from "tailwindcss";

        const config: Config = {
          content: [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
          ],
          theme: {
            extend: {
              colors: {
                'dark-bg': '#1a1a1a',
                'glass-white': 'rgba(255, 255, 255, 0.05)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'primary-accent': '#00ffff', // Cyan for highlights
              },
              backdropBlur: {
                'xl': '24px',
              },
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              }
            },
          },
          plugins: [],
        };
        export default config;
        ```

*   **Step 6: Define Global Styles**
    *   **Path:** `src/app/globals.css`
    *   **Action:** Overwrite the file with the following content.
    *   **Content:**
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        body {
          background-color: #1a1a1a;
          color: white;
          /* Add a subtle background pattern for more texture if desired */
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
        ```

---

### **Phase 2: Component Architecture Setup**
**Goal:** Create the foundational component architecture for the portfolio website.

*   **Step 7: Create Component Directories**
    *   **Action:** Create the following directory structure in `src/components/`:
    *   **Directories to create:** `glass`, `layout`, `sections`, `ui`, `animations`

*   **Step 8: Create Glassmorphism Base Component**
    *   **Path:** `src/components/glass/glass-card.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { cn } from "@/lib/utils";

        interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
          children: React.ReactNode;
          className?: string;
          animateOnHover?: boolean;
        }

        export const GlassCard: React.FC<GlassCardProps> = ({
          children,
          className,
          animateOnHover = false,
          ...props
        }) => {
          const cardClasses = cn(
            "bg-glass-white backdrop-blur-lg border border-glass-border rounded-xl shadow-xl p-6",
            className
          );

          if (animateOnHover) {
            return (
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className={cardClasses}
                {...props}
              >
                {children}
              </motion.div>
            );
          }

          return (
            <div className={cardClasses} {...props}>
              {children}
            </div>
          );
        };
        ```

*   **Step 9: Create Glass Button Component**
    *   **Path:** `src/components/glass/glass-button.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { cn } from "@/lib/utils";

        interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
          children: React.ReactNode;
          variant?: "primary" | "secondary";
          className?: string;
        }

        export const GlassButton: React.FC<GlassButtonProps> = ({
          children,
          variant = "primary",
          className,
          ...props
        }) => {
          const buttonClasses = cn(
            "bg-glass-white backdrop-blur-md border border-glass-border rounded-lg px-6 py-3 font-medium text-white transition-all duration-300",
            variant === "primary" && "hover:bg-opacity-20 hover:border-primary-accent",
            variant === "secondary" && "hover:bg-opacity-15",
            className
          );

          return (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={buttonClasses}
              {...props}
            >
              {children}
            </motion.button>
          );
        };
        ```

*   **Step 10: Create Layout Components**
    *   **Path:** `src/components/layout/header.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import Link from "next/link";
        import { GlassButton } from "@/components/glass/glass-button";
        import { cn } from "@/lib/utils";

        interface HeaderProps {
          className?: string;
        }

        export const Header: React.FC<HeaderProps> = ({ className }) => {
          return (
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className={cn(
                "fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md bg-dark-bg/80 border-b border-glass-border",
                className
              )}
            >
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-bold text-primary-accent"
                >
                  <Link href="/">Plaban</Link>
                </motion.div>
                
                <nav className="hidden md:flex space-x-8">
                  <Link href="#about" className="text-white hover:text-primary-accent transition-colors">
                    About
                  </Link>
                  <Link href="#experience" className="text-white hover:text-primary-accent transition-colors">
                    Experience
                  </Link>
                  <Link href="#projects" className="text-white hover:text-primary-accent transition-colors">
                    Projects
                  </Link>
                  <Link href="#skills" className="text-white hover:text-primary-accent transition-colors">
                    Skills
                  </Link>
                  <Link href="#contact" className="text-white hover:text-primary-accent transition-colors">
                    Contact
                  </Link>
                </nav>
                
                <GlassButton asChild>
                  <Link href="#contact">Get in Touch</Link>
                </GlassButton>
              </div>
            </motion.header>
          );
        };
        ```

*   **Step 11: Create Footer Component**
    *   **Path:** `src/components/layout/footer.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import Link from "next/link";
        import { GlassCard } from "@/components/glass/glass-card";
        import { cn } from "@/lib/utils";

        interface FooterProps {
          className?: string;
        }

        export const Footer: React.FC<FooterProps> = ({ className }) => {
          return (
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={cn("py-8 px-6 mt-16", className)}
            >
              <GlassCard className="max-w-7xl mx-auto text-center">
                <div className="space-y-4">
                  <p className="text-white">
                    © {new Date().getFullYear()} Mushfiqur Rahman Plaban. All rights reserved.
                  </p>
                  
                  <div className="flex justify-center space-x-6">
                    <Link 
                      href="https://github.com/MushfiqPlabon" 
                      className="text-white hover:text-primary-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                    <Link 
                      href="https://linkedin.com/in/mushfiq-plaban" 
                      className="text-white hover:text-primary-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                    <Link 
                      href="mailto:rahman.mushfiq2000@gmail.com" 
                      className="text-white hover:text-primary-accent transition-colors"
                    >
                      Email
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.footer>
          );
        };
        ```

---

### **Phase 3: Core Page and Layout Setup**
**Goal:** Set up the main application layout and home page structure.

*   **Step 12: Create Main Layout**
    *   **Path:** `src/app/layout.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        import type { Metadata } from "next";
        import { Inter } from "next/font/google";
        import "./globals.css";
        import { Header } from "@/components/layout/header";
        import { Footer } from "@/components/layout/footer";

        const inter = Inter({ subsets: ["latin"] });

        export const metadata: Metadata = {
          title: "Mushfiqur Rahman Plaban | Portfolio",
          description: "Full Stack Developer & Business Manager | Building Digital Solutions with an Interdisciplinary Approach",
        };

        export default function RootLayout({
          children,
        }: Readonly<{
          children: React.ReactNode;
        }>) {
          return (
            <html lang="en">
              <body className={inter.className + " bg-dark-bg text-white min-h-screen flex flex-col"}>
                <Header />
                <main className="flex-grow pt-20 pb-16">
                  {children}
                </main>
                <Footer />
              </body>
            </html>
          );
        }
        ```

*   **Step 13: Create Main Page**
    *   **Path:** `src/app/page.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        import { HeroSection } from "@/components/sections/hero";
        import { AboutSection } from "@/components/sections/about";
        import { ExperienceSection } from "@/components/sections/experience";
        import { EducationSection } from "@/components/sections/education";
        import { ProjectsSection } from "@/components/sections/projects";
        import { SkillsSection } from "@/components/sections/skills";
        import { ContactSection } from "@/components/sections/contact";

        export default function Home() {
          return (
            <div className="space-y-24 py-12 px-4 sm:px-6 lg:px-8">
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
              <EducationSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </div>
          );
        }
        ```

*   **Step 14: Create Utility Functions**
    *   **Path:** `src/lib/utils.ts`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        import { type ClassValue, clsx } from "clsx"
        import { twMerge } from "tailwind-merge"

        export function cn(...inputs: ClassValue[]) {
          return twMerge(clsx(inputs))
        }
        ```

---

### **Phase 4: Section Components Development**
**Goal:** Create all the main sections of the portfolio with glassmorphism design.

*   **Step 15: Create Hero Section Component**
    *   **Path:** `src/components/sections/hero.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { GlassButton } from "@/components/glass/glass-button";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";

        export const HeroSection: React.FC = () => {
          return (
            <section id="home" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GlassCard className="p-8 md:p-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h1 
                      className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-accent to-cyan-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {data.personalInfo.name}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl mb-6 text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {data.personalInfo.title}
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg mb-8 max-w-3xl mx-auto text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {data.personalInfo.objective}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <GlassButton variant="primary">
                        <a href={`mailto:${data.personalInfo.links.email}`}>Contact Me</a>
                      </GlassButton>
                      <GlassButton variant="secondary">
                        <a href={data.personalInfo.links.resume} target="_blank" rel="noopener noreferrer">
                          Download Resume
                        </a>
                      </GlassButton>
                    </motion.div>
                  </motion.div>
                </GlassCard>
              </div>
            </section>
          );
        };
        ```

*   **Step 16: Create About Section Component**
    *   **Path:** `src/components/sections/about.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";

        export const AboutSection: React.FC = () => {
          return (
            <section id="about" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">About Me</h2>
                  
                  <GlassCard className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <p className="text-lg mb-4">
                          Hello! I'm <span className="font-semibold text-primary-accent">Mushfiqur Rahman Plaban</span>, a dedicated Full Stack Developer with a unique 
                          background in Business Management. I blend technical expertise with strategic thinking to create 
                          impactful solutions.
                        </p>
                        
                        <p className="text-lg mb-4">
                          My journey began with a Bachelor's degree in Business Administration, where I developed strong 
                          foundations in management and strategic thinking. This knowledge proved invaluable when I took 
                          over family business operations during a challenging period, successfully managing operations 
                          for institutional clients like the Institute of Engineers, Bangladesh.
                        </p>
                        
                        <p className="text-lg">
                          Today, I'm channeling my passion for technology and business into creating innovative web 
                          applications that solve real-world problems. I specialize in full-stack development, 
                          combining Python/Django for backend solutions with modern JavaScript frameworks for 
                          dynamic frontends.
                        </p>
                      </div>
                      
                      <div className="flex-1 flex justify-center">
                        <div className="bg-glass-white backdrop-blur-lg border border-glass-border rounded-xl w-64 h-64 flex items-center justify-center">
                          <span className="text-gray-400">Profile Image</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-glass-border">
                      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-gray-400">Location</h4>
                          <p>{data.personalInfo.location}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Email</h4>
                          <p>{data.personalInfo.links.email}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400">LinkedIn</h4>
                          <a 
                            href={data.personalInfo.links.linkedin} 
                            className="text-primary-accent hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.personalInfo.links.linkedin.replace("https://", "")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

*   **Step 17: Create Experience Section Component**
    *   **Path:** `src/components/sections/experience.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";

        export const ExperienceSection: React.FC = () => {
          return (
            <section id="experience" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">Professional Experience</h2>
                  
                  <div className="space-y-8">
                    {data.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <GlassCard className="p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                            <div>
                              <h3 className="text-xl font-bold">{exp.title}</h3>
                              <p className="text-primary-accent">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-gray-400">{exp.duration}</p>
                              <p className="text-gray-500">{exp.location}</p>
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.description.map((desc, idx) => (
                              <li key={idx} className="flex">
                                <span className="text-primary-accent mr-2">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

*   **Step 18: Create Education Section Component**
    *   **Path:** `src/components/sections/education.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";

        export const EducationSection: React.FC = () => {
          return (
            <section id="education" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">Education</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <GlassCard className="p-6 h-full flex flex-col">
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-primary-accent mb-2">{edu.institution}</p>
                          <p className="text-gray-400 mb-4">{edu.duration}</p>
                          <div className="mt-auto">
                            <span className="inline-block bg-glass-border rounded-full px-3 py-1 text-sm">
                              {edu.duration.includes("In Progress") ? "In Progress" : "Completed"}
                            </span>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

---

### **Phase 5: Complete Section Components and Data Loading**
**Goal:** Finish creating all section components and implement data loading.

*   **Step 19: Create Projects Section Component**
    *   **Path:** `src/components/sections/projects.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";
        import Image from "next/image";

        export const ProjectsSection: React.FC = () => {
          return (
            <section id="projects" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">Projects</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <GlassCard className="p-6 h-full flex flex-col">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-primary-accent mb-2">{project.stack}</p>
                          </div>
                          
                          <div className="mb-4 relative h-48 rounded-lg overflow-hidden bg-glass-border flex items-center justify-center">
                            <span className="text-gray-400">Project Image</span>
                            {/* Placeholder for project image */}
                          </div>
                          
                          <p className="mb-4 flex-grow">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.liveSite && (
                              <a 
                                href={project.liveSite} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm bg-primary-accent/20 hover:bg-primary-accent/30 px-3 py-1 rounded-full transition-colors"
                              >
                                Live Site
                              </a>
                            )}
                            {project.githubFrontend && (
                              <a 
                                href={project.githubFrontend} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm bg-primary-accent/20 hover:bg-primary-accent/30 px-3 py-1 rounded-full transition-colors"
                              >
                                Frontend Code
                              </a>
                            )}
                            {project.githubBackend && (
                              <a 
                                href={project.githubBackend} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm bg-primary-accent/20 hover:bg-primary-accent/30 px-3 py-1 rounded-full transition-colors"
                              >
                                Backend Code
                              </a>
                            )}
                            {project.github && (
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm bg-primary-accent/20 hover:bg-primary-accent/30 px-3 py-1 rounded-full transition-colors"
                              >
                                Code
                              </a>
                            )}
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

*   **Step 20: Create Skills Section Component**
    *   **Path:** `src/components/sections/skills.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";

        export const SkillsSection: React.FC = () => {
          return (
            <section id="skills" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">Skills</h2>
                  
                  <div className="space-y-12">
                    {Object.entries(data.skills).map(([category, skills], categoryIndex) => (
                      <div key={categoryIndex}>
                        <h3 className="text-xl font-bold mb-4 capitalize text-primary-accent">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                          {skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                            >
                              <div className="bg-glass-white backdrop-blur-md border border-glass-border rounded-lg px-4 py-2 text-sm">
                                {skill}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

*   **Step 21: Create Contact Section Component with Server Actions**
    *   **Path:** `src/components/sections/contact.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";
        import { GlassCard } from "@/components/glass/glass-card";
        import { data } from "@/data/data";
        import { cn } from "@/lib/utils";
        import { useFormStatus } from "react-dom";
        import { contactAction } from "@/app/actions/contact";

        function SubmitButton() {
          const { pending } = useFormStatus();
          
          return (
            <button
              type="submit"
              disabled={pending}
              className="bg-primary-accent text-dark-bg font-medium px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50"
            >
              {pending ? "Sending..." : "Send Message"}
            </button>
          );
        }

        export const ContactSection: React.FC = () => {
          return (
            <section id="contact" className="py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary-accent">Get In Touch</h2>
                  
                  <GlassCard className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <p className="mb-4">
                          I'm currently open to new opportunities and interesting projects. 
                          Feel free to reach out if you'd like to work together or just say hi!
                        </p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-gray-400">Email</h4>
                            <a 
                              href={`mailto:${data.personalInfo.links.email}`} 
                              className="text-primary-accent hover:underline"
                            >
                              {data.personalInfo.links.email}
                            </a>
                          </div>
                          <div>
                            <h4 className="text-gray-400">Location</h4>
                            <p>{data.personalInfo.location}</p>
                          </div>
                          <div>
                            <h4 className="text-gray-400">Social Links</h4>
                            <div className="flex space-x-4 mt-2">
                              <a 
                                href={data.personalInfo.links.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-accent hover:underline"
                              >
                                LinkedIn
                              </a>
                              <a 
                                href={data.personalInfo.links.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-accent hover:underline"
                              >
                                GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                        <form action={contactAction} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block mb-1 text-sm">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full bg-glass-white backdrop-blur-md border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-accent"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full bg-glass-white backdrop-blur-md border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-accent"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block mb-1 text-sm">Message</label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={4}
                              className="w-full bg-glass-white backdrop-blur-md border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-accent"
                            ></textarea>
                          </div>
                          
                          <SubmitButton />
                        </form>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </section>
          );
        };
        ```

---

### **Phase 6: Server Actions Implementation**
**Goal:** Create server actions for handling form submissions.

*   **Step 22: Create Actions Directory and Contact Action**
    *   **Path:** `src/app/actions/contact.ts`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```ts
        'use server';

        import { revalidatePath } from 'next/cache';
        import { redirect } from 'next/navigation';

        export async function contactAction(prevState: any, formData: FormData) {
          // In a real application, you would validate the form data,
          // connect to a database, send an email, etc.
          console.log('Form data:', {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
          });

          // Simulate processing
          await new Promise(resolve => setTimeout(resolve, 1000));

          // For this portfolio, we'll just log the data
          // In a real app, you would handle the form submission properly

          revalidatePath('/');

          return {
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
          };
        }
        ```

---

### **Phase 7: Data Loading Implementation**
**Goal:** Create a data loading system to fetch portfolio data.

*   **Step 23: Create Data Module**
    *   **Path:** `src/data/data.ts`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```ts
        // This imports the JSON data and makes it available as a module
        import data from '../data.json';
        
        export { data };
        ```

---

### **Phase 8: Additional UI Components and Animations**
**Goal:** Create additional UI components for enhanced user experience.

*   **Step 24: Create Animation Wrapper Component**
    *   **Path:** `src/components/animations/animated-section.tsx`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```tsx
        "use client";
        
        import React from "react";
        import { motion } from "framer-motion";

        interface AnimatedSectionProps {
          children: React.ReactNode;
          className?: string;
          id?: string;
        }

        export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
          children,
          className = "",
          id
        }) => {
          return (
            <motion.div
              id={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={className}
            >
              {children}
            </motion.div>
          );
        };
        ```

*   **Step 25: Update Tailwind CSS for Responsive Glassmorphism**
    *   **Path:** `tailwind.config.ts`
    *   **Action:** Update the file to include responsive glassmorphism effects.
    *   **Content:**
        ```typescript
        import type { Config } from "tailwindcss";

        const config: Config = {
          content: [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
          ],
          theme: {
            extend: {
              colors: {
                'dark-bg': '#1a1a1a',
                'glass-white': 'rgba(255, 255, 255, 0.05)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'primary-accent': '#00ffff', // Cyan for highlights
              },
              backdropBlur: {
                'xs': '4px',
                'sm': '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '24px',
                '2xl': '40px',
                '3xl': '64px',
              },
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              }
            },
          },
          plugins: [],
        };
        export default config;
        ```

---

### **Phase 9: TypeScript Configuration**
**Goal:** Set up TypeScript configuration for the project.

*   **Step 26: Update TypeScript Configuration**
    *   **Path:** `tsconfig.json`
    *   **Action:** Ensure the file has proper configuration for Next.js 15 with custom paths.
    *   **Content:**
        ```json
        {
          "compilerOptions": {
            "target": "ES2017",
            "lib": ["dom", "dom.iterable", "es6"],
            "allowJs": true,
            "skipLibCheck": true,
            "strict": true,
            "noEmit": true,
            "esModuleInterop": true,
            "module": "esnext",
            "moduleResolution": "bundler",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "jsx": "preserve",
            "incremental": true,
            "plugins": [
              {
                "name": "next"
              }
            ],
            "baseUrl": ".",
            "paths": {
              "@/*": ["./src/*"]
            }
          },
          "include": [
            "next-env.d.ts",
            "**/*.ts",
            "**/*.tsx",
            ".next/types/**/*.ts",
            "data/data.json"
          ],
          "exclude": ["node_modules"]
        }
        ```

---

### **Phase 10: Final Configuration Files**
**Goal:** Complete the project with essential configuration files.

*   **Step 27: Create Next.js Configuration with Turbopack Optimization**
    *   **Path:** `next.config.ts`
    *   **Action:** Create the file with the following content that enables Turbopack and related optimizations.
    *   **Content:**
        ```ts
        import type { NextConfig } from "next";

        const nextConfig: NextConfig = {
          /* config options here */
          experimental: {
            typedRoutes: true,
            // Enable Turbopack for both development and production
            // Turbopack builds will be used instead of Webpack
            turbo: {
              rules: {
                '*.svg': {
                  loaders: ['@svgr/webpack'], // Note: Turbopack uses webpack loaders for compatibility
                },
              },
            },
          },
          images: {
            domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'localhost', '127.0.0.1'],
            formats: ['image/webp', 'image/avif'],
          },
          typescript: {
            ignoreBuildErrors: true,
          },
          eslint: {
            ignoreDuringBuilds: true,
          },
          // This configuration enables Turbopack for both development and production builds
          // Turbopack provides 2-5x faster compilation compared to Webpack
        };

        export default nextConfig;
        ```

*   **Step 28: Create ESLint Configuration**
    *   **Path:** `.eslintrc.json`
    *   **Action:** Create the file with the following content.
    *   **Content:**
        ```json
        {
          "extends": [
            "next/core-web-vitals",
            "next/typescript"
          ]
        }
        ```

---

### **Phase 11: Package.json Scripts and Dependencies**
**Goal:** Configure build scripts and verify dependencies.

*   **Step 29: Finalize Package.json Scripts**
    *   **Note:** After running the initial setup commands, the package.json will contain basic scripts. You should verify these are correct. For full Turbopack utilization in both development and production, ensure these scripts are in place:
    *   **Expected scripts in package.json:**
        ```json
        {
          "scripts": {
            "dev": "next dev --turbo",
            "build": "next build --turbopack",  // Beta: Use Turbopack for production builds
            "start": "next start",
            "lint": "next lint"
          }
        }
        ```

---

### **Phase 12: Turbopack-Specific Optimizations**
**Goal:** Leverage Turbopack-specific features for enhanced development performance.

*   **Step 30: Enable Turbopack for Full Development & Production Cycle**
    *   **Action:** The `--turbo` flag in dev and `--turbopack` flag in build will enable Turbopack for the entire development lifecycle.
    *   **Details:** Turbopack provides:
        * Up to 2-5x faster compilation times compared to Webpack in development (with --turbo)
        * Up to 83% faster production builds on high-core machines (with --turbopack)
        * Hot Module Replacement (HMR) for instant updates during development
        * Optimized production builds with Turbopack for faster compilation
        * Better memory usage during both development and production builds
        * Optimized bundling for large applications
        * Enhanced TypeScript/JavaScript compilation speed

*   **Step 31: Turbopack-Specific Performance Optimizations**
    *   **Action:** Configure additional optimizations that work well with Turbopack:
        * Use React Server Components to minimize client-side JavaScript
        * Implement code splitting at the component level
        * Leverage Next.js 15's Partial Prerendering capabilities
        * Optimize image loading with Next.js Image component
        * Use Suspense boundaries strategically for better loading states

*   **Step 32: Verify Turbopack Setup**
    *   **Action:** After completing all setup steps, run `bun run dev` to start the development server with Turbopack enabled.
    *   **Expected Output:** You should see Turbopack-specific output in the console indicating it's being used for the development server.

### **Final Implementation Notes:**
This specification provides a complete guide for implementing the portfolio website using Next.js 15 with Tailwind CSS v3 (not v4), React 19, and all the required components. The AI agent should follow these steps in order, creating each file with the exact content provided.