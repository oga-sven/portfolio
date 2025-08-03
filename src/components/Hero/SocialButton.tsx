import React, { PropsWithChildren } from 'react';

interface ISocialButton {
  link: string;
}

export default function SocialButton({ link, children }: PropsWithChildren<ISocialButton>) {
  return (
    <a
      href={link}
      target='_blank'
      className='text-light-primary dark:text-dark-primary hover:text-light-hover dark:hover:text-dark-hover text-2xl transition-colors'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
