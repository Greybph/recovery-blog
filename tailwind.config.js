module.exports = {
  mode: 'jit',
  purge: ['app/*/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['"Montserrat", sans-serif']
      },
      fontSize: {
        'tiny': '.7rem'
      }
    },
  },
  plugins: [],
}
