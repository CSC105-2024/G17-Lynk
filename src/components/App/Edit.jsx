import React, { useState } from 'react';
import Button from '../Button';

const EditLinkModal = ({ isOpen, onClose, onSave, initialLinkData }) => {
  // Initialize local state with existing link data if available (for editing)
  const [link, setLink] = useState(initialLinkData?.link || '');
  const [playlist, setPlaylist] = useState(initialLinkData?.playlist || '');
  const [name, setName] = useState(initialLinkData?.name || '');
  const [tag, setTag] = useState(initialLinkData?.tag || '');
  const [description, setDescription] = useState(
    initialLinkData?.description || ''
  );

  // Collects all form data and triggers save and close actions
  const handleSave = () => {
    const linkData = { link, playlist, name, tag, description };
    onSave(linkData);
    onClose();
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    // Modal layout: centered overlay with semi-transparent background
    <div className='fixed top-0 left-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-50 text-[var(--app-text-color)]'>
      <div className='bg-[var(--modal-bg-color)] p-6 rounded-lg shadow-lg w-full max-w-md'>
        {/* Header with title and close button */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Edit a Link</h2>
          <button
            onClick={onClose}
            className='cursor-pointer text-gray-500 hover:text-[var(--app-text-color)] focus:outline-none'
          >
            {/* Close (X) icon */}
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

        {/* Input field for the link */}
        <div className='mb-4'>
          <label htmlFor='link' className='block text-sm font-bold mb-2'>
            Link
          </label>
          <input
            type='text'
            id='link'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] '
            placeholder='e.g. https://example.com'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* Dropdown to select a playlist */}
        <div className='mb-4'>
          <label htmlFor='playlist' className='block text-sm font-bold mb-2'>
            Playlist
          </label>
          <select
            id='playlist'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
          >
            <option value=''>Select Playlist</option>
            <option value='playlist1'>Playlist 1</option>
            <option value='playlist2'>Playlist 2</option>
          </select>
        </div>

        {/* Input field for the name */}
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] '
            placeholder='e.g. Example Link Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Dropdown to select a tag */}
        <div className='mb-4'>
          <label htmlFor='tag' className='block text-sm font-bold mb-2'>
            Tag
          </label>
          <select
            id='tag'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  bg-[var(--modal-input-bg-color)]'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value=''>Select Tag</option>
            <option value='tag1'>Tag 1</option>
            <option value='tag2'>Tag 2</option>
          </select>
        </div>

        {/* Textarea for description */}
        <div className='mb-6'>
          <label htmlFor='description' className='block text-sm font-bold mb-2'>
            Description
          </label>
          <textarea
            id='description'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-[var(--modal-input-bg-color)] h-24 resize-none'
            placeholder="What's the reason for saving this link?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Save button at the bottom */}
        <div className='flex items-center justify-end'>
          <Button type='submit' text='Done' onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EditLinkModal;
