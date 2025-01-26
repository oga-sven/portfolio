import React, { PropsWithChildren } from 'react';

interface ISocialButton {
  link: string;
}

export default function SocialButton({ link, children }: PropsWithChildren<ISocialButton>) {
  return (
    <a
      href={link}
      target='_blank'
      className='text-blue-500 hover:text-blue-400 text-2xl'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
