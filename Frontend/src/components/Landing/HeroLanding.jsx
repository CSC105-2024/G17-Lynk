import React from "react";
import heroImg from "../../images/SVG/hero.png"; // Importing hero image for the landing page
import { paragraph, title } from "../../styles/styles"; // Importing custom styles for paragraph and title
import Button from "../Button"; // Importing Button component for action button

// Hero Section
const HeroLanding = ({ onSignUp }) => (
  // Main container with flexible layout for text and image sections
  <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-[var(--landing-hero-bg-color)] py-8 md:py-12 gap-10 px-10 md:px-15 lg:px-20 xl:px-40">
    {/* Text Section */}
    <header className="text-center sm:text-left flex flex-col gap-5">
      {/* Hero Title */}
      <h1 className={`${title} text-[var(--text-primary-color)]`}>
        Never Lose a Link Again
      </h1>
      {/* Hero Description */}
      <p className={`${paragraph}`}>
        Save, Organize, and Access Your Web Favorites with Ease
      </p>
      {/* Sign Up Button */}
      <a href="/signup" className="mx-auto">
        <Button text="Save your links now" className="mt-5 md:mt-10" />
      </a>
    </header>

    {/* Image Section */}
    <div className="w-full md:w-md xl:w-2xl h-auto flex justify-center sm:justify-end">
      {/* Displaying the hero image */}
      <img
        src={heroImg}
        alt="Hero Section Image"
        className="w-xs md:w-lg rounded-lg"
      />
    </div>
  </div>
);

export default HeroLanding; // Export HeroLanding component for use in other parts of the application
