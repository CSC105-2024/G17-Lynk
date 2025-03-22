import React from 'react';
import { paragraph, title as titleStyle } from "../styles/styles";

const FeatureLanding = ({ title, description, image, reverse, headerStyle }) => (
    <section className={"py-8 sm:py-12 lg:py-20 bg-black px-10 md:px-15 lg:px-20 xl:px-40"}>
    <div
    className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 ${
     reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
    } items-center justify-between`}
    >
      {/* Text Section */}
      <div className={`w-full md:w-md lg:w-lg xl:w-xl text-center ${reverse ? 'sm:text-right' : 'sm:text-left'} flex flex-col gap-5 md:gap-12`}>
        <h2 className={`${titleStyle} text-white`} style={{color: headerStyle}}>{title}</h2>
        <p className={`${paragraph}  text-gray-200`}>{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-md xl:w-2xl h-auto flex justify-center sm:justify-end">
        <img src={image} alt={title} className="w-xs md:w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  </section>
);

export default FeatureLanding;
