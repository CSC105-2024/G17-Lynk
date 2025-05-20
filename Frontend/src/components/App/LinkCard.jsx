import React, { useContext } from 'react';
import Button from '../Button';
import Chip from './Chip';
import MorePopover from './MorePopover';
import { UserContext } from '@/AppLayout';

// LinkCard displays detailed information about a single saved link
// It shows link icon, name, playlists, tags, link URL, and creation time
// Also includes a MorePopover for options like deleting the link

const LinkCard = ({ data }) => {
  // Destructure data object to extract relevant properties
  const { playlists } = useContext(UserContext);
  // console.log("here is dadta that i'm looking", data);
  const { id, iconLink, title, playlistId, tags, url, createdAt } = data;
  // console.log('here  is title: ', title);
  // console.log('here  is playlistId: ', playlistId);
  // console.log('ths is the data:', data);
  return (
    <div className='bg-[var(--link-card-bg)] rounded-lg shadow py-3 px-3 md:px-10 hover:bg-[var(--link-card-hover-bg)] w-full '>
      <div className='flex items-center gap-2 mb-2'>
        {iconLink ? (
          <img src={iconLink} alt='icon' className='h-6' />
        ) : (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJDbx0l_oRW7j2qkvMsg6JXZey2O63913cA&s'
            alt='icon'
            className='h-6 rounded-full'
          />
        )}
        <p className='flex-grow overflow-hidden text-ellipsis whitespace-nowrap'>
          {title}
        </p>
        <MorePopover data={data} />
      </div>

      {/* Grid section: playlists, link URL, tags, created time */}
      <div className='grid sm:grid-cols-2 gap-2 text-sm'>
        {/* Playlists */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Playlists:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {playlists?.map(
              (playlist, index) =>
                playlistId === playlist.id && (
                  <Chip key={index} name={playlist.name} />
                )
            )}
          </div>
        </div>

        {/* Link URL */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Link:</p>
          <a
            href={url}
            className='block max-w-xs overflow-hidden text-ellipsis whitespace-nowrap underline'
          >
            {url}
          </a>
        </div>

        {/* Tags */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Tags:</p>
          <div className='flex flex-nowrap gap-1 overflow-auto [scrollbar-width:none]'>
            {tags?.map((tag, index) => (
              <Chip key={index} name={`${tag.name}`} />
            ))}
          </div>
        </div>

        {/* Created At timestamp */}
        <div className='flex overflow-hidden'>
          <p className='w-3/10 min-w-[30%]'>Created at:</p>
          <p>{createdAt?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
