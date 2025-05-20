import { btn, btnFill } from '@/styles/styles';
import React, { useContext, useState } from 'react';
import Button from '../Button';
import { Separator } from '@/components/ui/separator';
import { UserContext } from '@/AppLayout';
import { createLink } from '@/api/links';

// ModalLink - A modal window for creating a new link
// Props:
//   - show: boolean to control visibility
//   - handleClose: function to close the modal

const ModalLink = ({ show, handleClose }) => {
  // Determine modal visibility based on `show` prop

  const [linkInfo, setLinkInfo] = useState({
    url: '',
    title: '',
    description: '',
    iconLink: null,
    tags: [],
    playlistId: null,
  });

  const showHideClassName = show
    ? 'fixed inset-0 w-full h-full bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-100 scroll-y'
    : 'hidden';
  // Dummy create function (you can replace with real logic)

  const getFavicon = (url) => {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}`;
  };

  // Returns: https://www.google.com/s2/favicons?domain=example.com

  const { links, setLinks, playlists } = useContext(UserContext);
  const handleCreate = async (link) => {
    console.log('Created link:', link);
    try {
      const faviconUrl = getFavicon(link.url);
      const updatedTags = link.tags.filter((tag) => tag.length > 0);
      link = { ...link, tags: updatedTags };
      const [linksData] = await createLink(
        link.url,
        link.title,
        link.description,
        (link.iconLink = faviconUrl),
        link.tags,
        link.playlistId
      );
      console.log('here bar');
      if (linksData.success) {
        // console.log('here bar insdie');
        setLinks(linksData.data.data);
      }
    } catch (error) {
      console.error('Error creating data:', error);
    }
    setLinks([...links, link]);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <form className='bg-[var(--modal-bg-color)] rounded-lg p-8 w-full h-auto max-w-md shadow-lg  overflow-y-auto'>
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
            value={linkInfo.url}
            onChange={(e) => setLinkInfo({ ...linkInfo, url: e.target.value })}
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
            value={linkInfo.playlistId}
            onChange={(e) =>
              setLinkInfo({ ...linkInfo, playlistId: +e.target.value })
            }
          >
            <option>Select playlist</option>
            {playlists.map((pl) => {
              // console.log(pl.name);
              return <option value={pl.id}>{pl.name}</option>;
            })}
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

        {/* Tag Dropdown */}
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
            value={linkInfo.tags}
            onChange={(e) => {
              console.log('stupdi', e.target.value.trim());
              const newTags = e.target.value.split(/[, ]+/);

              // console.log("here new trim", newTags)
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

        {/* Create Button */}
        <div className='flex items-center justify-between'>
          <Button
            text='Create'
            onClick={() => {
              handleCreate(linkInfo);
              setLinkInfo({
                link: '',
                playlist: '',
                name: '',
                tags: '',
                description: '',
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalLink;
