// The scroll progress location of each section
export const SECTIONS = {
  hero: 0.01 as const, // Should be 0 but it looks clunky on mobile because of the dynamic viewport
  index: 0.1 as const,
  aboutMe: 0.2 as const,
  experience: {
    index: 0.3 as const,
    may22Jun24: 0.4 as const,
    apr21May22: 0.5 as const,
  },
  latestProject: 0.6 as const,
  certificates: {
    index: 0.7 as const,
    awsSolutionsArchitect: 0.8 as const,
    kubernetesDeveloper: 0.9 as const,
  },
  footer: 0.98 as const, // Should be 1 but it looks clunky on mobile because of the dynamic viewport
  // Each section length
  length: 0.1 as const,
};
