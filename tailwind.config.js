/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.box-shadow-custom': {
          'box-shadow': '0 1px 3px 0 rgba(0,0,0,0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

