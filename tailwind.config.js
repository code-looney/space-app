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
        "home-mobile": "url(/assets/home/background-home-mobile.jpg)",
        "home-tablet": "url(/assets/home/background-home-tablet.jpg)",
        "home-desk": "url(/assets/home/background-home-desktop.jpg)",

        "destination-mobile": "url(/assets/destination/background-destination-mobile.jpg)",
        "destination-tablet": "url(/assets/destination/background-destination-tablet.jpg)",
        "destination-desk": "url(/assets/destination/background-destination-desktop.jpg)",

        "crew-mobile": "url(/assets/crew/background-crew-mobile.jpg)",
        "crew-tablet": "url(/assets/crew/background-crew-tablet.jpg)",
        "crew-desk": "url(/assets/crew/background-crew-desktop.jpg)"

      },
    },
  },
  plugins: [],
}