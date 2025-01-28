import React, { useState } from 'react';

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Programming Languages' },
  { name: 'TypeScript', category: 'Programming Languages' },
  { name: 'Node.js', category: 'Programming Languages' },
  { name: 'PHP', category: 'Programming Languages' },
  { name: 'Ruby', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },

  // Node.js Ecosystem
  { name: 'Express.js', category: 'Node.js Ecosystem' },
  { name: 'NestJS', category: 'Node.js Ecosystem' },
  { name: 'Prisma', category: 'Node.js Ecosystem' },
  { name: 'Bun', category: 'Node.js Ecosystem' },
  { name: 'Yarn', category: 'Node.js Ecosystem' },
  { name: 'PNPM', category: 'Node.js Ecosystem' },

  // PHP and Symfony
  { name: 'Symfony', category: 'PHP/Symfony' },
  { name: 'Laravel', category: 'PHP/Symfony' },
  { name: 'Doctrine ORM', category: 'PHP/Symfony' },
  { name: 'Twig', category: 'PHP/Symfony' },
  { name: 'PHPUnit', category: 'PHP/Symfony' },

  // Rails and Ruby
  { name: 'Rails', category: 'Ruby on Rails' },
  { name: 'Active Record', category: 'Ruby on Rails' },
  { name: 'RSpec', category: 'Ruby on Rails' },

  // DevOps and Tools
  { name: 'Docker', category: 'DevOps/Tools' },
  { name: 'Kubernetes', category: 'DevOps/Tools' },
  { name: 'GitHub Actions', category: 'DevOps/Tools' },
  { name: 'Gitlab Pipelines', category: 'DevOps/Tools' },
  { name: 'Sentry', category: 'DevOps/Tools' },

  // Databases
  { name: 'MySQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MariaDB', category: 'Databases' },
  { name: 'SQLite', category: 'Databases' },

  // Testing and QA
  { name: 'Jest', category: 'Testing/QA' },
  { name: 'Vitest', category: 'Testing/QA' },
  { name: 'Cypress', category: 'Testing/QA' },
  { name: 'Mocha', category: 'Testing/QA' },
  { name: 'Chai', category: 'Testing/QA' },
  { name: 'PHPUnit', category: 'Testing/QA' },
  { name: 'Panther', category: 'Testing/QA' },
  { name: 'Puppeteer', category: 'Testing/QA' },
  { name: 'Playwright', category: 'Testing/QA' },

  // IDE/Code Quality
  { name: 'VSCode', category: 'IDE/Code Quality' },
  { name: 'PHPStorm', category: 'IDE/Code Quality' },
  { name: 'Eslint', category: 'IDE/Code Quality' },
  { name: 'Prettier', category: 'IDE/Code Quality' },
  // Other Skills
  { name: 'Tailwind CSS', category: 'Other Skills' },
  { name: 'REST APIs', category: 'Other Skills' },
  { name: 'GraphQL', category: 'Other Skills' },
  { name: 'WebSockets', category: 'Other Skills' },
  { name: 'SEO Optimization', category: 'Other Skills' },
  { name: 'Team Leadership', category: 'Other Skills' },
  { name: 'Agile Methodologies', category: 'Other Skills' },
];

interface Skill {
  name: string;
  category: string;
}

export default function Skills() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory);

  return (
    // <div className='bg-twilight-900 text-white p-6 rounded-lg shadow-md m-4'>
    <div className='bg-twilight-900 text-white p-10'>
      <h2 className='text-2xl font-bold mb-4'>Skills</h2>

      {/* Category Tabs */}
      <div className='flex space-x-4 mb-6 overflow-x-auto'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              selectedCategory === category
                ? 'bg-twilight-700 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-twilight-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className='bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center text-sm font-medium hover:bg-twilight-700'
          >
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
