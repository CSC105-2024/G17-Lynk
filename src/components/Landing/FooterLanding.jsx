import React from 'react';
import darkLogo from '../../images/SVG/logo-dark-v1.svg';

const Footer = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between font-sans py-8 gap-4 px-10 md:px-15 lg:px-20 xl:px-40" style={{backgroundColor: "var(--sec-dark-color)"}} >
    <img src={darkLogo} alt="lynk Logo" className="w-28 sm:w-36" />
    <div className="text-sm text-gray-400 font-medium text-center sm:text-left">
      ©2025 lynk.com
    </div>
  </div>
);

export default Footer;
