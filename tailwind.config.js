/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo_bg: "url('/poe-logo.png')",
      },
    },
  },
  plugins: [],
};
