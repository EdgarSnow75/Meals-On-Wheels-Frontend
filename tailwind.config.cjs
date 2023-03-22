const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Josefin Sans"', "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        violetta: {
          primary: "#6F00FF",

          "primary-focus": "#420099",

          secondary: "#FF9966",

          "secondary-focus": "#FF742E",

          accent: "#B284BE",

          "accent-focus": "#884F96",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
});
