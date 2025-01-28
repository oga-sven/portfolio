import React, { JSX } from 'react';
import { WorkExperienceData } from '.';
import CAK from '@/components/WorkExperience/Descriptions/CAK';
import EQP from '@/components/WorkExperience/Descriptions/EQP';
import TBC from '@/components/WorkExperience/Descriptions/TBC';

interface IDetailsProps {
  selectedExperience: WorkExperienceData;
}

export default function Details({ selectedExperience }: IDetailsProps): JSX.Element {
  const description = (): JSX.Element | null => {
    switch (selectedExperience.id) {
      case 'cak':
        return <CAK />;
      case 'eqp':
        return <EQP />;
      case 'tbc':
        return <TBC />;

      default:
        return null;
    }
  };

  return (
    <main className='w-full md:w-2/3 p-6 md:p-10 bg-gray-800 md:rounded-l-lg'>
      {selectedExperience ? (
        <div>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>{selectedExperience.companyName}</h2>
          <p className='text-twilight-200 font-medium text-lg mb-2'>{selectedExperience.role}</p>
          <p className='text-gray-400 text-sm mb-6'>{selectedExperience.duration}</p>
          <div className='mb-6'>{description()}</div>
          {selectedExperience.link && (
            <a
              href={selectedExperience.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              Visit Company Website
            </a>
          )}
        </div>
      ) : (
        <p>Select a company to see details.</p>
      )}
    </main>
  );
}
