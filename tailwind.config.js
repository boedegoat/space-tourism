const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
        'barlow-condensed': [
          'Barlow Condensed',
          ...defaultTheme.fontFamily.sans,
        ],
        bellefair: ['Bellefair', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
