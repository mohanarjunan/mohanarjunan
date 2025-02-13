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
        primaryDark: "#121212",
        secondaryDark: "#272727",
        primaryLight: "#FFFFFF",
        secondaryLight: "#F2F2F2",
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
