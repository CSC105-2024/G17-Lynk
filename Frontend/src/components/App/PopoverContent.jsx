import React from 'react';

// PopoverContent component that renders content inside a popover
const PopoverContent = ({ children }) => {
  return (
    // Wrapper div for the popover content
    <div className='absolute top-full right-0 mt-2 w-48 bg-[var(--popover-bg)] text-[var(--app-text-color)] shadow-lg rounded-md z-50'>
      {/* Render the children passed to the PopoverContent component */}
      {children}
    </div>
  );
};

export default PopoverContent;  // Export the PopoverContent component for use in other parts of the app
