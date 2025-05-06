import React from 'react';
// import darkLogo from '../../images/SVG/logo-dark-v1.svg';  // Importing logo (commented out)
import { paragraph, subtitle, title } from '../../styles/styles'; // Importing style classes for text
import { ModeToggle } from '../mode-toggle'; // Import ModeToggle component for switching themes
import { ThemeProvider } from '../theme-provider'; // Import ThemeProvider to manage theme state
import Logo from '../Logo'; // Import Logo component to display the brand logo

// AuthLayout component renders the layout for authentication screens (e.g., login, signup)
const AuthLayout = ({ AuthForm }) => {
  return (
    // Wrapping the layout inside the ThemeProvider for theming functionality
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='grid grid-cols-1 lg:grid-cols-[40%_60%] bg-[var(--auth-bg-color)] min-h-screen relative'>
        {/* Left section: Brand and Welcome message */}
        <div className='flex flex-col items-center justify-center text-[var(--text-primary-color)] w-full p-5 gap-5'>
          <div className='w-1/3 sm:w-1/4 lg:w-1/2'>
            {/* Logo displayed on the left side */}
            <Logo version='v1' className='w-full' /> {/* Logo component */}
          </div>
          <div className='flex flex-col gap-3 text-center'>
            {/* Welcome message and description */}
            <p className={`${title}`}>Welcome To LYNk!</p> {/* Title text */}
            <p className={`${paragraph}`}>We List What You Wish</p>{' '}
            {/* Subtitle text */}
          </div>
        </div>

        {/* Right section: Authentication form and theme toggle */}
        <div className='relative flex flex-col items-center justify-center text-[var(--text-primary-color)] '>
          {/* Theme toggle button at the top right */}
          <div className='fixed top-5 right-5 z-50'>
            <ModeToggle size='5rem' /> {/* Theme toggle button */}
          </div>
          <div
            className='flex flex-col items-center justify-center text-[var(--text-primary-color)] w-xs md:w-md lg:w-xl gap-3 p-5 sm:p-10 xl:p-15 rounded-2xl shadow-lg'
            style={{ backgroundColor: 'var(--form-bg-color)' }} // Background color for the form container
          >
            {/* Render the AuthForm passed as a prop (login or signup form) */}
            {AuthForm}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout; // Export AuthLayout for use in authentication screens
