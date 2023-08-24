/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "teals-700": "#07343B",
        "teals-400": "#1A6E79",
        "bay-300": "#06090A",
        "grey-600": "#5A5F62",
        "about-300": "#111113",
        "project-500": "#000",
      },
    },
  },
  plugins: [],
};
