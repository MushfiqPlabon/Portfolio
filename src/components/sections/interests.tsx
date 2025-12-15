"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";

interface InterestsSectionProps {
  interests: string[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  return (
    <section id="interests" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary-accent">Interests</span>
        </motion.h2>

        <GlassCard className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="flex items-center p-4 rounded-lg bg-glass-white border border-glass-border">
                  <div className="mr-3 text-primary-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground">{interest}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default InterestsSection;