import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalFontface: {
    "Satoshi-Variable": {
      src: `url("../../public/fonts/Satoshi-Variable.woff2") format("woff2"),
        url("../../public/fonts/Satoshi-Variable.woff") format("woff"),
        url("../../public/fonts/Satoshi-Variable.ttf") format("truetype")`,
      fontWeight: "500",
      fontDisplay: "swap",
      fontStyle: "normal",
    },
  },

  globalCss: {
    body: {
      fontFamily: "Satoshi-Variable, dnp-shuei-gothic-kin-std, sans-serif",
      margin: 0,
      padding: 0,
    },
  },
});
