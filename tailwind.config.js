/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      fontSize: {
        base: "1rem"
      },
      backgroundImage: {
        "parallax":  "url(starter-code/assets/home/background-home-mobile.jpg)"
      },
    },
  },
  plugins: [],
}