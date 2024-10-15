import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2.5rem",
          lg: "6rem",
          xl: "10rem",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#c37146",
          100: "#f3e3da",
          200: "#e7c6b5",
          300: "#dbaa90",
          400: "#cf8d6b",
          500: "#c37146",
          600: "#9c5a38",
          700: "#75442a",
          800: "#4e2d1c",
          900: "#27170e",
        },
        secondary: {
          DEFAULT: "#202a41",
          100: "#d2d4d9",
          200: "#a6aab3",
          300: "#797f8d",
          400: "#4d5567",
          500: "#202a41",
          600: "#1a2234",
          700: "#131927",
          800: "#0d111a",
          900: "#06080d",
        },
      },
      fontFamily: {
        parisienne: ["var(--font-parisienne)", "cursive"],
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
