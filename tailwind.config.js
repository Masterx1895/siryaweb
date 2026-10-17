/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sahibinden: {
          yellow: '#FFE800',
          yellowHover: '#ECD600',
          yellowLight: '#FFFBE6',
          navy: '#122b40',
          navyDark: '#0b1b28',
          navyLight: '#1d4263',
          blue: '#1664c0',
          blueHover: '#114f99',
          grayBg: '#f6f7f8',
          border: '#e2e8f0',
          darkText: '#191919',
          mutedText: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
