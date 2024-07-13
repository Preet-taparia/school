/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        xms: '350px',
        xm: '380px',
        '3xl': '1920px',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
        bounce2: 'bounce2 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(2px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(5)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
};
