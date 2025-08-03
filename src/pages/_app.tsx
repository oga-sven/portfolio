import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { loadMessages, defaultLocale } from '@/utils/i18n';
import { ThemeProvider } from '@/utils/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [messages, setMessages] = useState(pageProps.messages || {});
  const [locale, setLocale] = useState(pageProps.locale || defaultLocale);
  
  // Load messages on client side
  useEffect(() => {
    const loadLocaleMessages = async () => {
      // Get locale from cookie or use default
      const cookieLocale = Cookies.get('NEXT_LOCALE') || defaultLocale;
      
      // Check URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const urlLocale = urlParams.get('lang');
      
      // Use URL parameter if available, otherwise use cookie
      const newLocale = urlLocale || cookieLocale;
      
      // Load messages for the locale
      const newMessages = await loadMessages(newLocale);
      
      setLocale(newLocale);
      setMessages(newMessages);
      
      // Update cookie if locale changed
      if (newLocale !== cookieLocale) {
        Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 });
      }
    };
    
    loadLocaleMessages();
  }, [router.query]);

  return (
    <ThemeProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
