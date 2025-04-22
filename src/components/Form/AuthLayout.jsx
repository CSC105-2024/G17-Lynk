import React from 'react';
// import darkLogo from '../../images/SVG/logo-dark-v1.svg';
import { paragraph, subtitle, title } from '../../styles/styles';
import { ModeToggle } from '../mode-toggle';
import { ThemeProvider } from '../theme-provider';

const AuthLayout = ({ AuthForm }) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='grid grid-cols-1 lg:grid-cols-[40%_60%] bg-[var(--auth-bg-color)] min-h-screen relative'>
        {/* Left */}
        <div className='flex flex-col items-center justify-center text-[var(--text-primary-color)] w-full p-5 gap-5'>
          <div className='w-1/3 sm:w-1/4 lg:w-1/2'>
            <img src='./logo-dark-v1.svg' alt='LYNk Logo' className='w-full' />
          </div>
          <div className='flex flex-col gap-3 text-center'>
            <p className={`${title}`}>Welcome To LYNk!</p>
            <p className={`${paragraph}`}>We List What You Wish</p>
          </div>
        </div>

        {/* Right */}
        <div className='relative flex flex-col items-center justify-center text-[var(--text-primary-color)] '>
          {/* Top Right Theme Switching Toggle Button*/}
          <div className='fixed top-5 right-5 z-50'>
            <ModeToggle size='5rem' />
          </div>
          <div
            className='flex flex-col items-center justify-center text-[var(--text-primary-color)] w-xs md:w-md lg:w-xl gap-3 p-5 sm:p-10 xl:p-15 rounded-2xl shadow-lg'
            style={{ backgroundColor: 'var(--form-bg-color)' }}
          >
            {AuthForm}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
