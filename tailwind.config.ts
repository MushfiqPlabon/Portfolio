import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ['class', 'class'], // This tells Tailwind to use the 'dark' class for dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'dark-bg': 'var(--background)',
  			foreground: 'hsl(var(--foreground))',
  			'muted-foreground': 'var(--muted-foreground)',
  			'glass-white': 'var(--glass-white)',
  			'glass-border': 'var(--glass-border)',
  			'primary-accent': 'var(--primary-accent)',
  			background: 'hsl(var(--background))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backdropBlur: {
  			xl: '24px'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		gridTemplateColumns: {
  			'fluid': 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
  			'skill-fluid': 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
  		},
  		spacing: {
  			'fluid-sm': 'clamp(0.5rem, 2vw, 1rem)',
  			'fluid-md': 'clamp(1rem, 3vw, 2rem)',
  			'fluid-lg': 'clamp(1.5rem, 4vw, 3rem)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), typography],
};
export default config;