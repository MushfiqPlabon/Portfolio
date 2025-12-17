"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-[max(3vh,2rem)] px-4 container-projects">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <motion.div
          className="text-[var(--fluid-text-3xl)] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-primary-accent">Projects</span>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <h3 className="text-[var(--fluid-text-xl)] font-bold mb-2 text-primary-accent">{project.title}</h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;