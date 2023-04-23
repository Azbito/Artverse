/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    fontFamily: {
      kristi: ['Kristi', 'Poppins', 'sans'],
      julius: ['Julius Sans One', 'Poppins', 'sans'],
      poppins: ['Poppins', 'sans']
    },
    fontSize: {
      xl: '5rem',
      base: '1.5rem'
    },
    height: {
      sm: '3rem',
      xl: '20rem'
    }
  },
  plugins: []
}
