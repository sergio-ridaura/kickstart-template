import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Atkinson"],
      },
      colors: {
        transparent: colors.transparent,
        current: colors.current,
        bg_light: colors.white,
        bg_dark: colors.black,
        tx_light: colors.black,
        tx_dark: colors.white,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        primary: colors.indigo,
        secondary: colors.teal,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.sky,
        red: colors.red,
        green: colors.green,
        blue: colors.blue,
        cyan: colors.cyan,
        magenta: colors.pink,
        yellow: colors.yellow,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
      },
    },
  },
  plugins: [],
};
