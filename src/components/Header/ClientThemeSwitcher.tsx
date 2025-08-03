import React from 'react';
import { useTheme } from '@/utils/ThemeProvider';

interface ThemeSwitcherProps {
  className?: string;
}

export default function ClientThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => setTheme('system')}
        className={`px-2 py-1 rounded transition-colors ${
          theme === 'system' 
            ? 'font-bold text-light-accent dark:text-dark-accent' 
            : 'text-light-foreground/60 dark:text-dark-foreground/60 hover:text-light-foreground dark:hover:text-dark-foreground'
        }`}
        aria-label="Use system theme"
      >
        System
      </button>
      <span className="text-light-border dark:text-dark-border">|</span>
      <button
        onClick={() => setTheme('light')}
        className={`px-2 py-1 rounded transition-colors ${
          theme === 'light' 
            ? 'font-bold text-light-accent dark:text-dark-accent' 
            : 'text-light-foreground/60 dark:text-dark-foreground/60 hover:text-light-foreground dark:hover:text-dark-foreground'
        }`}
        aria-label="Use light theme"
      >
        Light
      </button>
      <span className="text-light-border dark:text-dark-border">|</span>
      <button
        onClick={() => setTheme('dark')}
        className={`px-2 py-1 rounded transition-colors ${
          theme === 'dark' 
            ? 'font-bold text-light-accent dark:text-dark-accent' 
            : 'text-light-foreground/60 dark:text-dark-foreground/60 hover:text-light-foreground dark:hover:text-dark-foreground'
        }`}
        aria-label="Use dark theme"
      >
        Dark
      </button>
    </div>
  );
}