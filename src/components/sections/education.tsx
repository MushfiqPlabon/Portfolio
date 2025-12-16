"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Education } from "@/types";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-[max(3vh,2rem)] px-4">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <motion.div
          className="text-[var(--fluid-text-3xl)] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="text-primary-accent">Education</span> & Learning
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-glass-border transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-6 md:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-5 md:order-1">
                    <GlassCard className="p-6">
                      <h3 className="text-xl font-bold text-primary-accent">{edu.degree}</h3>
                      <h4 className="text-lg font-semibold mt-2">{edu.institution}</h4>
                    </GlassCard>
                  </div>

                  <div className="hidden md:flex md:col-span-2 md:items-center md:justify-center">
                    {/* Timeline dot */}
                    <div className="w-4 h-4 rounded-full bg-primary-accent border-4 border-dark-bg"></div>
                  </div>

                  <div className="md:col-span-5 md:order-2">
                    <div className="flex items-center justify-end">
                      <span className="text-sm text-muted-foreground px-4 py-2 bg-glass-white border border-glass-border rounded-lg">{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile view */}
                <div className="md:hidden flex items-center justify-between mt-3">
                  <div className="w-4 h-4 rounded-full bg-primary-accent border-4 border-dark-bg"></div>
                  <span className="text-sm text-muted-foreground px-4 py-2 bg-glass-white border border-glass-border rounded-lg">{edu.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;