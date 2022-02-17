// const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "serif": ["Roboto", "Segoe UI", "Open Sans", "sans-serif"]
    },
    fontSize: {
      "sm": ".75rem",
      "base": ".875rem",
      "lg": "1.125rem",
      "xl": "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    // screens: {
    //   "2xl": { "max": "1536px" },
    //   "xl": { "max": "1280px" },
    //   "lg": { "max": "1024px" },
    //   "md": { "max": "768px" },
    //   "sm": { "max": "640px" },
    // },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1380px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        gray: {
          light: "#e5e5e5",
          DEFAULT: "#a3a3a3",
          dark: "#525252",
        },
        primary: {
          light: "#a5b4fc",
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
          "deep-dark": "#4338ca",
        },
        footer: "#404040"
      },
      borderRadius: {
        'lg': '.75rem',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
