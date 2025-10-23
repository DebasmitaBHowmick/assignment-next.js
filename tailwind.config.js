/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        'rotate-y-[7deg]': 'rotateY(7deg)',
        'rotate-x-[7deg]': 'rotateX(7deg)',
      },
      // 2. Add perspective utility to the wrapper (important for 3D depth)
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Essential for elements inside the wrapper to inherit 3D space
        '.transform-gpu': {
          'transform-style': 'preserve-3d',
        },
        // Apply perspective to the image card wrapper
        '.perspective-1000': {
          'perspective': '1000px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
