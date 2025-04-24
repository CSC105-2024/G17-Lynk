import React from 'react';
import Button from '../Button';
import Chip from './Chip';
import MorePopover from './MorePopover';

// LinkCard displays detailed information about a single saved link
// It shows link icon, name, playlists, tags, link URL, and creation time
// Also includes a MorePopover for options like deleting the link

const LinkCard = ({ data, onDelete }) => {
  // Destructure necessary fields from incoming data
  const { key, iconLink, linkName, playlists, tags, link, createdAt } = data;

  return (
    <div className='bg-[var(--link-card-bg)] rounded-lg shadow py-3 px-3 md:px-10 hover:bg-[var(--link-card-hover-bg)] w-full '>
      <div className='flex items-center gap-2 mb-2'>
        <img src={iconLink} alt='icon' className='h-5' />
        <p className='flex-grow overflow-hidden text-ellipsis whitespace-nowrap'>
          {linkName}
        </p>
        <MorePopover onDelete={() => onDelete(key)} />
      </div>

      {/* Grid section: playlists, link URL, tags, created time */}
      <div className='grid sm:grid-cols-2 gap-2 text-sm'>
        {/* Playlists */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Playlists:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {playlists.map((playlist, index) => (
              <Chip key={index} name={playlist} />
            ))}
          </div>
        </div>

        {/* Link URL */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Link:</p>
          <a
            href={link}
            className='block max-w-xs overflow-hidden text-ellipsis whitespace-nowrap underline'
          >
            {link}
          </a>
        </div>

        {/* Tags */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Tags:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {tags.map((tag, index) => (
              <Chip key={index} name={`${tag}`} />
            ))}
          </div>
        </div>

        {/* Created At timestamp */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Created at:</p>
          <p>{createdAt.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
