/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0e4d6e", dark: "#0a3650", light: "#1a6b94" },
        teal: { DEFAULT: "#2bb5b2", light: "#5fd4d1", dark: "#1f8e8c" },
        navy: "#0a1628",
        offwhite: "#f8fbfd",
        cream: "#f0f7fa",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: { "spin-slow": "spin 12s linear infinite" },
    },
  },
  plugins: [],
};
