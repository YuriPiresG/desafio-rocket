/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleLight: "#a881e6",
        purple: "#7450ac",
        purpleDark: "#523480",

        gray100: "#fbf9fe",
        gray200: "#afabb6",
        gray300: "#252529",
        gray400: "#17171a",
        gray500: "#111112",
        gray600: "#0c0c0d",

        successLight: "#ffffff",
        success: "#ffffff",

        pink: "#db5bbf",
        orange: "#e07b67",
        yellow: "#bb9f3a",
        green: "#8cad51",
        blue: "#7b94cb",
        pinkDark: "#251622",
        orangeDark: "#261a17",
        yellowDark: "#211e12",
        greenDark: "#1c2015",
        blueDark: "#1a1d23",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
