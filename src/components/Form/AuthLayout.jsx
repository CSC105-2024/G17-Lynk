import React from 'react';
// import darkLogo from '../../images/SVG/logo-dark-v1.svg';
import { paragraph, subtitle, title } from '../../styles/styles';

const AuthLayout = ({ AuthForm }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[40%_60%] bg-[var(--auth-bg-color)] min-h-screen'>
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
      <div className='flex flex-col items-center justify-center text-[var(--text-primary-color)] w-full'>
        {AuthForm}
      </div>
    </div>
  );
};

export default AuthLayout;
