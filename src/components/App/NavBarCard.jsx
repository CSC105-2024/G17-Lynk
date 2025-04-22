import React, { useState, useRef, useEffect } from 'react';
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
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Track search focus
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  // Model controlled
  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);

  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);

  const handleLogout = () => navigate('/logout');
  const handleCreatePlaylist = (playlist) => {
    console.log('Created playlist:', playlist);
    setPlaylists([...playlists, playlist]);
  };

  // Fetch all links on component mount
  useEffect(() => {
    const initialLinks = searchAll('').links;
    setAllLinks(initialLinks);
  }, []);

  const handleSearch = async (input) => {
    const term = input.target.value;
    setSearchTerm(term);

    let filteredLinks = allLinks;

    if (selectedTags.length > 0) {
      filteredLinks = allLinks.filter((link) => {
        if (!link.tags) return false;
        // Check if ANY of the selected tags are present in the link's tags
        return selectedTags.some((tag) => link.tags.includes(tag));
      });
    }

    // Apply text search using Fuse
    if (!term) {
      setSearchResults(filteredLinks); // Show only filtered by tag if the text search is empty
    } else {
      const fuse = new Fuse(filteredLinks, {
        keys: ['linkName', 'tags'],
        threshold: 0.5,
      });
      const matched = fuse.search(term).map((result) => result.item);
      setSearchResults(matched);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true); // Set search focus to true
    setShowFilterButton(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false); // Set search focus to false
    setTimeout(() => {
      if (document.activeElement !== searchInputRef.current) {
        setShowFilterButton(false);
      }
    }, 100);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const availableTags = () => {
    const allTags = allLinks.reduce((tags, link) => {
      if (link.tags) {
        link.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      }
      return tags;
    }, []);
    return allTags;
  };

  useEffect(() => {
    const input = { target: { value: searchTerm } };
    handleSearch(input);
  }, [selectedTags, allLinks, searchTerm]);

  return (
    <div className='p-5 space-y-5'>
      {/* Top nav bar */}
      <div className='px-5 py-5 md:px-8 md:py-3 flex items-center gap-3  md:gap-10 flex-wrap '>
        <div className='text-3xl p-3 block md:hidden'>
          <IoMenu onClick={onToggle} />
        </div>

        <div className='md:flex-grow flex items-center gap-2 rounded-xl py-2 px-4 bg-[var(--searchbar-bg-color)] relative'>
          <IoMdSearch />
          <input
            type='text'
            placeholder='Search'
            className='focus:outline-none flex-grow transition-all duration-300'
            style={{
              backgroundColor: isSearchFocused ? 'var(--searchbar-bg-color-focused)' : 'var(--searchbar-bg-color)',
              boxShadow: isSearchFocused ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
            }}
            value={searchTerm}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            ref={searchInputRef}
          />
          {showFilterButton && (
            <button
              className={`absolute right-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 ${
                showFilterButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              onClick={() => setShowFilterModal(true)}
              style={{ pointerEvents: showFilterButton ? 'auto' : 'none' }}
            >
              Filter
            </button>
          )}
        </div>
        <ModeToggle />
        <Button text='New Link' onClick={openLinkModal} />
        <Button text='New Playlist' onClick={openPlaylistModal} />
        <button className='cursor-pointer' onClick={handleLogout}>
          <FaCircleUser className='text-2xl' />
        </button>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-[var(--modal-bg)] p-6 rounded-md'>
            <h2 className='text-lg font-semibold mb-4'>Filter by Tags</h2>
            <div className='flex flex-wrap gap-2 mb-4'>
              {availableTags().map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className='flex justify-end'>
              <button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2'
                onClick={() => {
                  setShowFilterModal(false);
                }}
              >
                Close
              </button>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => {
                  setShowFilterModal(false);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <ModalLink show={showLinkModal} handleClose={closeLinkModal} />
      <ModalPlaylist
        isOpen={showPlaylistModal}
        onClose={closePlaylistModal}
        onCreate={handleCreatePlaylist}
      />

      {/* Search results */}
      <div className='space-y-3'>
        {searchResults.length > 0 ? (
          <ul className='space-y-3'>
            <h2 className='text-2xl font-bold'>Search Results:</h2>
            {searchResults.map((item, index) => (
              <li
                key={index}
                className='p-4 bg-[var(--link-card-bg)] hover:bg-[var(--link-card-hover-bg)] rounded-lg shadow transition-colors'
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
