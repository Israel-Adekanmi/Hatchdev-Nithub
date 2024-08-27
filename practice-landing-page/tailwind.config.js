/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey": "#FFFFFF33",
        "brightBlack": "#42424A",
        "brightBlue": "#B33CDB",
        "brightWhite": "#FFFAF9",
        "besnik": "#1A1A1A",
        "sol": "#333333"
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(96.32% 571.83% at 98.4% 19.88%, #8FB3FF 0%, #9D6BE8 27.72%, #DE2778 54.29%, #B03DE2 100%)',
      },
    },
  },
  plugins: [],
}

