import React, { useContext, useState } from 'react';
import PopoverContent from './PopoverContent';
import Button from '../Button';
import EditLinkModal from '@/components/App/Edit';
import { UserContext } from '@/AppLayout';
import { deleteLink, editLink, pinLink } from '@/api/links';

/**
 * A popover component that shows additional actions (Edit, Pin, Delete)
 * for a link item with associated modals for each action
 */
const MorePopover = ({ data }) => {
  const linkId = data.id;

  // State for controlling popover visibility
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  const { links, setLinks } = useContext(UserContext);
  // Initialize with the correct structure that EditLinkModal expects
  const [initialLinkData, setInitialLinkData] = useState({
    url: data.url,
    title: data.title,
    description: data.description,
    tags: data.tags ? data.tags.map((tag) => tag.name) : [],
    playlistId: data.playlistId || null,
    id: data.id, // Make sure to include the ID for editing
  });

  const openEditModal = () => {
    setIsOpen(false);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  const handleSaveEditedLink = async (updatedData) => {
    console.log('Updated link data:', updatedData);
    try {
      const res = await editLink(updatedData);
      if (res.success) {
        console.log('edited link from morepopover', res.data.data);
        setLinks(
          links.map((link) =>
            link.id === updatedData.id ? res.data.data : link
          )
        );
      }
    } catch (error) {
      console.error('Error updating link:', error);
    }
  };

  const openLinkModal = () => {
    setShowLinkModal(true);
  };

  const closeLinkModal = () => setShowLinkModal(false);

  const handlePinLink = async () => {
    console.log('Pinned Link!');
    try {
      const res = await pinLink(linkId);
      if (res.success) {
        setLinks(
          links.map((link) => (link.id === linkId ? res.data.data : link))
        );
      }
    } catch (error) {
      console.error('Error pinning link:', error);
    }
    openLinkModal();
    setIsOpen(false);
    setTimeout(() => {
      closeLinkModal();
    }, 3000);
  };

  const handleDeleteLink = async () => {
    try {
      const res = await deleteLink(linkId);
      if (res.success) {
        setLinks(links.filter((link) => link.id !== linkId));
        console.log('links after deleting', links);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      {/* Main "More..." button that toggles the popover */}
      <Button
        text='More...'
        action='more'
        onClick={() => {
          setIsOpen(!isOpen);
          setTimeout(() => {
            setIsOpen(false);
          }, 5000);
        }}
      />

      {/* Popover content that appears when isOpen is true */}
      {isOpen && (
        <PopoverContent>
          <div className='flex flex-col gap-2 p-4'>
            <Button
              variant='btnNotFilled'
              text={
                !data.isPinned ? 'Pin to Dashboard' : 'Unpin from Dashboard'
              }
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

      {/* Edit Link Modal */}
      <EditLinkModal
        isOpen={showEditModal}
        onClose={closeEditModal}
        onSave={handleSaveEditedLink}
        initialLinkData={initialLinkData}
      />

      {/* Pin Notification */}
      {showLinkModal && (
        <div className='fixed top-0 left-0 w-full flex justify-center p-5 z-50'>
          <div className='bg-[var(--link-pin-bg-colour)] py-2 px-5 rounded-md text-white shadow-lg'>
            {`${data.isPinned ? 'Link Pinned!' : 'Link Unpinned!'}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default MorePopover;
