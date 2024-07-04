/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'x',
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trade-gothic': ['"Trade Gothic", sans-serif']
      },
    },
  },
  plugins: [],
};