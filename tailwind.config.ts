import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'red-1': "#bf0426",
        'red-2': "#730220",
        'green-1': "#013440",
        'green-2': "#038C8C",
        'green-3': "#025951",
        'blue-1': "#233D8C",
        'blue-2': "#193773",
        'orange-1': "#D99311",
        'orange-2': "#A67C49",
        'braw-1': "#591829",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0rem"
        }
      },
      fontFamily: {
        poppin: ["Poppins", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
