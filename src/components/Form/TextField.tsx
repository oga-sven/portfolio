import React from 'react';

export default function TextField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type='text'
      className='w-full bg-light-muted dark:bg-twilight-800 text-light-foreground dark:text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none border border-light-border dark:border-transparent transition-colors'
      {...props}
    />
  );
}
