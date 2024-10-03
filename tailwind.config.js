/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      'custom-dark-blue': 'hsl(233, 26%, 24%)',
      'custom-gray' : 'hsl(233, 8%, 62%)',
    },},
  },
  plugins: [],
}


