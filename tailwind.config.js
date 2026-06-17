/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        zoho: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          500: '#e8252a',   // Zoho red
          600: '#c91e23',
          700: '#a81a1e',
          blue: '#1a56db',
          navy: '#1e2d5a',
        },
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(0,0,0,0.08)',
        'card': '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
