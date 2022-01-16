module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1d1e26",
        "secondary-dark": "#2A2C37",
        "primary-light": "#F2F2F2",
        "secondary-light": "#51FA7B",
        "alternative-light": "#FFCA80",
        "alternative-dark": "#8D8F92",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
