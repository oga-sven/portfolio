import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/parts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        twilight: {
          50: '#DBE7FF',
          100: '#BDD2FF',
          200: '#7AA4FF',
          300: '#3877FF',
          400: '#004EF5',
          500: '#0037B0',
          600: '#002D8F',
          700: '#00226B',
          800: '#001747',
          900: '#000B24',
          950: '#00050F',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
