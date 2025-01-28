import React from 'react';

interface ITextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
}

export default function TextArea(props: ITextAreaProps) {
  return (
    <textarea
      className='w-full bg-twilight-800 text-twilight-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
      {...props}
    />
  );
}
