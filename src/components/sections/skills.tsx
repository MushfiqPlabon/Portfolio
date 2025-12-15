"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import AnimatedElement from "@/components/animations/animated-element";
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
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 container-skills">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          type="slide"
          direction="up"
          delay={0}
          duration={0.6}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary-accent">Skills</span>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedElement
              key={index}
              type="slide"
              direction="up"
              delay={index * 0.1}
              duration={0.6}
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
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;