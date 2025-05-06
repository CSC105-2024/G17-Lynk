import React from "react";
import { paragraph, title as titleStyle } from "../../styles/styles"; // Importing custom styles for paragraph and title

const FeatureLanding = ({
  title,
  description,
  image,
  reverse,
  headerStyle,
}) => (
  <section
    className={
      "py-8 sm:py-12 lg:py-20 bg-[var(--feature-bg-color)] px-10 md:px-15 lg:px-20 xl:px-40"
    }
  >
    {/* Wrapper div with conditional layout based on the 'reverse' prop */}
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-center justify-between`}
    >
      {/* Text Section */}
      <div
        className={`w-full md:w-md lg:w-lg xl:w-xl text-center ${
          reverse ? "sm:text-right" : "sm:text-left"
        } flex flex-col gap-5 md:gap-12`}
      >
        {/* Title */}
        <h2
          className={`${titleStyle} text-[var(--text-primary-color)]`}
          style={{ color: headerStyle }} // Apply custom header color
        >
          {title}
        </h2>
        {/* Description */}
        <p className={`${paragraph}`}>{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-md xl:w-2xl h-auto flex justify-center sm:justify-end">
        {/* Image with responsive size and rounded corners */}
        <img
          src={image}
          alt={title}
          className="w-xs md:w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
);

export default FeatureLanding; // Export FeatureLanding component for use in other parts of the application
