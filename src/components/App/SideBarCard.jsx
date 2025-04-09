import React from 'react';
import SideBarMenuLink from './SideBarMenuLink';
import { MdHome, MdTimelapse } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';

const SideBarCard = () => {
  return (
    <div className='bg-amber-400 min-w-60 hidden sm:block py-2 px-5'>
      <div className='w-20'>
        <img src='/logo-dark-v2.svg' alt='Logo' />
      </div>
      <div className='m-3'>
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
      </div>
      <Separator />
      <div className='m-3'>
        <h2 className='text-lg'>Playlist</h2>
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
        <SideBarMenuLink icon={<MdHome />} name='Home' number='3' />
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
