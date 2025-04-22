import { btn, btnFill } from '@/styles/styles';
import React from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';

const ModalLink = ({ show, handleClose }) => {
  const showHideClassName = show
    ? 'fixed inset-0 bg-[var(--main-bg-color)] bg-opacity-50 flex justify-center items-center z-50'
    : 'hidden';

  const handleCreate = () => {
    console.log('create new link');
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <div className='bg-[var(--modal-bg-color)] rounded-lg p-8 w-full max-w-md shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-[var(--app-text-color)]'>
            Create a New Link
          </h2>
          <button
            onClick={handleClose}
            className='cursor-pointer text-[var(--app-secondary-text-color)] hover:text-[var(--app-text-color)]'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>
        <Separator className='bg-[var(--seperator-color)] mb-4' />
        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Link
          </label>
          <input
            type='text'
            id='link'
            placeholder='e.g. https://example.com'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Playlist
          </label>
          <select
            id='playlist'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          >
            <option>Dropdown</option>
          </select>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='e.g. Example Link Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Tag
          </label>
          <select
            id='tag'
            className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          >
            <option>Dropdown</option>
          </select>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='playlistName'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Description
          </label>
          <textarea
            id='description'
            placeholder="What's the reason for saving this link?"
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        <div className='flex items-center justify-between'>
          {/* <button
            className={`${btn} ${btnFill}`}
            // className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Create
          </button> */}
          <Button type='submit' text='Create' onClick={handleCreate} />
        </div>
      </div>
    </div>
  );
};

export default ModalLink;
