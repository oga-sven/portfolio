import React from 'react';
import { useTranslations } from 'next-intl';

export default function EQP() {
  const t = useTranslations('workExperience.companies.eqp.description');
  
  return (
    <div className='space-y-4'>
      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
    </div>
  );
}
