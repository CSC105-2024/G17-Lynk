import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation
import { btn, btnFill } from '@/styles/styles'; // Importing button styles
import { ModeToggle } from '../mode-toggle'; // Importing the ModeToggle component for theme switching
import Logo from '../Logo'; // Importing the Logo component for the header logo

const HeaderLanding = () => {
  const navigate = useNavigate(); // Hook to navigate to different routes in the application

  return (
    <div className='flex flex-wrap items-center justify-between py-4 px-10 md:px-15 lg:px-20 xl:px-40'>
      {/* Logo component that links to the home page */}
      <Link to='/'>
        <Logo version='v2' />
      </Link>
      {/* Container for Login button and ModeToggle (theme switcher) */}
      <div className='flex items-center gap-4'>
        {/* Login button that navigates to the '/login' page */}
        <button
          onClick={() => navigate('/login')} // Triggers navigation to the login page when clicked
          className={`${btn} ${btnFill}`} // Applying button styles from `btn` and `btnFill`
        >
          Login
        </button>

        {/* Theme switcher (light/dark mode toggle) */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderLanding; // Exporting HeaderLanding component for use in other parts of the application
