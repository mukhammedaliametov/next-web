import React from 'react';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

const page = () => {
  return (
    <div>
      <Hero heading='Contact Me' message='I capture moments in nature and keep them alive.' />
      <Contact />
    </div>
  );
};

export default page;