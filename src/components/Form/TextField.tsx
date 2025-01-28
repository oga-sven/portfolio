import React from 'react';

export default function TextField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type='text'
      className='w-full bg-twilight-800 text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
      {...props}
    />
  );
}
