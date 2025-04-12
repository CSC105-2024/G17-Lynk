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
    <div className='bg-[var(--sidebar-bg-color)] min-w-60 hidden md:block py-2 px-5'>
      <div className='w-20'>
        <img src='/logo-dark-v2.svg' alt='Logo' />
      </div>
      <div className='m-3'>
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
      <Separator />
      {/* PLAYLIST  */}
      <div className='m-3'>
        <h2 className='text-lg'>Playlist</h2>
        {playlists.map((playlist, index) => {
          {
            const IconComponent = APP_ICONS[playlist.iconLink];
            return (
              <SideBarMenuLink
                key={index}
                icon={<IconComponent />}
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
      <Separator />
      {/* TAGS */}
      <div className='text-xs m-3'>
        <h2 className='text-lg'>Tags</h2>
        <p>#Tag1</p>
        <p>#Tag1</p>
        <p>#Tag1</p>
      </div>
    </div>
  );
};

export default SideBarCard;
