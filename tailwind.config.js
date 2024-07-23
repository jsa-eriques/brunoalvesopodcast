/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
      mm: '320px', 
      sm: '480px',
      md: '768px',
      lg: '976px',
      gx: '1170px',
      xl: '1440px',
      xx: '1865px',
    },
    colors: {
      'sub-white': '#F5F5F5',
      'sub-black': '#101010',
      'sub-blue': '#00B9FD',
      'blue3': '#153A4C',
      'check': '#00649C',
      'faq': '#828282',
      'linha': '#E0E0E0',
      'blue-dark': '#0098D9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Inter_Normal: ['Inter_normal', 'sans-serif'],
      Inter_Light: ['Inter_light', 'sans-serif'],
      Inter_Regular: ['Inter_regular', 'sans-serif'],
      Sora: ['Sora', 'sans-serif'],
    },
    backgroundImage: {
      'hero': "url('/src/assets/bgbruno.webp')",
      'heroMobile': "url('/src/assets/bgbrunoMobile.png')",
    },
    },
  },
  plugins: [],
}

