import React, { useState } from 'react';
import Button from '../Button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import ModalLink from '@/components/App/ModalLink';
import ModalPlaylist from '@/components/App/ModalPlaylist';
import { searchAll } from '../../services/search';
import Fuse from 'fuse.js';
import { ModeToggle } from '../mode-toggle';
import { useNavigate } from 'react-router-dom';

const NavBarCard = ({ onToggle }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();
  //Model controlled
  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);

  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);

  const handleLogout = () => navigate('/logout');
  const handleCreatePlaylist = (playlist) => {
    console.log('Created playlist:', playlist);
    setPlaylists([...playlists, playlist]);
  };

  const handleSearch = async (input) => {
    const term = input.target.value;
    setSearchTerm(term);

    const results = searchAll(term);
    console.log(results);
    if (!term) {
      setSearchResults([]);
      return;
    }
    const fuse = new Fuse(results.links, {
      keys: ['links', 'playlists', 'tags'],
      threshold: 0.5,
    });
    const matched = fuse.search(term).map((result) => result.item);
    setSearchResults(matched);
  };

  //login page

  return (
    <div className='p-5 space-y-5'>
      {/* Top nav bar */}
      <div className='px-5 py-5 md:px-8 md:py-3 flex items-center gap-3  md:gap-10 flex-wrap '>
        <div className='text-3xl p-3 block md:hidden'>
          <IoMenu onClick={onToggle} />
        </div>

        <div className='md:flex-grow flex items-center gap-2 rounded-xl py-2 px-4 bg-[var(--searchbar-bg-color)]'>
          <IoMdSearch />
          <input
            type='text'
            placeholder='Search'
            className='focus:outline-none flex-grow'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <ModeToggle />
        <Button text='New Link' onClick={openLinkModal} />
        <Button text='New Playlist' onClick={openPlaylistModal} />
        <button className='cursor-pointer' onClick={handleLogout}>
          <FaCircleUser className='text-2xl' />
        </button>
      </div>
      {/* Modals */}
      <ModalLink show={showLinkModal} handleClose={closeLinkModal} />
      <ModalPlaylist
        isOpen={showPlaylistModal}
        onClose={closePlaylistModal}
        onCreate={handleCreatePlaylist}
      />
      {/* Search rxesults */}
      <div className='space-y-3'>
        {searchTerm && searchResults.length > 0 ? (
          <ul className='space-y-3'>
            {searchResults.map((item, index) => (
              <li
                key={index}
                className='p-4 bg-[#1f1f1f] rounded-xl shadow border border-gray-700 hover:bg-[#2a2a2a] transition-colors'
              >
                <div className='flex items-center gap-4'>
                  <img
                    src={item.iconLink}
                    alt='icon'
                    className='w-10 h-10 rounded object-cover'
                  />
                  <div>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 font-semibold hover:underline'
                    >
                      {item.linkName}
                    </a>
                    <p className='text-sm text-gray-400'>
                      {item.tags?.join(', ')}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && (
            <p className='text-gray-500'>
              No results found for "{searchTerm}".
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default NavBarCard;
