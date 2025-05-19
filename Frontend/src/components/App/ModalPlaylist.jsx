import React, { useState } from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';
import APP_ICONS from '@/constants/icons'; // Import your icons

/**
 * Modal component for creating a new playlist
 *
 * @param {boolean} isOpen - Controls whether the modal is visible
 * @param {function} onClose - Callback function to close the modal
 * @param {function} onCreate - Callback function when playlist is created
 */
const ModalPlaylist = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('folder'); // Default icon

  const handleCreate = () => {
    onCreate({ name, description, iconLink: selectedIcon });
    onClose();
    setName('');
    setDescription('');
    setSelectedIcon('');
  };

  if (!isOpen) return null;

  // Convert icons object to array for mapping
  const iconEntries = Object.entries(APP_ICONS);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-100'>
      <form className='bg-[var(--modal-bg-color)] p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto'>
        {/* Modal header with title and close button */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-[var(--app-text-color)]'>
            Create a New Playlist
          </h2>
          <button
            onClick={onClose}
            className='cursor-pointer text-gray-500 hover:text-[var(--app-text-color)] focus:outline-none'
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

        <Separator className='bg-[var(--seperator-color)] mb-4' />

        {/* Playlist name input field */}
        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='playlistName'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-input-text-color)]'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Icon selection */}
        <div className='mb-4'>
          <label className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'>
            Icon
          </label>
          <div className='flex flex-wrap gap-3'>
            {iconEntries.map(([iconKey, IconComponent]) => (
              <button
                key={iconKey}
                type='button'
                className={`p-2 rounded-lg border-2 transition-all ${
                  selectedIcon === iconKey
                    ? 'border-[var(--primary-color)] bg-[var(--primary-bg-color)]'
                    : 'border-transparent hover:border-[var(--primary-color)]'
                }`}
                onClick={() => setSelectedIcon(iconKey)}
              >
                <IconComponent
                  className={`text-xl ${
                    selectedIcon === iconKey
                      ? 'text-[var(--primary-color)]'
                      : 'text-[var(--app-text-color)]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Playlist description textarea */}
        <div className='mb-6'>
          <label
            htmlFor='playlistDescription'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Description
          </label>
          <textarea
            id='playlistDescription'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)] h-32 resize-none'
            placeholder="What's the reason for creating this playlist? E.g. to collect great calculus explanation videos"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Create button at the bottom of the modal */}
        <div className='flex items-center justify-end'>
          <Button text='Create' onClick={handleCreate} />
        </div>
      </form>
    </div>
  );
};

export default ModalPlaylist;
