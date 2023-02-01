const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        700: "hsl(230, 76%, 49%)",
        600: "hsl(230, 76%, 59%)",
        400: "hsl(204, 94%, 68%)",
        200: "hsl(230, 100%, 94%)"
      },
      secondary: {
        900: "hsl(229, 30%, 31%)",
        800: "hsl(231, 33%, 34%)",
        700: "hsl(224, 20%, 49%)"
      },
      base: {
        500: "hsl(0,0%,80%)",
        400: "hsl(0,0%,89%)",
        300: "hsl(231, 100%, 97%)",
        200: "hsl(230, 60%, 98%)",
        100: "hsl(0, 0%, 100%)"
      },
      accentPrimary: {
        900: "hsl(282, 83%, 42%)",
        800: "hsl(282, 83%, 52%)"
      },
      accentSecondary: "hsl(14, 83%, 74%)",
      danger: {
        900: "hsl(0, 67%, 42%)",
        800: "hsl(0, 67%, 53%)"
      }
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
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss")({ prefix: "ui" })
  ]
}
