"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/mobile-menu";
import { useTheme } from "next-themes";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header
      className={cn(
        "fixed top-[min(2vh,1rem)] left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[var(--fluid-container-width)] z-50 transition-all duration-300 border border-glass-border rounded-[25px] backdrop-blur-lg bg-glass-white bg-opacity-100",
        scrolled && "backdrop-blur-xl"
      )}
      role="banner"
    >
      <div className="flex items-center justify-between w-full p-[var(--fluid-padding)]">
        <div className="text-xl font-bold text-primary-accent">
          <Link href="/" className="block">MRP</Link>
        </div>
        <nav className="hidden md:flex" aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList>
              {MAIN_NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center space-x-3 sm:space-x-5">
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;