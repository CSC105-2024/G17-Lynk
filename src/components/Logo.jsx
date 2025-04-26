import React from 'react';
import { useTheme } from '@/components/theme-provider';

const Logo = ({
  href = '',
  version = 'v1',
  className = '',
  lightClass = '',
  darkClass = '',
}) => {
  const { theme } = useTheme();

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const logoVersions = {
    v1: {
      dark: '/logo-dark-v1.svg',
      light: '/logo-light-v1.svg',
      className: 'h-auto',
    },
    v2: {
      dark: '/logo-dark-v2.svg',
      light: '/logo-light-v2.svg',
      className: 'h-auto',
    },
  };

  // Use the logo version and theme to determine the correct logo path
  if (version !== 'v1' && version !== 'v2') {
    console.warn(`Unsupported logo version: ${version}. Defaulting to v1.`);
  }
  const currentLogo = logoVersions[version] || logoVersions.v1;

  const currentTheme = theme === 'system' ? getSystemTheme() : theme;

  return (
    <a href={href}>
      <img
        src={currentTheme === 'dark' ? currentLogo.dark : currentLogo.light}
        alt='Lynk Logo'
        className={`
          ${currentLogo.className} 
          ${className} 
          ${theme === 'dark' ? darkClass : lightClass}
        `}
      />
    </a>
  );
};

export default Logo;
