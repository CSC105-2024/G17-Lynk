import React from 'react';
import darklogo from '../images/Group.svg';
import { useNavigate } from 'react-router-dom';
import Button from "./Button";

const HeaderLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between py-4 px-10 md:px-15 lg:px-20 xl:px-40 ">
      <img src={darklogo} alt="logo" className=" h-auto"/>
      <button
        onClick={() => navigate('/login')}
        className="mt-2 sm:mt-0 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer" style={{backgroundColor: "var(--primary-color)"}}
      >
        Login
      </button>
    </div>
  );
};

export default HeaderLanding;
