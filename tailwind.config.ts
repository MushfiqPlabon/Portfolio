import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // This tells Tailwind to use the 'dark' class for dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--background)',
        'foreground': 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        'glass-white': 'var(--glass-white)',
        'glass-border': 'var(--glass-border)',
        'primary-accent': 'var(--primary-accent)',
      },
      backdropBlur: {
        'xl': '24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;