import React from 'react';
import { IoMdLink } from 'react-icons/io';

const InfoCard = () => {
  return (
    <div className='grid md:grid-cols-3 bg-[var(--info-card-bg-color)] rounded-2xl py-5 w-full'>
      <div className=' md:border-r-2 border-[var(--seperator-color)] flex p-5 justify-center items-center gap-5 lg:gap-8'>
        <div className='p-2.5 text-3xl lg:text-4xl bg-[var(--info-card-icon-bg-color)] rounded-lg text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div className=''>
          <p className='text-3xl lg:text-4xl'>3</p>
          <p>Links</p>
        </div>
      </div>
      <div className=' md:border-r-2 border-[var(--seperator-color)] flex p-5 justify-center items-center gap-5 lg:gap-8'>
        <div className='p-2.5 text-3xl lg:text-4xl bg-[var(--info-card-icon-bg-color)] rounded-lg text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div className=''>
          <p className='text-3xl lg:text-4xl'>3</p>
          <p>Playlists</p>
        </div>
      </div>
      <div className=' flex p-5 justify-center items-center gap-5 lg:gap-8'>
        <div className='p-2.5 text-3xl lg:text-4xl bg-[var(--info-card-icon-bg-color)] rounded-lg text-[var(--info-card-icon-color)]'>
          <IoMdLink />
        </div>
        <div>
          <p className='text-3xl lg:text-4xl'>3</p>
          <p>Tags</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
