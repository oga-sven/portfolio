import TextArea from '@/components/Form/TextArea';
import TextField from '@/components/Form/TextField';
import Button from '@/components/general/Button';
import React from 'react';

export default function Contact() {
  return (
    <section id='contact' className='py-20 px-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>Contact Me</h2>
      <form className='max-w-2xl mx-auto space-y-6'>
        <TextField placeholder='Your Name' />
        <TextField placeholder='Your Email' />
        <TextArea placeholder='Your Message' rows={5} />
        <Button type='submit'>Versturen</Button>
      </form>
    </section>
  );
}
