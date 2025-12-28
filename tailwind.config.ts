import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        primary: '#4E0080',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
} satisfies Config;
