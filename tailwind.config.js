/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        soochak: {
          blue: '#1e3a8a',
          'blue-dark': '#1e3a8a',
          'blue-darker': '#1e3a8a',
          'blue-button': '#1e40af',
        },
        secondary: {
          DEFAULT: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}

