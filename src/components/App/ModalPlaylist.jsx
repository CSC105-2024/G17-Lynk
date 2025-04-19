import React, { useState } from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';

const ModalPlaylist = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    onCreate({ name, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-50'>
      <div className='bg-[var(--modal-bg-color)] p-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold text-white'>
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
        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='playlistName'
            className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='playlistDescription'
            className='block text-gray-300 text-sm font-bold mb-2'
          >
            Description
          </label>
          <textarea
            id='playlistDescription'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)] h-32 resize-none'
            placeholder="What's the reason for creating this playlist? E.g. to collect great calculus explanation videos"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-end'>
          <Button text='Create' onClick={handleCreate} />
        </div>
      </div>
    </div>
  );
};

export default ModalPlaylist;
