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

/**
 * Navigation Bar Card Component
 * 
 * Handles:
 * - Search functionality with fuzzy matching
 * - Link and playlist creation
 * - Tag filtering
 * - User profile/logout
 * 
 * @param {function} onToggle - Callback for mobile menu toggle
 */
const NavBarCard = ({ onToggle }) => {
  // Modal visibility states
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  
  // Search related states
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  
  // Playlist management
  const [playlists, setPlaylists] = useState([]);
  
  // Filter related states
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  
  const navigate = useNavigate();

  /**
   * Modal control functions
   */
  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);
  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);

  /**
   * Handles user logout navigation
   */
  const handleLogout = () => navigate('/logout');

  /**
   * Handles playlist creation
   * @param {Object} playlist - The new playlist data
   */
  const handleCreatePlaylist = (playlist) => {
    console.log('Created playlist:', playlist);
    setPlaylists([...playlists, playlist]);
  };

  // Fetch all links when component mounts
  useEffect(() => {
    const initialLinks = searchAll('').links;
    setAllLinks(initialLinks);
  }, []);

  /**
   * Handles search functionality with optional tag filtering
   * @param {Object} input - Event object from search input
   */
  const handleSearch = async (input) => {
    const term = input.target.value;
    setSearchTerm(term);

    let filteredLinks = allLinks;

    // First filter by selected tags if any
    if (selectedTags.length > 0) {
      filteredLinks = allLinks.filter((link) => {
        if (!link.tags) return false;
        return selectedTags.some((tag) => link.tags.includes(tag));
      });
    }

    // Then apply fuzzy search if search term exists
    if (!term) {
      setSearchResults(filteredLinks);
    } else {
      const fuse = new Fuse(filteredLinks, {
        keys: ['linkName', 'tags'],
        threshold: 0.5,
      });
      const matched = fuse.search(term).map((result) => result.item);
      setSearchResults(matched);
    }
  };

  /**
   * Handles search input focus
   * Shows filter button and marks input as focused
   */
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowFilterButton(true);
  };

  /**
   * Handles search input blur with slight delay
   * to allow for filter button interaction
   */
  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    setTimeout(() => {
      if (document.activeElement !== searchInputRef.current) {
        setShowFilterButton(false);
      }
    }, 100);
  };

  /**
   * Toggles tag selection for filtering
   * @param {string} tag - The tag to toggle
   */
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  /**
   * Extracts all unique tags from available links
   * @returns {Array} - Array of unique tags
   */
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

  // Re-run search when selected tags, all links, or search term changes
  useEffect(() => {
    const input = { target: { value: searchTerm } };
    handleSearch(input);
  }, [selectedTags, allLinks, searchTerm]);

  return (
    <div className='p-5 space-y-5'>
      {/* Main Navigation Bar */}
      <div className='px-5 py-5 md:px-8 md:py-3 flex items-center gap-3 md:gap-10 flex-wrap'>
        {/* Mobile Menu Toggle (hidden on desktop) */}
        <div className='text-3xl p-3 block md:hidden'>
          <IoMenu onClick={onToggle} />
        </div>

        {/* Search Bar Container */}
        <div className='relative md:flex-grow flex items-center gap-2 max-w-full'>
          <IoMdSearch className='absolute top-3 left-3' />
          <input
            type='text'
            placeholder='Search'
            className='rounded-lg py-2 px-4 pl-10 bg-[var(--searchbar-bg-color)] w-full lg:w-75 lg:focus:w-90 transition-all ease-in-out duration-500 focus:outline-none focus:ring-1 focus:ring-[var(--btn-primary-outline-border-color)] whitespace-normal break-all'
            value={searchTerm}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            ref={searchInputRef}
          />
          
          {/* Filter Button (appears when search is focused) */}
          {showFilterButton && (
            <button
              className={`absolute right-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 ${
                showFilterButton
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
              }`}
              onMouseDown={() => setShowFilterModal(true)}
              style={{ pointerEvents: showFilterButton ? 'auto' : 'none' }}
            >
              Filter
            </button>
          )}
        </div>
        
        {/* Action Buttons */}
        <ModeToggle />
        <Button text='New Link' onClick={openLinkModal} />
        <Button text='New Playlist' onClick={openPlaylistModal} />
        
        {/* User Profile/Logout Button */}
        <button className='cursor-pointer' onClick={handleLogout}>
          <FaCircleUser className='text-2xl' />
        </button>
      </div>

      {/* Tag Filter Modal */}
      {showFilterModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-[var(--modal-bg)] p-6 rounded-md'>
            <h2 className='text-lg font-semibold mb-4'>Filter by Tags</h2>
            
            {/* Tag Selection Buttons */}
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
            
            {/* Modal Action Buttons */}
            <div className='flex justify-end'>
              <button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2'
                onClick={() => setShowFilterModal(false)}
              >
                Close
              </button>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setShowFilterModal(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Link Creation Modal */}
      <ModalLink show={showLinkModal} handleClose={closeLinkModal} />
      
      {/* Playlist Creation Modal */}
      <ModalPlaylist
        isOpen={showPlaylistModal}
        onClose={closePlaylistModal}
        onCreate={handleCreatePlaylist}
      />

      {/* Search Results Section */}
      {(searchTerm || selectedTags.length > 0) && (
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
                        className='text-blue-400 font-semibold hover:underline break-all'
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
            <p className='text-gray-500 break-all'>
              No results found for "{searchTerm}".
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBarCard;