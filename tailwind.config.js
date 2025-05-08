/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7d9ff',
          300: '#9fbeff',
          400: '#7499ff',
          500: '#4b6efa',
          600: '#3c54f0',
          700: '#2d41de',
          800: '#2937ba',
          900: '#263492',
          950: '#1a2158',
        },
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};