module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors:{
    //   green: colors.emerald
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}
