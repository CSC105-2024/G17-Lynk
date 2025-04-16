import React from 'react';
import { IoMdLink } from 'react-icons/io';

const InfoCard = () => {
  return (
    <div className='grid md:grid-cols-3 bg-[var(--info-card-bg-color)] rounded-2xl py-5 '>
      <div className=' md:border-r-2 flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-card-icon-bg-color)] rounded-lg mr-5  text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div className='w-3'>
          <p className='text-3xl'>3</p>
          <p>Links</p>
        </div>
      </div>
      <div className=' md:border-r-2 flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-card-icon-bg-color)] rounded-lg mr-5 text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div className='w-3'>
          <p className='text-3xl'>3</p>
          <p>Playlists</p>
        </div>
      </div>
      <div className=' flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-card-icon-bg-color)] rounded-lg mr-5  text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div className='w-3'>
          <p className='text-3xl'>3</p>
          <p>Tags</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
