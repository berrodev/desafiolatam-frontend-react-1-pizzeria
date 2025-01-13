/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-pizza': "url('/src/assets/img/Header.jpg')",
      },
    },
  },
  plugins: [],
};
