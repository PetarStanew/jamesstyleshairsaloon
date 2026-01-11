/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: "#fbf3ee",
          100: "#f5e4d9",
          200: "#ebc9b3",
          300: "#dfa98a",
          400: "#cf8461",
          500: "#c16c4c",
          600: "#a2553e",
          700: "#824333",
          800: "#66362b",
          900: "#4f2c24"
        },
        olive: {
          50: "#f2f4ec",
          100: "#e4e9d6",
          200: "#cad3ad",
          300: "#aab97e",
          400: "#8aa056",
          500: "#6e8440",
          600: "#586a33",
          700: "#46542a",
          800: "#364123",
          900: "#2b351e"
        },
        cream: {
          50: "#fffdf9",
          100: "#fff7ee",
          200: "#fbead7",
          300: "#f3d5b4",
          400: "#e6bc8f",
          500: "#d6a06a",
          600: "#b97c4c",
          700: "#8f5c38",
          800: "#6a432c",
          900: "#4c3124"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(37, 20, 9, 0.15)",
        card: "0 18px 40px rgba(37, 20, 9, 0.12)"
      }
    }
  },
  plugins: []
};
