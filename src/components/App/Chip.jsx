import React from 'react';

const Chip = ({ name }) => {
  return (
    <span className='bg-[var(--chip-bg)] rounded-xl px-2 py-1 inline-flex items-center max-h-6 leading-tight w-auto text-nowrap'>
      {name}
    </span>
  );
};

export default Chip;
