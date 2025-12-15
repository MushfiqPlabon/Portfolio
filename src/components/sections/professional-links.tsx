"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { ProfessionalLink } from "@/types";

interface ProfessionalLinksSectionProps {
  links: ProfessionalLink[];
}

const ProfessionalLinksSection: React.FC<ProfessionalLinksSectionProps> = ({ links }) => {
  return (
    <section id="professional-links" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-primary-accent">Links</span>
        </motion.h3>

        <div className="flex justify-center">
          <GlassCard className="p-6">
            <div className="flex flex-wrap justify-center gap-6">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary-accent text-primary-accent rounded-md text-sm font-medium hover:bg-primary-accent hover:text-dark-bg transition-colors"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalLinksSection;