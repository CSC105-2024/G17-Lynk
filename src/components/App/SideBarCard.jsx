import React from 'react';
import SideBarMenuLink from './SideBarMenuLink';
import { MdHome, MdTimelapse } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import { TiPin } from 'react-icons/ti';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import { dummyPlaylist, dummyTags } from '@/services/data.js';
import APP_ICONS from '@/constants/icons.js';
import { Link } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';
import Logo from '../Logo';

const SideBarCard = ({ onToggle, showSideBar }) => {
  const playlists = dummyPlaylist;
  const tags = dummyTags;
  console.log('here is sidebar: ', showSideBar);
  const sideBarDisplayStatus = showSideBar
    ? 'bg-[var(--sidebar-bg-color)] min-w-full md:min-w-60 md:block py-3 px-5'
    : 'hidden md:block bg-[var(--sidebar-bg-color)] min-w-60 py-3 px-5';

  return (
    <div className={`${sideBarDisplayStatus} text-lg md:text-md`}>
      <div className='w-full flex justify-between items-center py-3'>
        {/* LOGO  */}
        <Link to='/'>
          <Logo version='v2' className='w-30' />
        </Link>
        {/* Close button for humber menu in mobile view */}
        <FaXmark className='text-4xl block md:hidden' onClick={onToggle} />
      </div>
      {/* Default 3 playlists  */}
      <div className='mt-5 mb-8' onClick={onToggle}>
        <SideBarMenuLink
          icon={<MdHome />}
          name='Dashboard'
          number='3'
          link='/app/dashboard'
        />
        <SideBarMenuLink
          icon={<MdOutlineDatasetLinked />}
          name='All links'
          number='3'
          link='/app/links'
        />
        <SideBarMenuLink
          icon={<TiPin />}
          name='Pins'
          number='3'
          link='/app/pins'
        />
      </div>
      <Separator className='bg-[var(--seperator-color)]' />
      {/* PLAYLIST  */}
      <div className='mt-3 mb-8' onClick={onToggle}>
        <h2 className='text-lg mb-3'>Playlist</h2>
        {playlists.map((playlist, index) => {
          {
            const IconComponent = APP_ICONS[playlist.iconLink];
            return (
              <SideBarMenuLink
                key={index}
                icon={IconComponent ? <IconComponent /> : null}
                name={playlist.name}
                number={playlist.number}
                link={`/app/playlists/${playlist.id}`}
              />
            );
          }
        })}
      </div>
      <Separator className='bg-[var(--seperator-color)]' />

      {/* TAGS */}
      <div className='mt-3 mb-8'>
        <h2 className='text-lg'>Tags</h2>
        <div className='px-5 my-2 py-1 flex flex-col gap-2'>
          {tags.map((tag, index) => {
            return <p>{tag.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBarCard;
