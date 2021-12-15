const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter'],
      bellefair: ['Bellefair'],
      BarlowCondensed: ['Barlow Condensed']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
