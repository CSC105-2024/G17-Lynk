import React from 'react';
import Button from '../Button';
import Chip from './Chip';
import MorePopover from './MorePopover';
// iconLink = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMEonWCKdNWyW8tTji8fAJ2rOKRq2kFbkjJYtV3fBLIoD154i--dpCYmv4vziO5IDyhri1',
// linkName = 'React Icons',

const LinkCard = ({ data, onDelete }) => {
  const { key, iconLink, linkName, playlists, tags, link, createdAt } = data;
  return (
    <div className='bg-[var(--link-card-bg)] rounded-lg m-3 py-3 px-10 hover:bg-[var(--link-card-hover-bg)]'>
      <div className='flex items-center gap-2 mb-2'>
        <img src={iconLink} alt='icon' className='h-5' />
        <p className='flex-grow'>{linkName}</p>
        {/* <Button text='More...' action='more' /> */}
        <MorePopover onDelete={() => onDelete(key)} />
      </div>
      <div className='grid sm:grid-cols-2 gap-2 text-sm'>
        <div className='flex '>
          <p className='w-3/10 min-w-[30%]'>Playlists:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {playlists.map((playlist, index) => (
              <Chip key={index} name={playlist} />
            ))}
          </div>
        </div>
        <div className='flex'>
          <p className='w-3/10 min-w-[30%]'>Link:</p>
          <a
            href={link}
            className='block max-w-xs overflow-hidden text-ellipsis whitespace-nowrap'
          >
            {link}
          </a>
        </div>
        <div className='flex'>
          <p className='w-3/10 min-w-[30%]'>Tags:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {tags.map((tag, index) => (
              <Chip key={index} name={`${tag}`} />
            ))}
          </div>
        </div>
        <div className='flex'>
          <p className='w-3/10 min-w-[30%]'>Created at:</p>
          <p>{createdAt.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
