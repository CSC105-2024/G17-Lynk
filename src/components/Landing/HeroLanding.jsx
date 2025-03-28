import React from 'react';
import heroImg from '../../images/SVG/hero.svg';
import { paragraph, title } from "../../styles/styles";
import Button from "../Button";

// Hero Section
const HeroLanding = ({ onSignUp }) => (
  // Text Section
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-black py-8 md:py-12 gap-10 px-10 md:px-15 lg:px-20 xl:px-40 ">
    <header className=" text-center sm:text-left flex flex-col gap-5 ">
      <h1 className={`${title} text-white`}>Never Lose a Link Again</h1>
      <p className={`${paragraph}  text-gray-200`}>
        Save, Organize, and Access Your Web Favorites with Ease
      </p>
      <a href="/signup" className="mx-auto">
      <Button text="Save your links now" className="mt-5 md:mt-10 "/>
      </a>
    </header>
    
    {/* Image Section */}
    <div className="w-full md:w-md xl:w-2xl h-auto flex justify-center sm:justify-end">
      <img src={heroImg} alt="Hero Section Image" className="w-xs md:w-full " />
    </div>
  </div>
);

export default HeroLanding;

