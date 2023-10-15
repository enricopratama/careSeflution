/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Outfit', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        beige: {
          500: "#fff7ee",
          800: "#FFD9AD",
        },
        blue: {
          500: "#a8dadc",
          800: "#6BA3A6",
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

