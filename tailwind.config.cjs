/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00A358",
          "secondary": "#b7e060",
          "accent": "#8fef8d",
          "neutral": "#064e3b",
          "base-100": "#1f2937",
          "info": "#5EBEE4",
          "success": "#1AA24C",
          "warning": "#FCAC3B",
          "error": "#F3445E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
