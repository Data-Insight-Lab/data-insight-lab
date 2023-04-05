/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'translateX(120%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)',
          },
        },

        'slide-out': {
          '0%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'translateX(120%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
