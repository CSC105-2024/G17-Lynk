import React from "react";

const ModalLink = ({ show, handleClose }) => {
  const showHideClassName = show ? "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Create a New Link</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block text-gray-300 text-sm font-bold mb-2">
            Link
          </label>
          <input
            type="text"
            id="link"
            placeholder="e.g. https://example.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="playlist" className="block text-gray-300 text-sm font-bold mb-2">
            Playlist
          </label>
          <select
            id="playlist"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          >
            <option>Dropdown</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Example Link Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tag" className="block text-gray-300 text-sm font-bold mb-2">
            Tag
          </label>
          <select
            id="tag"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          >
            <option>Dropdown</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-300 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            placeholder="What's the reason for saving this link?"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLink;