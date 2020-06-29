import { theme as baseTheme, Text, List, Link } from "@chakra-ui/core";

const theme = {
  ...baseTheme,
  colors: { ...baseTheme.colors, primary: baseTheme.colors.red[600] },
  shadows: {
    ...baseTheme.shadows,
    pending: baseTheme.shadows.md,
    right: baseTheme.shadows.md,
    wrong: "0 4px 6px -1px rgba(255, 0, 0, 0.3)",
  },
  breakpoints: [
    // Portait tablets and up
    "688px",
    // Landscape tablets
    "992px",
    // Laptops
    "1366px",
    // Hd Screens
    "1800px",
    // Very large Screens
    "1920px",
  ],
};

export default theme;
export type Theme = typeof theme;
