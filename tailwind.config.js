/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="halloween"]'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "halloween"],
  },
}

