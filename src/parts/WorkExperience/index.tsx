import CompanyName from '@/components/WorkExperience/CompanyName';
import React, { JSX, useState } from 'react';
import Details from './Details';
import { useTranslations } from 'next-intl';

export interface WorkExperienceData {
  id: 'cak' | 'tbc' | 'eqp';
  companyName?: string;
  role?: string;
  duration?: string;
  logo?: string;
  link?: string;
}

const experiences: WorkExperienceData[] = [
  {
    id: 'cak',
    logo: '/images/work-experience/cak-small.jpg',
  },
  {
    id: 'tbc',
    logo: '/images/work-experience/team-bicep-small.png',
  },
  {
    id: 'eqp',
    logo: '/images/work-experience/equippo-small.jpg',
  },
];

export function WorkExperiencePage(): JSX.Element {
  const t = useTranslations('workExperience');
  const [selectedExperienceID, setSelectedExperienceId] = useState<string | null>(null);

  const selectedExperience =
    experiences.find((experience) => experience.id === selectedExperienceID) ?? experiences[0];

  return (
    <div className='text-light-foreground dark:text-twilight-50 min-h-96 flex flex-col md:flex-row my-12'>
      <aside className='w-full md:w-1/3 p-6 overflow-y-auto'>
        <h2 className='text-2xl font-bold mb-6'>{t('title')}</h2>
        <ul className='space-y-4'>
          {experiences.map((experience) => (
            <CompanyName
              key={experience.id}
              {...experience}
              companyName={t(`companies.${experience.id}.name`)}
              role={t(`companies.${experience.id}.role`)}
              duration={t(`companies.${experience.id}.duration`)}
              selectedId={selectedExperienceID}
              setSelectedExperienceId={setSelectedExperienceId}
            />
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <Details selectedExperience={selectedExperience} />
    </div>
  );
}

export default WorkExperiencePage;
