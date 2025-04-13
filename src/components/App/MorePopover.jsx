import React, { useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';

const MorePopover = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='relative'>
        <Button
          text='More...'
          action='more'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen && (
          <PopoverContent>
            <div className='flex flex-col gap-2 p-4'>
              <Button
                variant='btnNotFilled'
                text='Pin to Dashboard'
                onClick={() => {
                  console.log('Pinned Link!');
                }}
              />
              <Button variant='btnNotFilled' text='Edit link' />
              <Button
                variant='btnNotFilled'
                className='hover:bg-[var(--btn-hover-bg-red)]'
                text='Delete'
                onClick={() => {
                  onDelete();
                  setIsOpen(false);
                  // Handle delete action here
                  console.log('Link deleted');
                }}
              />
            </div>
          </PopoverContent>
        )}
      </div>
    </>
  );
};

export default MorePopover;
