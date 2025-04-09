import React from 'react';

const SideBarMenuLink = ({ icon, name, number }) => {
  return (
    <div className='flex items-center bg-blue-500 my-2 py-1 px-4'>
      <div>{icon}</div>
      <p className='flex-grow ml-2'>{name}</p>
      <p>{number}</p>
    </div>
  );
};

export default SideBarMenuLink;
