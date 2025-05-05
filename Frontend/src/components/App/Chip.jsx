import React from 'react';

const Chip = ({ name }) => {
  return (
    // Displays a small "chip" UI element (pill-shaped), commonly used for tags or labels.
    // Styled using Tailwind CSS classes:
    // - dynamic background from CSS variable
    // - rounded corners, padding, compact height
    // - inline-flex for flexible layout and centered text
    // - prevents text from wrapping
    // testing
    <span 
      className='
        bg-[var(--chip-bg)] 
        rounded-xl 
        px-2 py-1 
        inline-flex 
        items-center 
        max-h-6 
        leading-tight 
        w-auto 
        text-nowrap
      '
    >
      {name}
    </span>
  );
};

export default Chip;
