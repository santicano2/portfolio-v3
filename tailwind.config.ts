import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "data-theme='dark'"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        secondaryHover: "rgb(var(--color-secondary-hover) / <alpha-value>)",
        textLight: "rgb(var(--color-text-light) / <alpha-value>)",
        target: "rgb(var(--color-target) / <alpha-value>)",
      },
    },
    screens: {
      md: { max: "865px" },
      sm: { max: "670px" },
    },
  },
  plugins: [],
} satisfies Config;
