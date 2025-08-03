import React from 'react';
import WorkExperience from '@/parts/WorkExperience';
import About from '@/parts/About';
import Hero from '@/parts/Hero';
import Skills from '@/parts/Skills';
import Projects from '@/parts/Projects';
import Contact from '@/parts/Contact';
import Header from '@/components/Header/Header';
import { NextPage, GetStaticProps } from 'next';
import { loadMessages, defaultLocale } from '@/utils/i18n';

interface PortfolioPageProps {
  messages: Record<string, Record<string, string>>;
  locale: string;
}

// We don't need to use messages and locale directly in the component
// as they're already being handled by NextIntlClientProvider in _app.tsx
const PortfolioPage: NextPage<PortfolioPageProps> = () => {
  return (
    <div className='bg-twilight-950 text-white min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <WorkExperience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale: requestedLocale }) => {
  // Get locale from request or use default
  console.log('requestedLocale: ', requestedLocale || 'default')
  const locale = requestedLocale || defaultLocale;
  
  // Load messages for the locale
  const messages = await loadMessages(locale);
  
  return {
    props: {
      messages,
      locale,
    },
  };
};

export default PortfolioPage;
