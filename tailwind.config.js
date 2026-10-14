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
    extend: {},
  },

  plugins: [],
};
