import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

// Category IDs that match translation keys
const categoryIds = {
  programmingLanguages: 'programmingLanguages',
  nodeEcosystem: 'nodeEcosystem',
  phpSymfony: 'phpSymfony',
  rubyOnRails: 'rubyOnRails',
  devOpsTools: 'devOpsTools',
  databases: 'databases',
  testingQA: 'testingQA',
  ideCodeQuality: 'ideCodeQuality',
  otherSkills: 'otherSkills'
};

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', categoryId: categoryIds.programmingLanguages },
  { name: 'TypeScript', categoryId: categoryIds.programmingLanguages },
  { name: 'Node.js', categoryId: categoryIds.programmingLanguages },
  { name: 'PHP', categoryId: categoryIds.programmingLanguages },
  { name: 'Ruby', categoryId: categoryIds.programmingLanguages },
  { name: 'Python', categoryId: categoryIds.programmingLanguages },

  // Node.js Ecosystem
  { name: 'Express.js', categoryId: categoryIds.nodeEcosystem },
  { name: 'NestJS', categoryId: categoryIds.nodeEcosystem },
  { name: 'Prisma', categoryId: categoryIds.nodeEcosystem },
  { name: 'Bun', categoryId: categoryIds.nodeEcosystem },
  { name: 'Yarn', categoryId: categoryIds.nodeEcosystem },
  { name: 'PNPM', categoryId: categoryIds.nodeEcosystem },

  // PHP and Symfony
  { name: 'Symfony', categoryId: categoryIds.phpSymfony },
  { name: 'Laravel', categoryId: categoryIds.phpSymfony },
  { name: 'Doctrine ORM', categoryId: categoryIds.phpSymfony },
  { name: 'Twig', categoryId: categoryIds.phpSymfony },
  { name: 'PHPUnit', categoryId: categoryIds.phpSymfony },

  // Rails and Ruby
  { name: 'Rails', categoryId: categoryIds.rubyOnRails },
  { name: 'Active Record', categoryId: categoryIds.rubyOnRails },
  { name: 'RSpec', categoryId: categoryIds.rubyOnRails },

  // DevOps and Tools
  { name: 'Docker', categoryId: categoryIds.devOpsTools },
  { name: 'Kubernetes', categoryId: categoryIds.devOpsTools },
  { name: 'GitHub Actions', categoryId: categoryIds.devOpsTools },
  { name: 'Gitlab Pipelines', categoryId: categoryIds.devOpsTools },
  { name: 'Sentry', categoryId: categoryIds.devOpsTools },

  // Databases
  { name: 'MySQL', categoryId: categoryIds.databases },
  { name: 'MongoDB', categoryId: categoryIds.databases },
  { name: 'Redis', categoryId: categoryIds.databases },
  { name: 'PostgreSQL', categoryId: categoryIds.databases },
  { name: 'MariaDB', categoryId: categoryIds.databases },
  { name: 'SQLite', categoryId: categoryIds.databases },

  // Testing and QA
  { name: 'Jest', categoryId: categoryIds.testingQA },
  { name: 'Vitest', categoryId: categoryIds.testingQA },
  { name: 'Cypress', categoryId: categoryIds.testingQA },
  { name: 'Mocha', categoryId: categoryIds.testingQA },
  { name: 'Chai', categoryId: categoryIds.testingQA },
  { name: 'PHPUnit', categoryId: categoryIds.testingQA },
  { name: 'Panther', categoryId: categoryIds.testingQA },
  { name: 'Puppeteer', categoryId: categoryIds.testingQA },
  { name: 'Playwright', categoryId: categoryIds.testingQA },

  // IDE/Code Quality
  { name: 'VSCode', categoryId: categoryIds.ideCodeQuality },
  { name: 'PHPStorm', categoryId: categoryIds.ideCodeQuality },
  { name: 'Eslint', categoryId: categoryIds.ideCodeQuality },
  { name: 'Prettier', categoryId: categoryIds.ideCodeQuality },
  
  // Other Skills
  { name: 'Tailwind CSS', categoryId: categoryIds.otherSkills },
  { name: 'REST APIs', categoryId: categoryIds.otherSkills },
  { name: 'GraphQL', categoryId: categoryIds.otherSkills },
  { name: 'WebSockets', categoryId: categoryIds.otherSkills },
  { name: 'SEO Optimization', categoryId: categoryIds.otherSkills },
  { name: 'Team Leadership', categoryId: categoryIds.otherSkills },
  { name: 'Agile Methodologies', categoryId: categoryIds.otherSkills },
];

interface Skill {
  name: string;
  categoryId: string;
}

export default function Skills() {
  const t = useTranslations('skills');
  const categoryIdsValues = Object.values(categoryIds);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categoryIdsValues[0]);

  const filteredSkills = skills.filter((skill) => skill.categoryId === selectedCategoryId);

  return (
    <div className='bg-light-muted dark:bg-twilight-900 text-light-foreground dark:text-white p-10 transition-colors'>
      <h2 className='text-2xl font-bold mb-4'>{t('title')}</h2>

      {/* Category Tabs */}
      <div className='flex space-x-4 mb-6 overflow-x-auto'>
        {categoryIdsValues.map((categoryId) => (
          <button
            key={categoryId}
            onClick={() => setSelectedCategoryId(categoryId)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              selectedCategoryId === categoryId
                ? 'bg-light-primary dark:bg-twilight-700 text-twilight-50'
                : 'bg-light-border dark:bg-twilight-800 text-light-foreground/70 dark:text-twilight-300 hover:bg-light-muted dark:hover:bg-twilight-800'
            }`}
          >
            {t(`categories.${categoryId}`)}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className='bg-twilight-50 dark:bg-twilight-800 p-4 rounded-lg flex flex-col items-center justify-center text-center text-sm font-medium hover:bg-light-muted dark:hover:bg-twilight-700 border border-light-border dark:border-transparent transition-colors'
          >
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
