/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "et-green": "#79C93E",
        "et-blue": "#005A9C",
        "et-teal": "#23B1AA",
        "et-teal-dark": "#1c8f8a",
        "et-purple": "#46287D",
        "et-purple-dark": "#351f61",
        "et-orange": "#F49F2C",
        "secondary-bg": "#FFF7EC",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
