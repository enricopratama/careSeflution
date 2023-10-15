/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
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
  variants: {},
}
