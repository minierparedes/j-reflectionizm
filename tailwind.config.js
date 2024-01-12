/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      notoJP: ['Noto Serif JP'],
      ibmPlex: ['IBM Plex Serif'],
    },
    extend: {},
  },
  plugins: [],
}
