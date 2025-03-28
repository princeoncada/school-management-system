import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "school-sky": "#C3EBFA",
        "school-sky-light": "#EDF9FD",
        "school-purple": "#CFCEFF",
        "school-purple-light": "#F1F0FF",
        "school-yellow": "#FAE27C",
        "school-yellow-light": "#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
