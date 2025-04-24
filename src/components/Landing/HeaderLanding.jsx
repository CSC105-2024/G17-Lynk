import React from 'react';
import { useNavigate } from 'react-router-dom';
import { btn, btnFill } from '@/styles/styles';
import { ModeToggle } from '../mode-toggle';
import Logo from '../Logo';

const HeaderLanding = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-wrap items-center justify-between py-4 px-10 md:px-15 lg:px-20 xl:px-40 '>
      <Logo version='v2' href='/' />
      {/* <a href='/'>
        <img
          src={theme === 'dark' ? './logo-light-v2.svg' : './logo-dark-v2.svg'}
          alt='logo'
          className='h-auto'
        />
      </a> */}
      <div className='flex items-center gap-4'>
        <button
          onClick={() => navigate('/login')}
          className={`${btn} ${btnFill}`}
        >
          Login
        </button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderLanding;
