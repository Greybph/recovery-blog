const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'mont': ['"Montserrat", sans-serif']
      },
      fontSize: {
        'tiny': '.7rem'
      },
    },
  },
  plugins: [],
}
