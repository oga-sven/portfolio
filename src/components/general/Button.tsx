import React, { PropsWithChildren } from 'react';

interface IButtonProps extends PropsWithChildren<React.InputHTMLAttributes<HTMLButtonElement>> {
  // bugs out on native props
  type?: 'submit' | 'button';
}

export default function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      className='bg-twilight-500 hover:bg-twilight-400 text-white py-2 px-6 rounded-lg w-full'
      {...props}
    >
      {children}
    </button>
  );
}
