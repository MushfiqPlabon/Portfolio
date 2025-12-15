"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import AnimatedElement from "@/components/animations/animated-element";
import { Education } from "@/types";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          type="slide"
          direction="up"
          delay={0}
          duration={0.6}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary-accent">Education</span> & Learning
        </AnimatedElement>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-glass-border transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <AnimatedElement
                key={index}
                type="slide"
                direction="up"
                delay={index * 0.1}
                duration={0.6}
                className={`relative pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:w-1/2 md:float-left md:clear-left' : 'md:pl-8 md:w-1/2 md:float-right md:clear-right'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary-accent border-4 border-dark-bg transform -translate-x-1/2"></div>

                <GlassCard className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary-accent">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.duration}</span>
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{edu.institution}</h4>
                </GlassCard>
              </AnimatedElement>
            ))}
          </div>

          {/* Clear floats */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;