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
        heading: "var(--font-heading-family)",
      },
    },
  },
  plugins: [],
};