"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PersonalInfo } from "@/types";
import AnimatedElement from "@/components/animations/animated-element";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl w-full">
        <GlassCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement
              type="slide"
              direction="up"
              delay={0}
              duration={0.6}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
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

              <AnimatedElement
                type="fade"
                delay={0.4}
                duration={0.6}
                className="text-xl md:text-2xl mb-6 text-muted-foreground"
              >
                {personalInfo.title}
              </AnimatedElement>

              <AnimatedElement
                type="fade"
                delay={0.6}
                duration={0.6}
                className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              >
                {personalInfo.objective}
              </AnimatedElement>

              <AnimatedElement
                type="slide"
                direction="up"
                delay={0.8}
                duration={0.6}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-primary-accent text-dark-bg hover:bg-cyan-500">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-bg">
                    <Link href={personalInfo.links.resume} target="_blank" rel="noopener noreferrer">Download CV</Link>
                  </Button>
                </motion.div>
              </AnimatedElement>
            </AnimatedElement>

            <AnimatedElement
              type="scale"
              delay={0.4}
              duration={0.6}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-accent rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-glass-white backdrop-blur-lg border border-glass-border rounded-2xl p-1">
                  <Image
                    src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "https://res.cloudinary.com/djyxbgv9s/image/upload/v1765779054/1000002113_2_v2rkmi.jpg"}
                    alt="Mushfiqur Rahman Plaban"
                    width={384}
                    height={384}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default HeroSection;