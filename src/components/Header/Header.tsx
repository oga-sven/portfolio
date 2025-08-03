import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-twilight-950 bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
}