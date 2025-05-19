import { getPlaylists } from '@/api/playlist';
import React, { useEffect, useState } from 'react';
import { IoMdLink } from 'react-icons/io';
import { useContext } from 'react';
import { UserContext } from '@/App';

const InfoCard = () => {
  const { playlists, links } = useContext(UserContext); // Get playlists from context
  // console.log('here is playlists: ', playlists); // Log playlists to console
  const tags = [];
  links.forEach((link) => {
    (link.tags || []).forEach((tag) => {
      if (!tags.some((existingTag) => existingTag.name === tag.name)) {
        tags.push(tag);
      }
    });
  });

  const infoData = [
    { label: 'Links', value: links.length },
    { label: 'Playlists', value: playlists.length },
    { label: 'Tags', value: tags.length },
  ];

  return (
    // A 3-column grid card showing some stats (Links, Playlists, Tags)
    // Each column has an icon, a number, and a label
    // Responsive design: turns into a single column on small screens
    <div className='grid md:grid-cols-3 bg-[var(--info-card-bg-color)] rounded-2xl py-5 w-full'>
      {infoData.map((item, idx) => (
        <div
          key={item.label}
          className={`border-0 flex p-5 justify-center items-center gap-5 lg:gap-8 ${
            idx < infoData.length - 1
              ? 'md:border-r-2 border-[var(--seperator-color)]'
              : ''
          } border-[var(--seperator-color)]`}
        >
          <div className='p-2.5 text-3xl lg:text-4xl bg-[var(--info-card-icon-bg-color)] rounded-lg text-[var(--info-card-icon-color)]'>
            <IoMdLink />
          </div>
          <div className='w-12'>
            <p className='text-3xl lg:text-4xl'>{item.value}</p>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
