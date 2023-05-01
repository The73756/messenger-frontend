/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      "main": "#4c91d4"
    }
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")({ nocompatible: true })],
};
