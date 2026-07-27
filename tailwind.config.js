/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1628',
          900: '#0d1f3c',
          800: '#122a52',
          700: '#1a3a6e',
        },
        energy: {
          500: '#f5a623',
          600: '#e8940f',
          400: '#ffb84d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10, 22, 40, 0.25)',
      },
    },
  },
  plugins: [],
}
