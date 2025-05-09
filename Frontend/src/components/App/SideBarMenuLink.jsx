import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing with active link styles

// SideBarMenuLink component to render individual sidebar menu items
const SideBarMenuLink = ({ icon, name, linkCount, link }) => {
  return (
    // NavLink component is used for routing with active class handling
    <NavLink
      to={link} // The destination link for navigation
      className={(
        { isActive } // Conditional class based on whether the link is active
      ) =>
        `flex items-center hover:bg-[var(--hover-sidemenu-bg)] w-full my-2 py-1 px-4 rounded-md cursor-pointer hover:text-[var(--active-sidemenu-text)] ${
          isActive // If the link is active, apply specific styles
            ? 'bg-[var(--active-sidemenu-bg)] text-[var(--active-sidemenu-text)]' // Active background and text color
            : '' // Otherwise, no active styles
        }`
      }
    >
      {/* Icon section: Renders the provided icon */}
      <div>{icon}</div>

      {/* Name section: Displays the name of the menu item */}
      <p className='flex-grow ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-50'>
        {name}
      </p>

      {/* Number section: Displays the number associated with the menu item */}
      <p className='ml-auto pl-2'>{!linkCount ? 0 : linkCount}</p>
    </NavLink>
  );
};

export default SideBarMenuLink; // Export the SideBarMenuLink component for use in the sidebar
