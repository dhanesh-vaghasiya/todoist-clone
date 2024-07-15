/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      screens: {
        'md': '960px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

