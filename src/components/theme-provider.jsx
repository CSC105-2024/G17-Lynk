import { createContext, useContext, useEffect, useState } from 'react';

// Initial state for the theme context
const initialState = {
  theme: 'system', // Default theme
  setTheme: () => null, // No-op function
};

// Create React context for theme management
const ThemeProviderContext = createContext(initialState);

/**
 * Theme provider component that manages theme state and applies it to the document
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @param {'light'|'dark'|'system'} [props.defaultTheme='system'] - Default theme
 * @param {string} [props.storageKey='vite-ui-theme'] - localStorage key for persistence
 * @returns {JSX.Element} Theme context provider
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}) {
  // State for current theme with localStorage persistence
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or use default
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  // Effect to apply theme changes to the document
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes first
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      // Detect system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    // Apply selected theme
    root.classList.add(theme);
  }, [theme]);

  // Context value containing current theme and setter function
  const value = {
    theme,
    setTheme: (theme) => {
      // Persist to localStorage
      localStorage.setItem(storageKey, theme);
      // Update state
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 * @returns {Object} Theme context with { theme, setTheme }
 * @throws {Error} If used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};