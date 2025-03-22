import React from 'react';
import darklogo from '../images/SVG/Final-07.svg';
import { useNavigate } from 'react-router-dom';

const HeaderLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between py-4">
      <img src={darklogo} alt="logo" className="w-[200px] sm:w-[270px] h-auto" />
      <button
        onClick={() => navigate('/login')}
        className="mt-2 sm:mt-0 bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
};

export default HeaderLanding;
