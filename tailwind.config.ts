import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "base-color": "#FEF9F2",
        "base-heading": "#D8C4B6",
        "base-text": "#A31D1D",
        "main-text-color": "#213555",
      },
      animation: {
        slideInRight: "slideInRight 0.9s ease-in-out",
        slideInLeft: "slideInLeft 0.9s ease-in-out",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      
    },



    
  },
  plugins: [],
};
export default config;
