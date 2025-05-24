import React, { useState, useRef, useContext, useMemo, useEffect } from 'react';
import Button from '../Button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import ModalLink from '@/components/App/ModalLink';
import ModalPlaylist from '@/components/App/ModalPlaylist';
import Fuse from 'fuse.js';
import { ModeToggle } from '../mode-toggle';
import { useNavigate } from 'react-router-dom';
import { btn, btnFill } from '@/styles/styles';
import { UserContext } from '@/AppLayout';
import { createPlaylist } from '@/api/playlist';
import { getCurrentUser } from '@/api/user';

const NavBarCard = ({ onToggle }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOption, setSortOption] = useState('def');
  const [areControlsFocused, setAreControlsFocused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { setPlaylists, links } = useContext(UserContext);

  // Simplified modal handlers
  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);
  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);
  const handleLogout = () => navigate('/logout');

  // Handle search input focus
  const handleSearchFocus = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
  };
  // Handle search input blur with delay
  const handleSearchBlur = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      if (!areControlsFocused) {
        setShowControls(false);
      }
    }, 200);
  };

  // Handle controls focus
  const handleControlsFocus = () => {
    setAreControlsFocused(true);
    clearTimeout(controlsTimeoutRef.current);
  };

  // Handle controls blur
  const handleControlsBlur = () => {
    setAreControlsFocused(false);
    // Small delay to allow for clicking between controls
    controlsTimeoutRef.current = setTimeout(() => {
      if (!document.activeElement === searchInputRef.current) {
        setShowControls(false);
      }
    }, 100);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(controlsTimeoutRef.current);
    };
  }, []);
  const availableTags = useMemo(() => {
    return [
      ...new Set(
        links.flatMap((link) => link.tags?.map((tag) => tag.name) || [])
      ),
    ].sort();
  }, [links]);

  // Process search results with filtering and sorting
  const processedResults = useMemo(() => {
    let results = links;

    // Only apply filtering if there's a search term
    if (searchTerm) {
      // First filter by selected tags if any
      if (selectedTags.length > 0) {
        results = results.filter((link) =>
          link.tags?.some((tag) => selectedTags.includes(tag.name))
        );
      }

      // Then apply search term
      const fuse = new Fuse(results, {
        keys: ['title', 'url', 'tags.name', 'description'],
        threshold: 0.4,
        includeScore: true,
      });
      results = fuse.search(searchTerm).map((result) => result.item);
    }

    // Apply sorting regardless of search
    switch (sortOption) {
      case 'date':
        return [...results].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case 'name':
        return [...results].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return results;
    }
  }, [links, selectedTags, searchTerm, sortOption]);

  // Simplified search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Create playlist handler
  const handleCreatePlaylist = async (playlist) => {
    try {
      const user = await getCurrentUser();
      if (!user) throw new Error('User not authenticated');
      const [playlistsData] = await createPlaylist(
        playlist.name,
        playlist.description,
        playlist.iconLink
      );
      if (playlistsData.success) {
        setPlaylists(playlistsData.data.data);
      }
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  // Process tags from links into simple array of names
  const getTagNamesFromLinks = () => {
    return links
      .reduce((acc, link) => {
        if (link.tags) {
          link.tags.forEach((tag) => {
            if (!acc.includes(tag.name)) {
              acc.push(tag.name);
            }
          });
        }
        return acc;
      }, [])
      .sort();
  };

  return (
    <div className='p-5 space-y-5'>
      {/* Main Navigation Bar */}
      <div className='px-5 py-5 md:px-8 md:py-3 flex items-center gap-3 md:gap-10 flex-wrap'>
        {/* Mobile Menu Toggle */}
        <div className='text-3xl p-3 block md:hidden cursor-pointer'>
          <IoMenu onClick={onToggle} />
        </div>

        {/* Search Bar */}
        <div className='relative md:flex-grow flex items-center gap-2 max-w-full'>
          <IoMdSearch className='absolute top-3 left-3' />
          <input
            type='text'
            placeholder='Search'
            className='rounded-lg py-2 px-4 pl-10 bg-[var(--searchbar-bg-color)] w-full lg:w-75 lg:focus:w-90 transition-width ease-in-out duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--btn-primary-outline-border-color)] whitespace-normal break-all'
            value={searchTerm}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            ref={searchInputRef}
          />

          {/* Filter/Sort Controls */}
          {showControls && (
            <>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                onFocus={handleControlsFocus}
                onBlur={handleControlsBlur}
                className='appearance-none py-2 px-3 rounded-lg bg-[var(--searchbar-bg-color)] border-0 focus:outline-0 text-[var(--app-text-color)]'
              >
                <option value='def'>Sort</option>
                <option value='name'>Sort by Name</option>
                <option value='date'>Sort by Date</option>
              </select>
              <button
                className={`${btn} ${btnFill}`}
                onClick={() => setShowFilterModal(true)}
                onFocus={handleControlsFocus}
                onBlur={handleControlsBlur}
              >
                Filter
              </button>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <ModeToggle />
        <Button text='New Link' onClick={openLinkModal} />
        <Button text='New Playlist' onClick={openPlaylistModal} />

        {/* User Profile */}
        <button className='cursor-pointer' onClick={handleLogout}>
          <FaCircleUser className='text-2xl' />
        </button>
      </div>

      {/* Tag Filter Modal */}
      {showFilterModal && (
        <div className='fixed inset-0 bg-[var(--main-bg-color)] bg-opacity-60 flex justify-center items-center z-50'>
          <div className='bg-[var(--modal-bg-color)] p-6 rounded-md max-w-md w-full'>
            <h2 className='text-lg font-semibold mb-2'>Filter by Tags</h2>
            <p className='text-sm text-gray-500 mb-4'>
              {getTagNamesFromLinks().length} tags available
            </p>

            <div className='flex flex-wrap gap-2 mb-4 max-h-60 overflow-y-auto'>
              {getTagNamesFromLinks().map((tag) => (
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
                className='px-3 py-2 rounded-lg bg-[var(--cancel-btn-color)] hover:bg-[var(--cancel-btn-hover-color)] cursor-pointer mr-2'
                onClick={() => setShowFilterModal(false)}
              >
                Close
              </button>
              <button
                className={`${btn} ${btnFill}`}
                onClick={() => setShowFilterModal(false)}
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

      {/* Search Results Section */}
      {searchTerm.length > 0 && (
        <div className='space-y-3'>
          <h2 className='text-2xl font-bold'>
            Search Results ({processedResults.length}):
          </h2>
          {processedResults.length > 0 ? (
            <ul className='space-y-3'>
              {processedResults.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
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
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-400 font-semibold hover:underline break-all'
                      >
                        {item.title}
                      </a>
                      <p className='text-sm text-gray-400'>
                        {item.tags?.map((t) => t.name).join(', ')}
                      </p>
                      <p className='text-xs text-gray-500'>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-500'>
              No results found {searchTerm ? `for "${searchTerm}"` : ''}.
              {selectedTags.length > 0 && (
                <span> Try removing some filters.</span>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBarCard;
