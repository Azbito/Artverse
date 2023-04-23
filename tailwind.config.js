/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      width: {
        27: '27rem'
      },
      boxShadow: {
        lg: '0 1rem 2rem rgba(0, 0, 0, .3)'
      }
    },
    fontFamily: {
      kristi: ['Kristi', 'Poppins', 'sans'],
      julius: ['Julius Sans One', 'Poppins', 'sans'],
      poppins: ['Poppins', 'sans']
    },
    fontSize: {
      xl: '5rem',
      lg: '2rem',
      base: '1.2rem'
    },
    height: {
      1: '1rem',
      sm: '3rem',
      xl: '20rem'
    }
  },
  plugins: []
}
