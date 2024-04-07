/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitterColor: "#1DA1F2",
        primaryTextColor: "#0f172a",
      },
    },
  },
  plugins: [],
};
