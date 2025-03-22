import React from 'react';
import lynklogo from '../images/SVG/main logos/Final-05.svg';

const Footer = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between font-sans py-6">
    <img src={lynklogo} alt="lynk Logo" className="w-28 sm:w-36" />
    <div className="mt-4 sm:mt-0 text-sm text-gray-400 font-medium text-center sm:text-left">
      ©2025 lynk.com
    </div>
  </div>
);

export default Footer;
