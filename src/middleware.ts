import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Define the supported languages
const locales = ['en', 'nl'];
const defaultLocale = 'nl';

// Create the middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never', // Don't add locale prefix to URLs
  localeDetection: true // Enable locale detection
});

// Export the middleware function
export default function middleware(request: NextRequest) {
  // Process the request through the next-intl middleware
  const response = intlMiddleware(request);
  
  // Check if there's a language parameter in the URL
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get('lang');
  
  // If there's a valid language parameter, update the cookie
  if (langParam && locales.includes(langParam)) {
    // Set the language cookie
    response.cookies.set('NEXT_LOCALE', langParam, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }
  
  return response;
}

// Configure the middleware to match specific routes
export const config = {
  matcher: ['/', '/(en|nl)'],
};