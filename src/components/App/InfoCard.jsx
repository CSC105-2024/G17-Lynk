import React from 'react';
import { IoMdLink } from 'react-icons/io';
import { Separator } from '@/components/ui/separator';

const InfoCard = () => {
  return (
    <div className='grid grid-cols-3 bg-[var(--info-card-bg-color)] rounded-2xl m-5 p-4'>
      <div className=' border-r-2 flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-icon-bg-color)] rounded-lg mr-5 text-blue-500'>
          <IoMdLink />
        </div>
        <div>
          <p className='text-3xl'>3</p>
          <p>Links</p>
        </div>
      </div>
      <div className=' border-r-2 flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-icon-bg-color)] rounded-lg mr-5 text-blue-500'>
          <IoMdLink />
        </div>
        <div>
          <p className='text-3xl'>3</p>
          <p>Playlists</p>
        </div>
      </div>
      <div className='flex p-5 justify-center items-center'>
        <div className='p-2.5 text-2xl bg-[var(--info-icon-bg-color)] rounded-lg mr-5 text-blue-500'>
          <IoMdLink />
        </div>
        <div>
          <p className='text-3xl'>3</p>
          <p>Tags</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
