import React from 'react';
import SideBarMenuLink from './SideBarMenuLink';
import { MdHome, MdTimelapse } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import { TiPin } from 'react-icons/ti';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import { dummyPlaylist } from '@/services/data.js';
import APP_ICONS from '@/constants/icons.js';

const SideBarCard = () => {
  const playlists = dummyPlaylist;
  return (
    <div className='bg-[var(--sidebar-bg-color)] min-w-60 hidden md:block py-3 px-5'>
      <div className='w-25'>
        <img src='/logo-dark-v2.svg' alt='Logo' />
      </div>
      <div className='mt-5 mb-8'>
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
      <div className='mt-3 mb-8 text-sm'>
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

        {/* {playlists.map((playlist, index) => (
          <SideBarMenuLink
            key={index}
            icon={`<${playlist.iconLink}/>`}
            name={playlist.name}
            number={playlist.number}
            link={`/app/playlists/${playlist.id}`}
          />
        ))} */}
      </div>
      <Separator className='bg-[var(--seperator-color)]' />

      {/* TAGS */}
      <div className='text-sm mt-3 mb-8'>
        <h2 className='text-lg'>Tags</h2>
        <div className='px-5 my-2 py-1 flex flex-col gap-2'>
          <p>#Tag1</p>
          <p>#Tag1</p>
          <p>#Tag1</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarCard;
