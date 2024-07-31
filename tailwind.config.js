/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg": "768px",
        "xl": "1440px"
      },
      fontFamily: {
        "bellefair": ["Bellefair", 'serif'],
        "barlowCondensed": ["Barlow Condensed", "sans-serif"],
        "barlow": ["Barlow", "sans-serif"]
      },
      fontWeight: {
        normal: "400"
      },
      colors: {
        "veryDarkNavy": "hsl(230, 35, 7)",
        "lightBlue": "hsl(231, 77, 90)",
        "line": "#979797"
      },
      fontSize: {
        base: "1rem"
      },
      backgroundImage: {
        "parallax":  "url(/public/assets/home/background-home-mobile.jpg)"
      },
    },
  },
  plugins: [],
}