import colors from 'tailwindcss/colors.js'

// Light/dark mode: these colors read from CSS variables (defined in src/index.css),
// so switching the theme just swaps the variable values. No component code changes needed.
const themed = (name) => `rgb(var(--c-${name}) / <alpha-value>)`
const ALL_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const ACCENT_SHADES = [200, 300, 400, 800, 900, 950]
const family = (key, shades) => ({
  ...colors[key],
  ...Object.fromEntries(shades.map((s) => [s, themed(`${key}-${s}`)])),
})

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: themed('white'),
        slate: family('slate', ALL_SHADES),
        indigo: family('indigo', ACCENT_SHADES),
        emerald: family('emerald', ACCENT_SHADES),
        amber: family('amber', ACCENT_SHADES),
        rose: family('rose', ACCENT_SHADES),
        violet: family('violet', ACCENT_SHADES),
      },
    },
  },
  plugins: [],
}
