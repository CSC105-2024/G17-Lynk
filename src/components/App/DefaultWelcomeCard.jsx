import React from 'react';

const DefaultWelcomeCard = ({ name, description }) => {
  return (
    // A simple card component to display a welcome message.
    // Uses Tailwind CSS for styling:
    // - background color from a CSS variable
    // - rounded corners, centered text
    // - spacing with padding and margin
    <div className='bg-[var(--info-card-bg-color)] rounded-2xl py-5 text-center p-5'>
      <h2 className='font-bold text-2xl mb-5'>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DefaultWelcomeCard;
