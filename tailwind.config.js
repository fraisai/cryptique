/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/client/**/*.{js, jsx, ts, tsx}",
    "./src/client/containers/**/*.{js,jsx,ts,tsx}",
    "./src/client/App.jsx",
    "./src/client/containers/SignupContainer.jsx",
    // important: true,
    // "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '340px',
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '728px', // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}