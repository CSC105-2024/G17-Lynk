import React from 'react';

const DisplayCard = ({ icon, title, subTitle, children }) => {
  return (
    <>
      <div className='flex bg-red-500'>
        <div className='text-2xl p-2'>{icon}</div>
        <div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <h3 className='text-xs font-light'>{subTitle}</h3>
        </div>
      </div>
      {children}
    </>
  );
};

export default DisplayCard;
