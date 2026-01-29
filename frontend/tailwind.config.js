/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  // Disable Tailwind's preflight to avoid conflicts with Bootstrap
  corePlugins: {
    preflight: false
  }
}
