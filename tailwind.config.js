/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/admin/**/*.{js,ts,jsx,tsx}',
    './src/admin/dashboard/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        Calligraffitti: ['Calligraffitti', 'cursive'],
      },
      colors: {
        'gradient-1': '#FFC583',
        'gradient-2': '#FF655F',
      }
    },
  },
  plugins: [],
};

