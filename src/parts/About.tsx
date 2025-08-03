import Image from 'next/image';
import React, { JSX } from 'react';
import { useTranslations } from 'next-intl';

export default function About(): JSX.Element {
  const t = useTranslations('about');
  
  return (
    <section id='about' className='py-12 bg-twilight-900 px-10'>
      <h2 className='text-3xl font-bold mb-8'>{t('title')}</h2>
      <div className='flex gap-4 md:flex-row flex-col-reverse'>
        <div className='max-w-4xl flex gap-2 flex-col 2xl:max-w-max'>
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <h3 className='text-xl font-bold mt-2'>{t('technicalTitle')}</h3>
          <p>{t('paragraph3')}</p>
          <p>{t('paragraph4')}</p>
          <h3 className='text-xl font-bold mt-2'>{t('specificTitle')}</h3>
          <p>{t('paragraph5')}</p>
          <p>{t('paragraph6')}</p>
        </div>
        <aside className='md:min-w-60 ml-auto 2xl:min-w-[512px]'>
          <Image
            src={'/images/headshot/1.jpg'}
            height={512}
            width={512}
            className=''
            alt={'headshot'}
          />
        </aside>
      </div>
    </section>
  );
}