import React from 'react';

const PopoverContent = ({ children }) => {
  return (
    <div className='absolute top-full right-0 mt-2 w-48 bg-[var(--popover-bg)] text-[var(--app-text-color)] shadow-lg rounded-md z-50'>
      {children}
    </div>
  );
};

export default PopoverContent;
