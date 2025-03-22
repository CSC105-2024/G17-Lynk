import React from 'react';
import heroimg from '../images/hero.svg';

const HeroLanding = ({ onSignUp }) => (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-black p-4 sm:p-8">
    <header className="text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Never Lose a Link Again</h1>
      <p className="mt-4 text-base sm:text-lg text-gray-300">
        Save, Organize, and Access Your Web Favorites with Ease
      </p>
      <button
        onClick={onSignUp}
        className="mt-6 sm:mt-12 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Save your links now
      </button>
    </header>
    <div className="mt-6 sm:mt-0 sm:ml-8">
      <img src={heroimg} alt="Hero" className="w-full max-w-[300px] sm:max-w-md h-auto" />
    </div>
  </div>
);

export default HeroLanding;
