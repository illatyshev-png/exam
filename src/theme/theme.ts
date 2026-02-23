// ============================================
// THEME CONFIGURATION
// Change ONLY this file to rebrand the template.
// All values are injected as CSS variables.
// ============================================

export const theme = {
  name: "Default",

  colors: {
    // HSL values only (without hsl() wrapper)
    primary: "220 25% 16%",
    primaryForeground: "210 40% 98%",
    accent: "38 92% 50%",
    accentForeground: "220 25% 10%",
    background: "40 20% 98%",
    foreground: "220 20% 14%",
    muted: "220 14% 96%",
    mutedForeground: "220 10% 46%",
    card: "0 0% 100%",
    cardForeground: "220 20% 14%",
    border: "220 14% 90%",
    input: "220 14% 90%",
    ring: "38 92% 50%",
    secondary: "220 14% 94%",
    secondaryForeground: "220 25% 16%",
    destructive: "0 72% 51%",
    destructiveForeground: "0 0% 100%",
  },

  radius: "0.625rem",

  // Optional: override font family
  // fontFamily: "'Inter', sans-serif",
} as const;

export type Theme = typeof theme;
