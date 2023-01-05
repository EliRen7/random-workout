/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      lineHeight: {
        'extra-loose': '4.5',
        '12': '3rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '4px',
        '2': '6px',
        '3': '8px',
        '4': '12px',
        '6': '14px',
        '8': '18px',
      }
    },
   
  },
  plugins: [],
}
