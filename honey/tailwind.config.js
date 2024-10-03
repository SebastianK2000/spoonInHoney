/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        creme: '#dfb67e',           // kolor creme
        honey: '#e0dd9b',           // kolor honey
        dark_chockolate: '#291800',  // kolor dark-chockolate
        soft_gray: '#7a7672',       // kolor soft-gray
        pure_pink: '#e2e2e2',       // kolor pure-pink
      },
    },
  },
  variants: {},
  plugins: [],
}