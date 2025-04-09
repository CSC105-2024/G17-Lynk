import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMenuLink = ({ icon, name, number, link }) => {
  return (
    <Link
      to={link}
      className='flex items-center hover:bg-[var(--hover-sidemenu-bg)] my-2 py-1 px-4 rounded-lg cursor-pointer'
    >
      <div>{icon}</div>
      <p className='flex-grow ml-2'>{name}</p>
      <p>{number}</p>
    </Link>
  );
};

export default SideBarMenuLink;
