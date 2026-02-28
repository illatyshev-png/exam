// ============================================
// THEME CONFIGURATION
// Change ONLY this file to rebrand the template.
// All values are injected as CSS variables.
// ============================================

export const theme = {
  name: "Default",

  colors: {
    // HSL values only (without hsl() wrapper)
    // Main: blue (217), Secondary: orange (25)
    primary: "217 91% 60%",
    primaryForeground: "0 0% 100%",
    accent: "25 95% 53%",
    accentForeground: "0 0% 100%",
    background: "217 25% 98%",
    foreground: "220 25% 14%",
    muted: "217 20% 96%",
    mutedForeground: "220 10% 46%",
    card: "0 0% 100%",
    cardForeground: "220 25% 14%",
    border: "217 20% 90%",
    input: "217 20% 90%",
    ring: "217 91% 60%",
    secondary: "217 30% 94%",
    secondaryForeground: "217 50% 20%",
    destructive: "0 72% 51%",
    destructiveForeground: "0 0% 100%",
  },

  radius: "0.625rem",

  // Optional: override font family
  // fontFamily: "'Inter', sans-serif",
} as const;

export type Theme = typeof theme;
