// Define the supported languages
export const locales = ['en', 'nl'];
export const defaultLocale = 'nl';

// Load messages for the specified locale
export async function loadMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    // Fallback to default locale if the requested locale is not available
    return (await import(`@/messages/${defaultLocale}.json`)).default;
  }
}

// Get the current locale from a cookie string or use the default
// This is a helper function for client-side use
export function getCurrentLocale(cookieString?: string): string {
  if (!cookieString) return defaultLocale;
  
  // Parse the cookie string manually
  const cookies = cookieString.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  return cookies['NEXT_LOCALE'] || defaultLocale;
}

// Configuration for next-intl - simplified for Pages Router
export async function getI18nConfig(locale = defaultLocale) {
  const messages = await loadMessages(locale);
  
  return {
    locale,
    messages,
  };
}