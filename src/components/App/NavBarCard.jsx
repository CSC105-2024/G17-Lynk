import React from 'react';
import Button from '../Button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const NavBarCard = () => {
  return (
    <div className='px-5 py-2 flex items-center gap-10 flex-wrap '>
      <div className='text-3xl p-3 block md:hidden'>
        <IoMenu />
      </div>
      <div className='md:flex-grow flex items-center gap-2 rounded-xl py-2 px-4 bg-[var(--searchbar-bg-color)]'>
        <IoMdSearch />
        <input
          type='text'
          placeholder='Search'
          className='focus:outline-none flex-grow'
        />
      </div>
      <Button text='New Link' className='' />
      <Button text='New Playlist' className='' />
      <FaCircleUser className='text-2xl' />
    </div>
  );
};

export default NavBarCard;
