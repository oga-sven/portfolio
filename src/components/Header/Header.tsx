import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-muted dark:bg-twilight-950 bg-opacity-80 backdrop-blur-sm border-b border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center space-x-4">
        <ThemeSwitcher />
        <div className="border-l border-light-border dark:border-dark-border h-6"></div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}