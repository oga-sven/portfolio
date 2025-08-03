import React from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const router = useRouter();
  const t = useTranslations('languageSwitcher');
  
  // Get current locale from cookie or default to 'nl'
  const currentLocale = Cookies.get('NEXT_LOCALE') || 'nl';
  
  // Function to switch language
  const switchLanguage = (locale: string) => {
    // Update cookie
    Cookies.set('NEXT_LOCALE', locale, { expires: 365 });
    
    // Reload the page with the new locale parameter
    const { pathname, asPath, query } = router;
    const newQuery = { ...query, lang: locale };
    
    router.push({ pathname, query: newQuery }, asPath, { locale });
  };
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => switchLanguage('nl')}
        className={`px-2 py-1 rounded ${
          currentLocale === 'nl' ? 'font-bold text-twilight-400' : 'text-twilight-600'
        }`}
        aria-label="Switch to Dutch"
      >
        {t('nl')}
      </button>
      <span className="text-twilight-600">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded ${
          currentLocale === 'en' ? 'font-bold text-twilight-400' : 'text-twilight-600'
        }`}
        aria-label="Switch to English"
      >
        {t('en')}
      </button>
    </div>
  );
}