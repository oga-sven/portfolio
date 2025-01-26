import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import WorkExperience from '@/parts/WorkExperience';
import About from '@/parts/About';
import Hero from '@/parts/Hero';

const PortfolioPage: React.FC = () => {
  return (
    <div className='bg-twilight-950 text-white min-h-screen flex flex-col'>
      <Hero />
      <WorkExperience
        experiences={[
          {
            id: 'eqp',
            companyName: 'Equippo AG',
            role: 'Full Stack Developer',
            duration: '2022-2024',
            logo: '/images/work-experience/equippo-small.jpg',
          },
          {
            id: 'cak',
            companyName: 'CAK Groep',
            role: 'Backend Developer',
            duration: '2024-2025',
            logo: '/images/work-experience/cak-small.jpg',
          },
          {
            id: 'tbc',
            companyName: 'Team Bicep',
            role: 'Eigenaar / Developer',
            duration: '2020-2025',
            logo: '/images/work-experience/team-bicep-small.png',
          },
        ]}
      />
      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id='projects' className='py-20 px-10'>
        <h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className='bg-twilight-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
            >
              <img src='/placeholder.png' alt='Project' className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h3 className='text-xl font-bold'>Project {project}</h3>
                <p className='text-twilight-400 mt-2'>
                  A brief description of the project and its technologies.
                </p>
                <a href='#' className='text-blue-500 hover:underline mt-4 inline-flex items-center'>
                  View Project <FaExternalLinkAlt className='ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 bg-twilight-800 px-10'>
        <h2 className='text-3xl font-bold text-center mb-8'>Skills</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center'>
          {[
            'JavaScript',
            'React',
            'Next.js',
            'Node.js',
            'TailwindCSS',
            'TypeScript',
            'Git',
            'MongoDB',
          ].map((skill) => (
            <div key={skill} className='bg-twilight-700 py-4 px-2 rounded-lg shadow'>
              <p className='text-twilight-200 font-semibold'>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-10'>
        <h2 className='text-3xl font-bold text-center mb-8'>Contact Me</h2>
        <form className='max-w-2xl mx-auto space-y-6'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full bg-twilight-800 text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full bg-twilight-800 text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
          />
          <textarea
            placeholder='Your Message'
            rows={5}
            className='w-full bg-twilight-800 text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg w-full'
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className='bg-twilight-800 py-6 text-center text-twilight-400'>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
