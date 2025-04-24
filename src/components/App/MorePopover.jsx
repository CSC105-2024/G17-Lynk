import React, { useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';
import EditLinkModal from '@/components/App/Edit';
import { btn, btnDanger } from '@/styles/styles';

const MorePopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  // Dummy data to test the edit modal
  const [initialLinkData, setInitialLinkData] = useState({
    link: 'https://example.com',
    playlist: 'playlist1',
    name: 'Example Link Name',
    tag: 'tag1',
    description: 'This is a test description for editing.',
  });

  const openEditModal = () => {
    setIsOpen(false);
    setShowEditModal(true);
  };
  const closeEditModal = () => setShowEditModal(false);

  const handleSaveEditedLink = (updatedData) => {
    console.log('Updated link data:', updatedData);
    // You can update state or send to backend here
  };

  const openLinkModal = () => {
    setShowLinkModal(true);
  };
  const closeLinkModal = () => setShowLinkModal(false);

  const handlePinLink = () => {
    console.log('Pinned Link!');
    openLinkModal();
    setIsOpen(false);
    setTimeout(() => {
      closeLinkModal();
    }, 3000);
  };

  const handleDeleteLink = () => {
    console.log('Deleted Link!');
    setIsOpen(false);
  };

  return (
    <>
      <div className='relative'>
        <Button
          text='More...'
          action='more'
          onClick={() => {
            setIsOpen(!isOpen);
            setTimeout(() => {
              setIsOpen(false);
            }, 5000); // Auto-close after 5 seconds
          }}
        />
        {isOpen && (
          <PopoverContent>
            <div className='flex flex-col gap-2 p-4'>
              <Button
                variant='btnNotFilled'
                text='Pin to Dashboard'
                onClick={handlePinLink}
                className='text-[var(--text-primary-color)]'
              />
              <Button
                variant='btnNotFilled'
                text='Edit link'
                onClick={openEditModal}
                className='text-[var(--text-primary-color)]'
              />
              <Button
                variant='btnDanger'
                text='Delete'
                onClick={handleDeleteLink}
                className='text-[var(--text-primary-color)]'
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
        {/* Pin Block at The Top */}
        {showLinkModal && ( // Show the link modal when pinning
          <div className='fixed top-0 left-0 w-full flex justify-center p-5 z-50'>
            <div className='bg-[var(--link-pin-bg-colour)] py-2 px-5 rounded-md text-white shadow-lg'>
              Link Pinned!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MorePopover;
