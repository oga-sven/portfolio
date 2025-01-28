import { WorkExperienceData } from '@/parts/WorkExperience';
import Image from 'next/image';
import React from 'react';

interface ICompanyNameProps extends WorkExperienceData {
  selectedId: string | null;
  setSelectedExperienceId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function CompanyName({
  id,
  companyName,
  role,
  logo,
  setSelectedExperienceId,
  selectedId,
}: ICompanyNameProps) {

  return (
    <li
      key={id}
      className={`cursor-pointer p-4 rounded-lg hover:bg-twilight-800 transition-colors ${
        selectedId === id ? 'font-semibold italic' : ''
      }`}
      onClick={() => setSelectedExperienceId(id)}
    >
      <div className='flex items-center space-x-4'>
        {logo && (
          <Image
            width={512}
            height={512}
            src={logo}
            alt={`${companyName} Logo`}
            className='w-12 h-12 object-contain rounded-full'
          />
        )}
        <div>
          <p className='font-semibold text-lg'>{companyName}</p>
          <p className='text-sm text-gray-300'>{role}</p>
        </div>
      </div>
    </li>
  );
}
