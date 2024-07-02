module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Rozha One', 'serif'],
      },
      colors: {
        primary: '#E65100',
        secondary: '#FFC107',
        accent: '#009688',
        neutral: '#F5F5F5',
        textDark: '#3E2723',
      },
    },
  },
  plugins: [],
}