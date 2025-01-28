import Image from 'next/image';
import React, { JSX } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

type TProjectType = {
  name: string;
  fileName: string;
  description: string;
  link: string;
  tags: string[];
};

const projects: TProjectType[] = [
  {
    name: 'Team Bicep Home',
    fileName: 'tbc-home',
    description:
      'Team Bicep Home is de landingspagina van mijn merk Team Bicep. Hier introduceer ik het merk en presenteer ik informatie over de productenlijn. Daarnaast bevat de website blogs met artikelen en zelfgebouwde fitnessgerelateerde rekenmachines.',
    link: '',
    tags: ['NextJs', 'Redux', 'Markdown', 'Tailwind'],
  },
  {
    name: 'Team Bicep Shop',
    fileName: 'tbc-shop',
    description:
      'Team Bicep Shop is mijn zelfontwikkelde webshopoplossing voor de producten van Team Bicep. Het project begon als concept in Next.js en heeft een lange tijd live gestaan en verkopen gerealiseerd. Net als bij de meeste webshops bevat deze een persoonlijk profiel, bestelgeschiedenis, kortingsoverzicht en tal van andere functionaliteiten die bij een professionele shop horen.',
    link: '',
    tags: ['NextJS', 'NextAuth', 'Mollie', 'GraphQL', 'Tailwind'],
  },
  {
    name: 'Superbackend',
    fileName: 'bol.com',
    description:
      'Superbackend is een interne tool die ik heb ontwikkeld als een eerste versie om Bol.com en andere e-commerce processen te automatiseren. Het omvat functies zoals productonderzoek, financiële berekeningen, SEO-optimalisatie (zowel voor Google als Bol), AI-tools voor het optimaliseren van productbeschrijvingen en een breed scala aan andere tools.',
    link: '',
    tags: ['NextJS', 'NextAuth', 'GraphQL', 'Puppeteer', 'Material UI'],
  },
  {
    name: 'Portfolio',
    fileName: 'portfolio',
    description:
      'De pagina waar je nu naar kijkt! Mijn portfolio (inmiddels versie 3!) is een visuele representatie van mijn technische vaardigheden. Daarnaast gebruik ik het als experimenteerplek om te werken met verschillende code-standaarden. En natuurlijk is alles open source!',
    link: '',
    tags: ['NextJS', 'Tailwind'],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id='projects' className='py-20 px-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(({ name, fileName, description, link, tags }) => (
          <div
            key={fileName}
            className='bg-twilight-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col'
          >
            <Image
              width={1080 / 3}
              height={1080 / 3}
              src={`/images/projects/${fileName}.png`}
              alt='Project'
              className='w-full h-48 object-cover'
            />
            <div className='p-4 flex flex-col flex-1 justify-between'>
              <div>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='mt-2'>{description}</p>
              </div>

              <div>
                {tags && tags.length > 0 && (
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={link}
                  className='text-blue-500 hover:underline mt-4 inline-flex items-center'
                >
                  View Project <FaExternalLinkAlt className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
