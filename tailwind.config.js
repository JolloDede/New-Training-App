/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        sapphire: {
          '50': '#f1f6fd',
          '100': '#dfeafa',
          '200': '#c6daf7',
          '300': '#9fc3f1',
          '400': '#71a3e9',
          '500': '#5082e1',
          '600': '#3b66d5',
          '700': '#3253c3',
          '800': '#2f46a1',
          '900': '#2a3d7e',
          '950': '#1e274d',
        },
      },
    }
  },
  plugins: []
};