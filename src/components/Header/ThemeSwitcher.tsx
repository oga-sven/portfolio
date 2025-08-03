import React from 'react';
import dynamic from 'next/dynamic';

// Import the client-side only component with ssr: false
const ClientThemeSwitcher = dynamic(
  () => import('./ClientThemeSwitcher'),
  { ssr: false }
);

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  // This component is just a wrapper that renders the client-side only component
  // The placeholder div ensures consistent layout during SSR
  return (
    <ClientThemeSwitcher className={className} />
  );
}