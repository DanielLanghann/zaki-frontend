/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        markpro: ["MarkPro", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["MarkPro", "ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};