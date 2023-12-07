/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#dddedd",
        subBg: "#f4f5f8",
      },
      width: {
        "v-90": "90vw",
      },
      height: {
        "v-90": "90vh",
      },
      gridTemplateAreas: {
        mainContainer: "3fr 7fr",
      },
      gridTemplateColumns: {
        conversationItem: "2rem auto auto",
      },
      gridTemplateRows: {
        conversationItem: "auto auto",
      },
      flexGrow: {
        0.3: "0.3",
        0.7: "0.7",
      },
    },
  },
  plugins: [],
};
