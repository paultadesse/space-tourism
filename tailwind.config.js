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
    extend: {
      colors: {
        lightBlue: '#D0D6F9',
        lightGray: '#616476',
      },
    },
    fontFamily: {
      inter: ['Inter'],
      bellefair: ['Bellefair'],
      BarlowCondensed: ['Barlow Condensed'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
