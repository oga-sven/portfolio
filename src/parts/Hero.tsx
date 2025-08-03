import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SocialButton from '@/components/Hero/SocialButton';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const age = new Date().getFullYear() - 2000 - (new Date().getMonth() < 2 ? 1 : 0);

  return (
    <section className='flex-grow flex items-center justify-center px-10 my-64 text-center'>
      <motion.div
        className='space-y-6'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl md:text-6xl font-bold'>{t('greeting')}</h2>
        <p className='text-lg md:text-2xl text-twilight-400'>
          {t.rich('description', { age })}
        </p>
        <div className='flex justify-center space-x-4'>
          <SocialButton link='https://www.linkedin.com/in/svenelmendorp/'>
            <FaLinkedin />
          </SocialButton>
          <SocialButton link='https://github.com/oga-sven/'>
            <FaGithub />
          </SocialButton>
        </div>
      </motion.div>
    </section>
  );
}
