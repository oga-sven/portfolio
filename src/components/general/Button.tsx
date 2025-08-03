import React, { PropsWithChildren } from 'react';

interface IButtonProps extends PropsWithChildren<React.InputHTMLAttributes<HTMLButtonElement>> {
  // bugs out on native props
  type?: 'submit' | 'button';
}

export default function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      className='bg-light-secondary dark:bg-dark-secondary hover:bg-light-primary dark:hover:bg-dark-primary text-white py-2 px-6 rounded-lg w-full transition-colors'
      {...props}
    >
      {children}
    </button>
  );
}
