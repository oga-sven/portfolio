import React from 'react';
import { useTranslations } from 'next-intl';

export default function CAK() {
  const t = useTranslations('workExperience.companies.cak.description');
  
  return (
    <div className='space-y-4'>
      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
      <ul className='my-2 ml-4 space-y-1 list-disc list-inside'>
        <li>{t('listItems.item1')}</li>
        <li>{t('listItems.item2')}</li>
        <li>{t('listItems.item3')}</li>
        <li>{t('listItems.item4')}</li>
      </ul>
      <p>{t('paragraph3')}</p>
    </div>
  );
}
