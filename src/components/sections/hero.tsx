"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PersonalInfo } from "@/types";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-[min(90vw,1200px)] w-full">
        <GlassCard className="p-[min(4vw,3rem)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[var(--fluid-gap)] items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <motion.h1
                className="text-[min(4vw,2.5rem)] md:text-[var(--fluid-text-5xl)] font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary-accent">Hello, I{"'"}m </span>
                <br />
                <span className="bg-gradient-to-r from-primary-accent to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.div
                className="mb-6 flex justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2000&pause=500&color=2196F3&vCenter=true&width=500&lines=Developer+with+an+Operator's+Mindset;Systems+Thinker;Business-First+Developer;AI-Augmented+Developer"
                  alt="Dynamic Titles"
                  width={500}
                  height={40}
                  unoptimized
                  className="max-w-full h-auto"
                />
              </motion.div>

              <motion.div
                className="text-muted-foreground mb-8 max-w-prose mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {personalInfo.objective}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-primary-accent text-dark-bg hover:bg-cyan-500 font-bold">
                    <Link href="/about">About Me</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-bg font-bold">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-bg font-bold">
                    <Link href={personalInfo.links.resume} target="_blank" rel="noopener noreferrer">See Résumé</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-accent rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-glass-white bg-opacity-100 backdrop-blur-lg border border-glass-border rounded-2xl p-1">
                  <Image
                    src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "https://res.cloudinary.com/djyxbgv9s/image/upload/v1765779054/1000002113_2_v2rkmi.jpg"}
                    alt={personalInfo.name}
                    width={550}
                    height={550}
                    className="w-full max-h-[min(45vh,300px)] object-contain rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default HeroSection;