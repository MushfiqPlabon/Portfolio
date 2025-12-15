"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import AnimatedElement from "@/components/animations/animated-element";
import { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedElement
          type="slide"
          direction="up"
          delay={0}
          duration={0.6}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary-accent">Work </span>Experience
        </AnimatedElement>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedElement
              key={index}
              type="slide"
              direction="up"
              delay={index * 0.1}
              duration={0.6}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-accent">{exp.title}</h3>
                    <h4 className="text-lg font-semibold mt-1">{exp.company}</h4>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right block md:inline-block">{exp.duration}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-accent mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="text-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;