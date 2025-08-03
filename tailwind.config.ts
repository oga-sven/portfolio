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
        // twilight: {
        //   50: '#DBE7FF',
        //   100: '#BDD2FF',
        //   200: '#7AA4FF',
        //   300: '#3877FF',
        //   400: '#004EF5',
        //   500: '#0037B0',
        //   600: '#002D8F',
        //   700: '#00226B',
        //   800: '#001747',
        //   900: '#000B24',
        //   950: '#00050F',
        // },
        twilight: {
          50: "oklch(95.24% 0.033 172.78 / <alpha-value>)",
          100: "oklch(89.97% 0.072 172.61 / <alpha-value>)",
          200: "oklch(81.01% 0.064 173.07 / <alpha-value>)",
          300: "oklch(73.31% 0.058 172.82 / <alpha-value>)",
          400: "oklch(64.74% 0.051 172.45 / <alpha-value>)",
          500: "oklch(56.25% 0.044 173.74 / <alpha-value>)",
          600: "oklch(47.74% 0.037 173.46 / <alpha-value>)",
          700: "oklch(39.14% 0.031 173.8 / <alpha-value>)",
          800: "oklch(30.79% 0.025 170.75 / <alpha-value>)",
          900: "oklch(22.21% 0.019 171.79 / <alpha-value>)",
          950: "oklch(17.65% 0.015 171.79 / <alpha-value>)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
