import React from 'react';

const FeatureLanding = ({ title, description, image, reverse }) => (
    <section className="py-8 sm:py-12 bg-black">
    <div
      className={`max-w-6xl mx-auto px-4 flex flex-col ${
        reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
      } items-center justify-between`}
    >
      {/* Text Section */}
      <div className="sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>

      {/* Image Section */}
      <div className="sm:w-1/2">
        <img src={image} alt={title} className="w-full max-w-xs sm:max-w-md h-auto rounded-lg shadow-md" />
      </div>
    </div>
  </section>
);

export default FeatureLanding;
