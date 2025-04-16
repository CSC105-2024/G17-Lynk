import React from 'react';

const DisplayCard = ({ icon, title, subTitle, children }) => {
  return (
    <div className='mb-10'>
      <div className='flex mb-5'>
        <div className='text-3xl py-0.5 mr-3'>{icon}</div>
        <div>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <h3 className='text-xs font-light'>{subTitle}</h3>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DisplayCard;
