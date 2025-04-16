import React from 'react';
import { useNavigate } from 'react-router-dom';
import { btn, btnFill } from '@/styles/styles';

const HeaderLanding = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-wrap items-center justify-between py-4 px-10 md:px-15 lg:px-20 xl:px-40 '>
      <a href='/'>
        <img src='./logo-dark-v2.svg' alt='logo' className=' h-auto' />
      </a>
      <button
        onClick={() => navigate('/login')}
        className={`${btn} ${btnFill}`}
      >
        Login
      </button>
    </div>
  );
};

export default HeaderLanding;
