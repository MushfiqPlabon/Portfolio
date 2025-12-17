// Navigation items configuration
// Excludes "Home" and "About" as they're handled separately:
// - Home: Accessible via logo click
// - About: Accessible via "About Me" button in hero section
export const NAV_ITEMS = [
  "Experience",
  "Education", 
  "Projects",
  "Skills",
  "Certifications",
  "Languages",
  "Interests", 
  "Contact"
] as const;

// Mobile navigation items (same as main nav for consistency)
export const MOBILE_NAV_ITEMS = [...NAV_ITEMS];

// Footer navigation items (subset of main navigation)
export const FOOTER_NAV_ITEMS = [
  "Experience", 
  "Projects",
  "Skills",
  "Contact"
] as const;

// Main navigation items (all items now, since Home is already excluded)
export const MAIN_NAV_ITEMS = NAV_ITEMS;