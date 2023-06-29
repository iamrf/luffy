/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        'primary': ['estedad', 'mono', 'system-ui', 'sans-serif'],
        'mono': ['mono', 'system-ui', 'sans-serif'],
        'sans-serif': ['sans-serif', 'system-ui', 'tahoma'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#6200BF',
        'secondary': '#FF00F8',
        'dark': '#0B0422',
        'blue': '#0FA2DB',
        'bgrt': '#17112D',
        'bgrb': '#211B35',
      },
      fontSize: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '15xl': '15rem',
        '16xl': '16rem',
        '17xl': '17rem',
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem',
        '30xl': '30rem',
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '400': '100rem',
        '800': '200rem',
      },
      minHeight: {
        '7': '7rem',
        '10': '10rem',
        '12': '12rem',
        '15': '15rem',
        '20': '20rem',
        'form': '25rem',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'uwide': '2000px',
      },
    },
  },
  plugins: [],
}
