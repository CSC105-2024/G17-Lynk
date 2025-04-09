import React from 'react';
import Button from '../Button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';

const NavBarCard = () => {
  return (
    <div className='bg-amber-950 px-5 py-2 flex items-center gap-10 justify-end'>
      <div className='flex-grow flex items-center gap-2 bg-amber-800 rounded-xl py-2 px-4'>
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
