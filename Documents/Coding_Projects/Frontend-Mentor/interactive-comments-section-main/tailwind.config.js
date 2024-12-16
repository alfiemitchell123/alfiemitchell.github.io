/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        moderateBlue: 'hsl(238, 40%, 52%)',
        softRed: 'hsl(358, 79%, 66%)',
        lightGrayishBlue: 'hsl(239, 57%, 85%)',
        paleRed: 'hsl(357, 100%, 86%)',
        darkBlue: 'hsl(212, 24%, 26%)',
        grayishBlue: 'hsl(211, 10%, 45%)',
        lightGray: 'hsl(223, 19%, 93%)',
        veryLightGray: 'hsl(228, 33%, 97%)'
      },
    },
  },
  plugins: [],
});