import React from 'react';
import darklogo from '../images/SVG/Final-07.svg';
import heroimg from '../images/hero.svg';
import playlistImage from '../images/playlist.svg'
import managementImage from '../images/linkManage.svg'
import filteringImage from '../images/filtering.svg'
import lynklogo from '../images/SVG/main logos/Final-05.svg'
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center">
          <img
            src={darklogo}
            alt="logo"
            className="w-[270px] h-[150px]"
          />
          <button className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Login
          </button>
        </div>

        <div className="flex items-center justify-center p-8 bg-black">
          <div className="flex items-center justify-between w-full max-w-6xl">
            <header className="text-left">
              <h1 className="text-4xl font-bold text-white">Never Lose a Link Again</h1>
              <p className="mt-4 text-lg text-gray-300">
                Save, Organize, and Access Your Web Favorites with Ease
              </p>
              <button className="mt-12 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Save your links now
              </button>
            </header>

            <div className="ml-8">
              <img
                src={heroimg}
                alt="Description"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>

{/* Feature 1: Efficient Link Management */}
<section className="py-12 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 md:order-2 text-left">
        <h2 className="text-2xl font-bold text-white mb-4">Efficient Link Management</h2>
        <p className="text-gray-300">
          Our platform helps you save time by keeping all your important links in one place. Stay organized with customizable folders and tags, and enjoy seamless sharing and collaboration tools to enhance your productivity and digital life.
        </p>
      </div>
      <div className="md:w-1/2 md:mr-8 mt-8 md:mt-0 md:order-1">
        <img
          src={managementImage}
          alt="Efficient Link Management"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

       {/* Feature 2: Link Playlists */}
       <section className="py-12 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-white mb-4">Introducing Link Playlists</h2>
        <p className="text-gray-300">
          Our Link Playlists feature allows you to group related URLs into organized collections, making it easier than ever to organize and access your favorite content. Whether you’re planning research or simply sharing a list of must-visit websites, Link Playlists provide a seamless way to bundle links together in one place.
        </p>
      </div>
      <div className="md:w-1/2 md:mr-8 mt-8 md:mt-0 ml-40 ">
        <img
          src={playlistImage} 
          alt="Link Playlists"
          className="w-full h-auto rounded-lg shadow-md"
        /> 
      </div>
    </div>
  </div>
</section>

{/* Feature 3: Smart Filtering */}
<section className="py-12 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row-reverse items-center justify-between">
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-white mb-4">Smart Filtering</h2>
        <p className="text-gray-300">
          Easily find what you need with our powerful filtering options. Categorize your links by Prototyping, UI Design, or React.js, and access them with ease. Stay organized and efficient with customizable filters that adapt to your workflow.
        </p>
        
      </div>
      <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 mr-40">
        <img
          src={filteringImage}
          alt="Smart Filtering"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

{/*Footer*/}
<div className="font-sans flex items-center justify-between">
      <img src={lynklogo} alt="lynk Logo" className="w-36" />
      <div className="text-sm text-gray-800 font-medium">
        ©2025lynk.com
      </div>
    </div>

      </div>
    </div>
  );
};

export default LandingPage;