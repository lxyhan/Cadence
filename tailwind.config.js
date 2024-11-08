/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}", // Includes all relevant files in src
    "./src/routes/**/*.{svelte,ts}",   // Svelte route files specifically
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f606f',   // dark blue
        secondary: '#137369', // green
        background: '#e4e0dd' // light beige
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: Set a clean, modern font for your project
      },
    },
  },
  plugins: [],
};
