import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/glass/glass-card";
import { useTheme } from "next-themes";
import { MOBILE_NAV_ITEMS } from "@/config/nav-items";

interface MobileMenuProps {
  id?: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ id, isOpen, toggleMenu }) => {
  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';
  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full mt-4 z-40"
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="p-6 bg-dark-bg bg-opacity-100 backdrop-blur-xl backdrop-invert border border-glass-border rounded-xl shadow-2xl">
            <div className="flex flex-col space-y-6">
              {MOBILE_NAV_ITEMS.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-medium text-foreground hover:text-primary-accent transition-colors block p-3 rounded-lg hover:bg-glass-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    onClick={toggleMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ x: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={toggleDarkMode}
                  className="text-xl font-medium text-foreground hover:text-primary-accent transition-colors block p-3 rounded-lg w-full text-left hover:bg-glass-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                >
                  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;