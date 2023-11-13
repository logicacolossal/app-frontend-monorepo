/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@expo-monorepo/shared/tailwind.config')],
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../Shared/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('nativewind/tailwind/css'),
  ],
};
