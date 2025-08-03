import Image from 'next/image';
import React, { JSX } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

type TProjectType = {
  id: string;
  fileName: string;
  link: string;
  tags: string[];
};

const projects: TProjectType[] = [
  {
    id: 'teamBicepHome',
    fileName: 'tbc-home',
    link: '',
    tags: ['NextJs', 'Redux', 'Markdown', 'Tailwind'],
  },
  {
    id: 'teamBicepShop',
    fileName: 'tbc-shop',
    link: '',
    tags: ['NextJS', 'NextAuth', 'Mollie', 'GraphQL', 'Tailwind'],
  },
  {
    id: 'superbackend',
    fileName: 'bol.com',
    link: '',
    tags: ['NextJS', 'NextAuth', 'GraphQL', 'Puppeteer', 'Material UI'],
  },
  {
    id: 'portfolio',
    fileName: 'portfolio',
    link: '',
    tags: ['NextJS', 'Tailwind'],
  },
];

export default function Projects(): JSX.Element {
  const t = useTranslations('projects');
  
  return (
    <section id='projects' className='py-20 px-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>{t('title')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(({ id, fileName, link, tags }) => (
          <div
            key={fileName}
            className='bg-white dark:bg-twilight-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col border border-light-border dark:border-transparent'
          >
            <Image
              width={1080 / 3}
              height={1080 / 3}
              src={`/images/projects/${fileName}.png`}
              alt={t('projectImageAlt')}
              className='w-full h-48 object-cover'
            />
            <div className='p-4 flex flex-col flex-1 justify-between'>
              <div>
                <h3 className='text-xl font-bold'>{t(`${id}.name`)}</h3>
                <p className='mt-2'>{t(`${id}.description`)}</p>
              </div>

              <div>
                {tags && tags.length > 0 && (
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-light-muted dark:bg-gray-700 text-light-foreground/70 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full transition-colors'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={link}
                  className='text-light-primary dark:text-dark-primary hover:text-light-hover dark:hover:text-dark-hover mt-4 inline-flex items-center transition-colors'
                >
                  {t('viewProject')} <FaExternalLinkAlt className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
