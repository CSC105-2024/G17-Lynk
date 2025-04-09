import React from 'react';

const Chip = ({ name }) => {
  return <span className='bg-[var(--chip-bg)] rounded-lg px-2'>{name}</span>;
};

export default Chip;
