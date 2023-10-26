/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@expo-monorepo/shared/tailwind.config')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
