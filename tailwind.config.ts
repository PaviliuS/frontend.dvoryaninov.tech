import type { Config } from "tailwindcss";
import TailwindCSSAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        purple: "hsl(var(--purple))",
        background: "hsl(var(--background))",
        gray: "hsl(var(--gray))",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      fontSize: {
        xl: "1.250rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.750rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1052px",
        },
      },
      borderRadius: {
        lg: "calc(var(--radius) + 8px)",
        base: "var(--radius)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [TailwindCSSAnimate],
} satisfies Config;

export default config;
