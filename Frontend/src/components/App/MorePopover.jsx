import React, { useContext, useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';
import EditLinkModal from '@/components/App/Edit';
import { btn, btnDanger } from '@/styles/styles';
import { UserContext } from '@/App';

/**
 * A popover component that shows additional actions (Edit, Pin, Delete)
 * for a link item with associated modals for each action
 */
const MorePopover = () => {
  // State for controlling popover visibility
  const [isOpen, setIsOpen] = useState(false);

  // State for controlling edit modal visibility
  const [showEditModal, setShowEditModal] = useState(false);

  // State for controlling pin notification visibility
  const [showLinkModal, setShowLinkModal] = useState(false);

  const { links } = useContext(UserContext);

  // Mock data for testing the edit functionality
  const [initialLinkData, setInitialLinkData] = useState({
    link: 'https://example.com',
    playlist: 'playlist1',
    name: 'Example Link Name',
    tag: 'tag1',
    description: 'This is a test description for editing.',
  });

  /**
   * Opens the edit modal and closes the popover
   */
  const openEditModal = () => {
    setIsOpen(false);
    setShowEditModal(true);
  };

  /**
   * Closes the edit modal
   */
  const closeEditModal = () => setShowEditModal(false);

  /**
   * Handles saving edited link data
   * @param {Object} updatedData - The new link data after editing
   */
  const handleSaveEditedLink = (updatedData) => {
    console.log('Updated link data:', updatedData);
    // In a real app, you would update state or send to backend here
  };

  /**
   * Opens the pin notification modal
   */
  const openLinkModal = () => {
    setShowLinkModal(true);
  };

  /**
   * Closes the pin notification modal
   */
  const closeLinkModal = () => setShowLinkModal(false);

  /**
   * Handles pinning a link to dashboard
   * Shows a temporary notification and closes the popover
   */
  const handlePinLink = () => {
    console.log('Pinned Link!');
    openLinkModal();
    setIsOpen(false);
    // Auto-close the notification after 3 seconds
    setTimeout(() => {
      closeLinkModal();
    }, 3000);
  };

  /**
   * Handles deleting a link
   * (Currently just logs to console)
   */
  const handleDeleteLink = () => {
    console.log('Deleted Link!');
    setIsOpen(false);
  };

  return (
    <>
      <div className='relative'>
        {/* Main "More..." button that toggles the popover */}
        <Button
          text='More...'
          action='more'
          onClick={() => {
            setIsOpen(!isOpen);
            // Auto-close the popover after 5 seconds
            setTimeout(() => {
              setIsOpen(false);
            }, 5000);
          }}
        />

        {/* Popover content that appears when isOpen is true */}
        {isOpen && (
          <PopoverContent>
            <div className='flex flex-col gap-2 p-4'>
              {/* Pin to Dashboard button */}
              <Button
                variant='btnNotFilled'
                text='Pin to Dashboard'
                onClick={handlePinLink}
                className='text-[var(--text-primary-color)]'
              />

              {/* Edit link button */}
              <Button
                variant='btnNotFilled'
                text='Edit link'
                onClick={openEditModal}
                className='text-[var(--text-primary-color)]'
              />

              {/* Delete link button */}
              <Button
                variant='btnDanger'
                text='Delete'
                onClick={handleDeleteLink}
                className='text-[var(--text-primary-color)]'
              />
            </div>
          </PopoverContent>
        )}

        {/* Edit Link Modal - appears when showEditModal is true */}
        <EditLinkModal
          isOpen={showEditModal}
          onClose={closeEditModal}
          onSave={handleSaveEditedLink}
          initialLinkData={initialLinkData}
        />

        {/* Pin Notification - appears briefly when a link is pinned */}
        {showLinkModal && (
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
