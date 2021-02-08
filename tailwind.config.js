const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray,
        accent: {
          blue: '00263C',
          orange: '#FF5F00',
        },
        grey: {
          2: '#E0E0E0',
          3: '#C4C4C4',
          4: '#BDBDBD',
        },
      },
      width: {
        417: '417px',
      },
      height: {
        64: '64.48px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
