import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenuLink = ({ icon, name, number, link }) => {
  return (
    <NavLink
      to={link}
      // className='flex items-center hover:bg-[var(--hover-sidemenu-bg)] my-2 py-1 px-4 rounded-lg cursor-pointer'
      className={({ isActive }) =>
        `flex items-center hover:bg-[var(--hover-sidemenu-bg)] my-2 py-1 px-4 rounded-lg cursor-pointer ${
          isActive
            ? 'bg-[var(--active-sidemenu-bg)] text-[var(--active-sidemenu-text)]'
            : ''
        }`
      }
    >
      <div>{icon}</div>
      <p className='flex-grow ml-2'>{name}</p>
      <p>{number}</p>
    </NavLink>
  );
};

export default SideBarMenuLink;
