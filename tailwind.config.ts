import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Huiskleur Autorijschool Valberg
        brand: {
          DEFAULT: '#0953A3',
          dark: '#073F7D',
          light: '#E8F1FA',
          accent: '#0B63C4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};

export default config;
