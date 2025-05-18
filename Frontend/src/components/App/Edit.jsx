import React, { useState, useContext } from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';
import { UserContext } from '@/App';

const EditLinkModal = ({ isOpen, onClose, onSave, initialLinkData }) => {
  const { playlists } = useContext(UserContext);
  const getFavicon = (url) => {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}`;
  };
  // Initialize state with the same structure as ModalLink
  const [linkInfo, setLinkInfo] = useState(
    initialLinkData || {
      url: '',
      title: '',
      description: '',
      iconLink: null,
      tags: [],
      playlistId: null,
    }
  );

  if (!isOpen) return null;

  const handleSave = () => {
    console.log('here bar kwar');
    const updatedTags = linkInfo.tags.filter((tag) => tag.length > 0);
    const updatedLink = { ...linkInfo, tags: updatedTags };
    onSave(updatedLink);
    onClose();
  };

  return (
    <div className='fixed inset-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-100 scroll-y'>
      <form className='bg-[var(--modal-bg-color)] rounded-lg p-8 w-full h-auto max-w-md shadow-lg overflow-y-auto'>
        {/* Modal Header */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-[var(--app-text-color)]'>
            Edit Link
          </h2>
          <button
            onClick={onClose}
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
            value={linkInfo.url}
            onChange={(e) =>
              setLinkInfo({
                ...linkInfo,
                url: e.target.value,
                iconLink: getFavicon(e.target.value),
              })
            }
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
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)] required'
            value={linkInfo.playlistId || ''}
            onChange={(e) => {
              console.log('my new pl id', e.target.value);
              setLinkInfo({ ...linkInfo, playlistId: +e.target.value });
            }}
          >
            <option value=''>Select playlist</option>
            {playlists.map((pl) => (
              <option key={pl.id} value={pl.id}>
                {pl.name}
              </option>
            ))}
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
            value={linkInfo.title}
            onChange={(e) =>
              setLinkInfo({ ...linkInfo, title: e.target.value })
            }
          />
        </div>

        {/* Tag Input */}
        <div className='mb-4'>
          <label
            htmlFor='tag'
            className='block text-[var(--app-text-color)] text-sm font-semibold mb-2'
          >
            Tags
          </label>
          <textarea
            id='description'
            placeholder='Enter tag names (SEPARATED BY COMMAS) related to the link. Eg. Music, '
            className='shadow appearance-none border rounded-lg w-full py-2 px-3 h-25 leading-tight focus:outline-none focus:shadow-outline bg-[var(--modal-input-bg-color)] text-[var(--app-text-color)]'
            value={linkInfo.tags.join(', ')}
            onChange={(e) => {
              const newTags = e.target.value.split(/[, ]+/);
              setLinkInfo({ ...linkInfo, tags: newTags });
            }}
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
            value={linkInfo.description}
            onChange={(e) =>
              setLinkInfo({ ...linkInfo, description: e.target.value })
            }
          />
        </div>

        {/* Save Button */}
        <div className='flex items-center justify-between'>
          <Button
            text='Save Changes'
            onClick={(e) => {
              // e.preventDefault();
              handleSave();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default EditLinkModal;
