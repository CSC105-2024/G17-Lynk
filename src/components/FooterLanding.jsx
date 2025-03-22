import React from 'react';
import darklogo from '../images/Group.svg';

const Footer = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between font-sans py-8 gap-4 px-10 md:px-15 lg:px-20 xl:px-60" style={{backgroundColor: "var(--sec-dark-color)"}} >
    <img src={darklogo} alt="lynk Logo" className="w-28 sm:w-36" />
    <div className="text-sm text-gray-400 font-medium text-center sm:text-left">
      ©2025 lynk.com
    </div>
  </div>
);

export default Footer;
