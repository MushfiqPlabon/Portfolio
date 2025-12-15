"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import AnimatedElement from "@/components/animations/animated-element";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 container-projects">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          type="slide"
          direction="up"
          delay={0}
          duration={0.6}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="text-primary-accent">Projects</span>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedElement
              key={index}
              type="slide"
              direction="up"
              delay={index * 0.1}
              duration={0.6}
            >
              <GlassCard animateOnHover className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <div className="bg-glass-white border border-glass-border rounded-lg w-full h-32 sm:h-40 md:h-48 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={`${project.title} Project`}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-primary-accent">{project.title}</h3>
                  <p className="text-sm text-primary-accent mb-3">{project.stack}</p>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4">
                  {project.liveSite && (
                    <motion.a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-accent text-dark-bg rounded-md text-sm font-medium hover:bg-cyan-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Site
                    </motion.a>
                  )}

                  {project.githubFrontend && (
                    <motion.a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary-accent text-primary-accent rounded-md text-sm font-medium hover:bg-primary-accent hover:text-dark-bg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Frontend Code
                    </motion.a>
                  )}

                  {project.githubBackend && (
                    <motion.a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary-accent text-primary-accent rounded-md text-sm font-medium hover:bg-primary-accent hover:text-dark-bg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Backend Code
                    </motion.a>
                  )}

                  {project.github && !project.githubFrontend && !project.githubBackend && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary-accent text-primary-accent rounded-md text-sm font-medium hover:bg-primary-accent hover:text-dark-bg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;