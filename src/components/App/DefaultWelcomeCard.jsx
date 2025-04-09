import React from 'react';

const DefaultWelcomeCard = ({ name, description }) => {
  return (
    <div className='bg-[var(--info-card-bg-color)] rounded-2xl py-5 text-center p-5'>
      <h2 className='font-bold text-2xl mb-5'>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DefaultWelcomeCard;
