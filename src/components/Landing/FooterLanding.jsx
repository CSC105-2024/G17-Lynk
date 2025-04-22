import React from 'react';
import Logo from '../Logo';

const Footer = () => (
  <div
    className='flex flex-row items-center justify-between font-sans py-8 gap-4 px-10 md:px-15 lg:px-20 xl:px-40'
    style={{ backgroundColor: 'var(--footer-bg-color)' }}
  >
    <Logo version='v1' href='/' className='w-15' />
    <p className='text-sm text-[var(--footer-text-color)] font-medium text-center sm:text-left'>
      ©2025 lynk.com
    </p>
  </div>
);

export default Footer;
