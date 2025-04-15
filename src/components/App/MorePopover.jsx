import React, { useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';
import EditLinkModal from '@/components/App/Edit';

const MorePopover = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const handleSaveEditedLink = (updatedData) => {
    console.log('Updated link data:', updatedData);
    // You can update state or send to backend here
  };

  // Dummy data to test the edit modal
  const [initialLinkData, setInitialLinkData] = useState({
    link: 'https://example.com',
    playlist: 'playlist1',
    name: 'Example Link Name',
    tag: 'tag1',
    description: 'This is a test description for editing.',
  });
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
              <Button
                variant='btnNotFilled'
                text='Edit link'
                onClick={openEditModal}
              />
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

        <EditLinkModal
          isOpen={showEditModal}
          onClose={closeEditModal}
          onSave={handleSaveEditedLink}
          initialLinkData={initialLinkData}
        />
      </div>
    </>
  );
};

export default MorePopover;
