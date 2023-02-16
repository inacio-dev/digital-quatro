const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', ...fontFamily.sans]
      },
      colors: {
        brand: {
          yellow: '#FFBA08',
          orange: '#F26419',
          red: '#D00000',
          blue: '#032B43',
          purple: '#2D1E2F'
        },
        slate: {
          light: {
            1: '#FBFCFD',
            2: '#F8F9FA',
            3: '#F1F3F5',
            4: '#ECEEF0',
            5: '#E6E8EB',
            6: '#DFE3E6',
            7: '#D7DBDF',
            8: '#C1C8CD',
            9: '#889096',
            10: '#7E868C',
            11: '#687076',
            12: '#11181C'
          },
          dark: {
            1: '#151718',
            2: '#1A1D1E',
            3: '#202425',
            4: '#26292B',
            5: '#2B2F31',
            6: '#313538',
            7: '#3A3F42',
            8: '#4C5155',
            9: '#697177',
            10: '#787F85',
            11: '#9BA1A6',
            12: '#ECEDEE'
          }
        }
      }
    }
  },
  plugins: []
}
