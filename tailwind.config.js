/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./partners/**/*.html",
    "./research/**/*.html",
    "./links/**/*.html",
    "./communication/**/*.html",
  ],  // ← COMMA HERE

  theme: {
    extend: {
      colors: {
        green: {
          50: "#f2f7f5",
          100: "#e6efec",
          200: "#bfd6ce",
          400: "#005c41",
          600: "#004632",
          900: "#003b2b",
          accent: "rgb(var(--primary-green-rgb) / <alpha-value>)",
        },
      },
      textColor: {
        "green-accent": "rgb(var(--accent-text-rgb) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};
