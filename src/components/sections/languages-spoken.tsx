"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { LanguageSpoken } from "@/types";

interface LanguagesSpokenSectionProps {
  languages: LanguageSpoken[];
}

const LanguagesSpokenSection: React.FC<LanguagesSpokenSectionProps> = ({ languages }) => {
  return (
    <section id="languages" className="py-[max(3vh,2rem)] px-4">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <motion.h2 
          className="text-[var(--fluid-text-3xl)] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Languages <span className="text-primary-accent">Spoken</span>
        </motion.h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[clamp(1rem,3vw,2rem)]">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-[var(--fluid-text-xl)] font-bold text-primary-accent">{lang.language}</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-glass-white border border-glass-border text-foreground">
                    {lang.proficiency}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSpokenSection;