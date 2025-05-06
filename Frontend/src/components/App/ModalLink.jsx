import { btn, btnFill } from '@/styles/styles';
import React from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';

// ModalLink - A modal window for creating a new link
// Props:
//   - show: boolean to control visibility
//   - handleClose: function to close the modal

const ModalLink = ({ show, handleClose }) => {
  // Determine modal visibility based on `show` prop
  const showHideClassName = show
    ? 'fixed inset-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-100 scroll-y'
    : 'hidden';
  // Dummy create function (you can replace with real logic)
  const handleCreate = () => {
    console.log('create new link');
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <form className='bg-[var(--modal-bg-color)] rounded-lg p-8 w-full h-2/3 max-w-md shadow-lg  overflow-y-auto'>
        {/* Modal Header */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-[var(--app-text-color)]'>
            Create a New Link
          </h2>
          <button
            onClick={handleClose}
            className='cursor-pointer text-[var(--app-secondary-text-color)] hover:text-[var(--app-text-color)]'
          >
            {/* Close Icon */}
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

        {/* Separator */}
        <Separator className='bg-[var(--seperator-color)] mb-4' />

        {/* Link Input */}
        <div className='mb-4'>
          <label
            htmlFor='link'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Link
          </label>
          <input
            type='text'
            id='link'
            placeholder='e.g. https://example.com'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        {/* Playlist Dropdown */}
        <div className='mb-4'>
          <label
            htmlFor='playlist'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Playlist
          </label>
          <select
            id='playlist'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          >
            <option>Dropdown</option>
          </select>
        </div>

        {/* Name Input */}
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='e.g. Example Link Name'
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        {/* Tag Dropdown */}
        <div className='mb-4'>
          <label
            htmlFor='tag'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Tag
          </label>

          <textarea
            id='description'
            placeholder='Enter a Tag name related to the link. Eg. Music, '
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 h-25 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        {/* Description Textarea */}
        <div className='mb-6'>
          <label
            htmlFor='description'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Description
          </label>
          <textarea
            id='description'
            placeholder="What's the reason for saving this link?"
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 h-25 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
          />
        </div>

        {/* Create Button */}
        <div className='flex items-center justify-between'>
          <Button type='submit' text='Create' onClick={handleCreate} />
        </div>
      </form>
    </div>
  );
};

export default ModalLink;
