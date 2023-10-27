/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@expo-monorepo/shared/tailwind.config')],
  content: [
    './index.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    '../Shared/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('nativewind/tailwind/native')],
};
