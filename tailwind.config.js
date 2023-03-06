// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "7/3": "7/3",
      },
      backgroundImage: {
        heroGradient: "linear-gradient(0deg, rgb(0, 0, 0), transparent)",
      },
      boxShadow: {
        "3xl": "0 0 10px rgb(0 0 0 / 15%)",
        "3.5xl": "0 2px 10px rgb(0 0 0 / 15%)",
        "4xl": "0 4px 12px rgb(0 0 0 / 25%)",
        "5xl": "0 2px 8px rgb(0 0 0 / 25%)",
        "6xl": "116px 86px 0 0 #f7f7f7",
        "8xl": "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%);",
      },

      colors: {
        brandBlack: "#1f1d21",
        brandGray: {
          DEFAULT: "rgb(87,87,87)",
          light: "rgb(230,230,230)",
          lighter: "rgb(245,245,245)",
          darker: "rgb(31,29,32)",
          pale: "rgb(143,143,143)",
        },
        brandWhite: {
          dark: "rgb(214,214,214)",
        },

        brandOrange: "rgb(189,0,50)", //#bc0031
      },
      fontFamily: {
        sans: ["var(--font-utopia)", ...fontFamily.sans],
        sourceSans: ["var(--font-sourceSans)", ...fontFamily.sans],
      },
      maxWidth: {
        "6.5xl": "72.85rem", //for hero section
        "8xl": "87.5rem", //1400px
      },
      screens: {
        "3xl": "1400px", //max-width: 1252px;
        "4xl": "1920px", //max-width: 1600px;
      },
      spacing: {
        7.5: "1.875rem", //30px
      },
      width: {
        hero: "calc(50% - 1.5rem)",
      },
    },
  },
  plugins: [],
};
