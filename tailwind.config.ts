import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
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
        // Light mode variants
        light: {
          background: '#ffffff',
          foreground: '#171717',
          muted: '#f5f5f5',
          border: '#e5e5e5',
          accent: '#004EF5',
          primary: '#004EF5',    // twilight-400
          secondary: '#0037B0',  // twilight-500
          tertiary: '#7AA4FF',   // twilight-200
          hover: '#3877FF',      // twilight-300
        },
        // Dark mode variants
        dark: {
          background: '#0a0a0a',
          foreground: '#ededed',
          muted: '#1a1a1a',
          border: '#2a2a2a',
          accent: '#3877FF',
          primary: '#3877FF',    // twilight-300
          secondary: '#004EF5',  // twilight-400
          tertiary: '#BDD2FF',   // twilight-100
          hover: '#7AA4FF',      // twilight-200
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
