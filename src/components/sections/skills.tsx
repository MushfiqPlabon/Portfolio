"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Skills } from "@/types";

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "text-cyan-400" },
    { title: "Frameworks & Libraries", items: skills.frameworks, color: "text-blue-400" },
    { title: "Tools & Technologies", items: skills.tools, color: "text-green-400" },
    { title: "AI & Workflow", items: skills.ai, color: "text-purple-400" },
    { title: "Business & Soft Skills", items: skills.business, color: "text-yellow-400" },
  ];

  return (
    <section id="skills" className="py-[max(3vh,2rem)] px-4 container-skills">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <motion.div
          className="text-[var(--fluid-text-3xl)] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          My <span className="text-primary-accent">Skills</span>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-[clamp(1rem,2vw,1.5rem)]">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${category.color} text-foreground bg-glass-white border border-glass-border`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;