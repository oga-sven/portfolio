import React from 'react';
import WorkExperience from '@/parts/WorkExperience';
import About from '@/parts/About';
import Hero from '@/parts/Hero';
import Skills from '@/parts/Skills';
import Projects from '@/parts/Projects';
import Contact from '@/parts/Contact';
import { NextPage } from 'next';

const PortfolioPage: NextPage = () => {
  return (
    <div className='bg-twilight-950 text-white min-h-screen flex flex-col'>
      <Hero />
      <WorkExperience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default PortfolioPage;
