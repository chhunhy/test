import type { Config } from "tailwindcss";
const { nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      filter: ["hover", "focus"],
      colors: {
        // ascentcolor
        ascentcolorblue50: "#EFF6FF",
        ascentcolorblue100: "#DBEAFE",
        ascentcolororange500: "#F97316",
        ascentcolororange700: "#F59F00",
        ascentcolorored50: "#FEF2F2",

        //secondary color
        secondarycolor: "#DF1F28",
        secondarycolor800: "#EF4444",
        secondarycolor600: "#EF4444",
        secondarycolor400: "#F87171",
        secondarycolor300: "#FCA5A5",

        //primary color
        primarycolor900: "#253C95",
        primarycolor800: "#1E40AF",
        primarycolor700: "#1D4ED8",
        primarycolor400: "#60A5FA",
        primarycolor300: "#93C5FD",
        primarycolor250: "#b1d1f6",
        primarycolor200: "#DBEAFE",
        primarycolor100: "#BAE6FD",

        //background color simple
        backgroundWhite: "#FFFFFF",
        backgroundWhiteSmoke: "#F5F5F5",

        //font color
        fontcolorslate900: "#0F172A",
        fontcolorslate800: "#1E293B",
        fontcolorslate700: "#334155",
        fontcolorslate600: "#475569",
        fontcolorslate500: "#64748B",
        fontcolorslate400: "#94A3B8",
        fontcolorslate100: "#F3F4F6",
        fontcolorslate50: "#F9FAFB",

        // Dark Mode color
        DarkGray800: "#18191A", // for navbar
        DarkGray600: "#242526"  // background
      },
      fontSize: {
        h1: "36px",
        h2: "30px",
        h3: "26px",
        h4: "24px",
        h5: "18px",
        h6: "16px",
        h7: "14px",
        h8: "12px"
      },
      borderRadius: {
        rounded2: "2px",
        rounded4: "4px",
        rounded6: "6px",
        rounded8: "8px",
        rounded12: "12px",
        rounded16: "16px",
        rounded24: "24px",
        roundedFull: "9999px"
      }
    },
    // screens: {
    //   sm: { max: "640px" },
    //   md: { max: "768px" },
    //   lg: { max: "1024px" },
    //   xl: { max: "1280px" },
    //   xxl: { max: "1536px" }
    // }
  },
  plugins: [
    nextui(),
  ]
};

export default config;
