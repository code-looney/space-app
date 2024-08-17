/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg": "768px",
        "xl": "1240px"
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
        "veryDarkNavy": "hsl(230, 35%, 7%)",
        "lightBlue": "hsl(231, 77, 90)",
        "line": "#979797"
      },
      fontSize: {
        base: "1rem"
      },
      backgroundImage: {
        "space":  "url(/assets/home/background-home-mobile.jpg)",
        "moon": "url(/assets/destination/background-destination-mobile.jpg)"
      },
    },
  },
  plugins: [],
}