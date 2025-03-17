import React from 'react';
import DarkLogo from '../images/LogInDark-img.svg';
import LightLogo from '../images/LogInLight-img.svg';
const LogInPage = () => {
  return (
  <div className='container flex items-center justify-center min-h-screen bg-black text-white'>
    {/* left Logo and Text */}
    <div className='left-container w-1/2 flex flex-col items-center text-center'>
      <img src={DarkLogo} alt="LYNk_Logo" className='w-[242px] h-[289px] mb-4'/>
      <p className='text-3xl font-bold'>Welcome to LYNk!</p>
      <p className='text-1.5xl'>We List What You Wish</p>
    </div>  
  </div>
  );
};

export default LogInPage;
