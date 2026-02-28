/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#1d4ed8',
          light: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
};
