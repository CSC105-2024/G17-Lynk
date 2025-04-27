import React from 'react';
import Logo from '../Logo'; // Importing the Logo component
import { Link } from 'react-router-dom';

const Footer = () => (
  // Footer container with responsive padding and background color from CSS variable
  <div
    className='flex flex-row items-center justify-between font-sans py-8 gap-4 px-10 md:px-15 lg:px-20 xl:px-40'
    style={{ backgroundColor: 'var(--footer-bg-color)' }} // Custom background color for footer
  >
    {/* Logo on the left side with a version 'v1' and a link to the home page */}
    <Link to='/'>
      <Logo version='v1' className='w-15' />
    </Link>

    {/* Copyright text on the right side, styled for small text size and specific footer text color */}
    <p className='text-sm text-[var(--footer-text-color)] font-medium text-center sm:text-left'>
      ©2025 lynk.com {/* Copyright notice */}
    </p>
  </div>
);

export default Footer; // Export Footer component for use in other parts of the application
