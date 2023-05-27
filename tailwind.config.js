/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: "#4c91d4",
        "main-focus": "#3382d1",
        item: "#2B3334",
        "item-focus": "#374042",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4c91d4",
          secondary: "#f6d860",
          neutral: "#3E484B",
          "primary-content": "#1B1D1E",
          "base-100": "#202526",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
