import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // i18n configuration for Pages Router
  i18n: {
    // List of locales supported by your application
    locales: ['en', 'nl'],
    // Default locale when visiting a non-locale prefixed path
    defaultLocale: 'nl',
    // This will prevent the automatic redirection based on the user's locale
    localeDetection: false,
  },
};

export default nextConfig;
