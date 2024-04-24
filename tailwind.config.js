/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('./assets/fundo.JPG')"
      }
    },
  },
  plugins: [],
}

