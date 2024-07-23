/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBody: 'var(--nav_body)',
        navItm: 'var(--nav_item)',
      },
    },
  },
  plugins: [],
}