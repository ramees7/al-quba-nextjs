// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        extralightFont: ["Inter-ExtraLight-font", "sans-serif"],
        mediumFont: ["Inter-Medium-font", "sans-serif"],
        normalFont: ["Inter-font", "sans-serif"],
        capsNormal: ["ppneuemontreal-book-font", "sans-serif"],
        capsMedium: ["ppneuemontreal-medium-font", "sans-serif"],
        ppneuemontrealThin: ["ppneuemontreal-thin-font", "sans-serif"],
      },
      animation: {
        zoomOut: "zoomOut 1s ease-in-out forwards",
        "slide-diagonal": "slide-diagonal 1s ease-in-out forwards",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-diagonal": {
          "0%": {
            transform: "scale(0) translate(0, 0)",
          },
          "100%": {
            transform: "scale(1.5) translate(0%, 0%)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      height: {
        normal: "700px", // Height for screen height above 800px
      },
      screens: {
        xs: { max: "480px" },
        sm: { max: "768px" },
        tall: { raw: "(min-height: 800px)" }, // Custom media query for screen height > 800px
      },
    },
  },
  plugins: [],
};
