/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night", "dark", "coffee", "sunset", "synthwave"],
  },
  plugins: [require("daisyui")],
}