import React, { useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';
import EditLinkModal from '@/components/App/Edit';

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

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const handleSaveEditedLink = (updatedData) => {
    console.log('Updated link data:', updatedData);
    // You can update state or send to backend here
  };

  const openLinkModal = () => setShowLinkModal(true);
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
          }}
        />
        {isOpen && (
          <PopoverContent>
            <div className='flex flex-col gap-2 p-4'>
              <Button
                variant='btnNotFilled'
                text='Pin to Dashboard'
                onClick={handlePinLink}
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
                onClick={handleDeleteLink}
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
            <div className='bg-[var(--link-pin-bg-colour)] py-2 px-5 rounded-md'>
              Link Pinned!
            </div>
          </div>
          // <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50'>
          //   <div className='bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md'>
          //     <h2 className='text-xl font-semibold text-white'>Pinned Link</h2>
          //     <p className='text-gray-300 mt-2'>Your link has been pinned!</p>
          //     <Button
          //       text='Close'
          //       onClick={() => {
          //         setShowLinkModal(false);
          //       }}
          //     />
          //   </div>
          // </div>
        )}
      </div>
    </>
  );
};

export default MorePopover;
