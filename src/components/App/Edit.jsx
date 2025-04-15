import React, { useState } from 'react';

const EditLinkModal = ({ isOpen, onClose, onSave, initialLinkData }) => {
  const [link, setLink] = useState(initialLinkData?.link || '');
  const [playlist, setPlaylist] = useState(initialLinkData?.playlist || '');
  const [name, setName] = useState(initialLinkData?.name || '');
  const [tag, setTag] = useState(initialLinkData?.tag || '');
  const [description, setDescription] = useState(
    initialLinkData?.description || ''
  );

  const handleSave = () => {
    const linkData = {
      link,
      playlist,
      name,
      tag,
      description,
    };
    onSave(linkData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50'>
      <div className='bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold text-white'>Edit a Link</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-white focus:outline-none'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='link'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Link
          </label>
          <input
            type='text'
            id='link'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700'
            placeholder='e.g. https://example.com'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='playlist'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Playlist
          </label>
          <select
            id='playlist'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700'
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
          >
            <option value=''>Select Playlist</option>
            <option value='playlist1'>Playlist 1</option>
            <option value='playlist2'>Playlist 2</option>
          </select>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700'
            placeholder='e.g. Example Link Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='tag'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Tag
          </label>
          <select
            id='tag'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value=''>Select Tag</option>
            <option value='tag1'>Tag 1</option>
            <option value='tag2'>Tag 2</option>
          </select>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='description'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Description
          </label>
          <textarea
            id='description'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 h-24 resize-none'
            placeholder="What's the reason for saving this link?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='flex items-center justify-end'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleSave}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLinkModal;
