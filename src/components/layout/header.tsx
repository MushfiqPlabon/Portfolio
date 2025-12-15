"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/mobile-menu";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "@/config/nav-items";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';
  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Focus on the first menu item when menu opens for accessibility
    if (!mobileMenuOpen) {
      setTimeout(() => {
        const firstMenuItem = document.querySelector('#mobile-menu a, #mobile-menu button');
        if (firstMenuItem) {
          (firstMenuItem as HTMLElement).focus();
        }
      }, 100);
    }
  };

  return (
    <GlassCard
      className={`fixed top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-[96%] sm:w-[92%] lg:w-[90%] max-w-6xl xl:max-w-7xl 2xl:max-w-8xl z-50 transition-all duration-300 ${ // More responsive horizontal width and reduced vertical thickness
        scrolled ? "backdrop-blur-xl backdrop-invert bg-opacity-90" : "backdrop-blur-lg backdrop-invert bg-opacity-90"
      }`}
      role="banner"
    >
      <div className="flex items-center justify-between w-full p-1.5 sm:p-2.5 md:p-3 lg:p-4">
        <div className="text-xl font-bold text-primary-accent">
          <Link href="/" className="block">MRP</Link>
        </div>
        <nav className="hidden md:flex space-x-5 lg:space-x-7 xl:space-x-10" aria-label="Main navigation"> {/* Wider horizontal spacing */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary-accent transition-colors"
              aria-label="Home"
            >
              Home
            </Link>
          </motion.div>
          {NAV_ITEMS.filter(item => item !== "Home").map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-primary-accent transition-colors"
                aria-label={item}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3 sm:space-x-5">
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-bg"
              aria-label="Get in touch"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className="p-1.5 sm:p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-accent"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <span className="text-primary-accent">Close</span>
            ) : (
              <span className="text-primary-accent">Menu</span>
            )}
          </button>
        </div>
      </div>
      <MobileMenu id="mobile-menu" isOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
    </GlassCard>
  );
};

export default Header;