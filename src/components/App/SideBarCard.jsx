import React from 'react';
import SideBarMenuLink from './SideBarMenuLink';
import { MdHome, MdTimelapse } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import { TiPin } from 'react-icons/ti';
import { MdOutlineDatasetLinked } from 'react-icons/md';

const SideBarCard = () => {
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
      <div className='m-3'>
        <h2 className='text-lg'>Playlist</h2>
        <SideBarMenuLink icon={<MdHome />} name='KMUTT' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Tutorial' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Visit Later' number='3' />
      </div>
      <Separator />
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
