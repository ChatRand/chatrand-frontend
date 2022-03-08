module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: '#0E0824',
        secondary: '#1A152F',
        textcolor: '#ddd4d4',
        textinputcolor: '#393b47',
        messagecolor1: '#46464ba4',
        footertextcolor: '#9e9e9e',
      },
      fontFamily: {
        chatrand: ['Redressed', 'cursive'],
        wholefont: ['montserrat', 'sans-serif']
      },
      fontSize: {
        footersize: '.85rem'
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
