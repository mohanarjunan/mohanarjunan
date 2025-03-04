import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darker: "#121212",
        dark: "#272727",
        lighter: "#FFFFFF",
        light: "#F2F2F2",
        danger: "#EE0000",
        success: "#03C03C",
        warning: "#FFD700"
      },
      fontFamily: {
        avenir: "avenir",
        akshar: "akshar"
      }
    }
  },
  plugins: [],
} satisfies Config;
