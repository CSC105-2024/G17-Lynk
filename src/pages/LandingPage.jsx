import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center">
          <img
            src="../images/SVG/Final-07.svg"
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
                src="../images/choong-deng-xiang-lI74I8dVNZo-unsplash 1.svg" 
                alt="Description"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Introducing Link Playlists</h2>
          <p className="text-gray-300">
            Our Link Playlists feature allows you to group related URLs into organized collections, making it easier than ever to organize and access your favorite content. Whether you’re planning research or simply sharing a list of must-visit websites, Link Playlists provide a seamless way to bundle links together in one place.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Efficient Link Management</h2>
          <p className="text-gray-300 mb-6">
            Our platform helps you save time by keeping all your important links in one place. Stay organized with customizable folders and tags, and enjoy seamless sharing and collaboration tools to enhance your productivity and digital life.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Smart Filtering</h2>
          <p className="text-gray-300 mb-6">
            Easily find what you need with our powerful filtering options. Categorize your links by Prototyping, UI Design, or React.js, and access them with ease. Stay organized and efficient with customizable filters that adapt to your workflow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-white">Filter by Category</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300">Prototyping</li>
                <li className="text-gray-300">UI Design</li>
                <li className="text-gray-300">React.js</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-white">Filter by Tags</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300">Product</li>
                <li className="text-gray-300">User Experience</li>
                <li className="text-gray-300">Leadership</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;