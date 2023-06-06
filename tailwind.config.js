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
        "primary-rgba" : "rgba(77, 101, 140, 0.1)",
        item: "#2B3334",
        "item-focus": "#374042",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4D658C",
          "secondary": "#F95758",
          "accent": "#1fb2a6",
          "neutral": "#32323A",
          "base-100": "#1E1E26",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
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
