const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        600: "hsl(230, 76%, 59%)",
        400: "hsl(204, 94%, 68%)"
      },
      secondary: {
        900: "hsl(229, 30%, 31%)",
        800: "hsl(231, 33%, 34%)",
        700: "hsl(224, 20%, 49%)"
      },
      base: {
        300: "hsl(231, 100%, 97%)",
        200: "hsl(230, 60%, 98%)",
        100: "hsl(0, 0%, 100%)"
      },
      accentPrimary: "hsl(282, 83%, 52%)",
      accentSecondary: "hsl(14, 83%, 74%)"
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", ...fontFamily.sans]
      },
      backgroundImage: {
        "banner-sm": "url('../assets/images/background-sm.png')",
        "banner-md": "url('../assets/images/background-md.png')",
        "banner-lg": "url('../assets/images/background-lg.png')"
      },
      flex: {
        2: "2 2 0%"
      }
    }
  },
  plugins: []
}
