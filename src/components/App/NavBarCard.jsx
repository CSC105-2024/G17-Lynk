import React, { useState } from 'react';
import Button from '../Button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import ModalLink from '@/components/App/ModalLink';
import ModalPlaylist from '@/components/App/ModalPlaylist';
const NavBarCard = () => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const [playlists, setPlaylists] = useState([]);

  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);

  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);

  const handleCreatePlaylist = (playlist) => {
    console.log('Created playlist:', playlist);
    setPlaylists([...playlists, playlist]);
  };

  return (
    <div className='px-8 py-3 flex items-center gap-10 flex-wrap '>
      <div className='text-3xl p-3 block md:hidden'>
        <IoMenu />
      </div>
      <div className='md:flex-grow flex items-center gap-2 rounded-xl py-2 px-4 bg-[var(--searchbar-bg-color)]'>
        <IoMdSearch />
        <input
          type='text'
          placeholder='Search'
          className='focus:outline-none flex-grow'
        />
      </div>
      <Button text='New Link' onClick={openLinkModal} />
      <Button text='New Playlist' onClick={openPlaylistModal} />
      <FaCircleUser className='text-2xl' />

      <ModalLink show={showLinkModal} handleClose={closeLinkModal} />
      <ModalPlaylist
        isOpen={showPlaylistModal}
        onClose={closePlaylistModal}
        onCreate={handleCreatePlaylist}
      />
    </div>
  );
};

export default NavBarCard;
