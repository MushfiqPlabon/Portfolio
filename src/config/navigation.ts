// Navigation items configuration
export const NAV_ITEMS = [
  "Home",
  "About", 
  "Experience",
  "Education", 
  "Projects",
  "Skills",
  "Certifications",
  "Languages",
  "Interests", 
  "Contact"
] as const;

// Mobile navigation items (could be different if needed, but using same for consistency)
export const MOBILE_NAV_ITEMS = [...NAV_ITEMS];

// Footer navigation items (subset of main navigation)
export const FOOTER_NAV_ITEMS = [
  "Home",
  "About",
  "Experience", 
  "Projects",
  "Skills",
  "Contact"
] as const;

// Main navigation items excluding Home (since it's handled separately in header)
export const MAIN_NAV_ITEMS = NAV_ITEMS.filter(item => item !== "Home");