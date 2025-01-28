import CompanyName from '@/components/WorkExperience/CompanyName';
import React, { JSX, useState } from 'react';
import Details from './Details';

const experiences: WorkExperienceData[] = [
  {
    id: 'cak',
    companyName: 'CAK Groep',
    role: 'Backend Developer',
    duration: '2024-Huidig',
    logo: '/images/work-experience/cak-small.jpg',
  },
  {
    id: 'tbc',
    companyName: 'Team Bicep',
    role: 'Eigenaar / Developer',
    duration: '2019-Huidig',
    logo: '/images/work-experience/team-bicep-small.png',
  },
  {
    id: 'eqp',
    companyName: 'Equippo AG',
    role: 'Full Stack Developer',
    duration: '2020-2024',
    logo: '/images/work-experience/equippo-small.jpg',
  },
];

export interface WorkExperienceData {
  id: 'eqp' | 'cak' | 'tbc';
  companyName: string;
  role: string;
  duration: string;
  logo?: string;
  link?: string;
}

export function WorkExperiencePage(): JSX.Element {
  const [selectedExperienceID, setSelectedExperienceId] = useState<string | null>(null);

  const selectedExperience =
    experiences.find((experience) => experience.id === selectedExperienceID) ?? experiences[0];

  return (
    <div className='text-twilight-50 min-h-96 flex flex-col md:flex-row my-12'>
      <aside className='w-full md:w-1/3 p-6 overflow-y-auto'>
        <h2 className='text-2xl font-bold mb-6'>Work Experience</h2>
        <ul className='space-y-4'>
          {experiences.map((experience) => (
            <CompanyName
              key={experience.id}
              {...experience}
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
