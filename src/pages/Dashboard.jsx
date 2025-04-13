import React, { useState } from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';

import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';
import ModalLink from '@/components/App/ModalLink';
import ModalPlaylist from '@/components/App/ModalPlaylist';
import EditLinkModal from '@/components/App/Edit';

import { dummyData } from '@/services/data.js';

const Dashboard = () => {
  const data = dummyData;

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [playlists, setPlaylists] = useState([]);

  // Dummy data to test the edit modal
  const [initialLinkData, setInitialLinkData] = useState({
    link: 'https://example.com',
    playlist: 'playlist1',
    name: 'Example Link Name',
    tag: 'tag1',
    description: 'This is a test description for editing.',
  });

  const openLinkModal = () => setShowLinkModal(true);
  const closeLinkModal = () => setShowLinkModal(false);

  const openPlaylistModal = () => setShowPlaylistModal(true);
  const closePlaylistModal = () => setShowPlaylistModal(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const handleCreatePlaylist = (playlist) => {
    console.log('Created playlist:', playlist);
    setPlaylists([...playlists, playlist]);
  };

  const handleSaveEditedLink = (updatedData) => {
    console.log('Updated link data:', updatedData);
    // You can update state or send to backend here
  };

  return (
    <div className='bg-[var(--dashboard-bg-color)] min-h-screen p-4'>
      {/* Top Buttons */}
      <div className="flex flex-wrap justify-end gap-4 mb-4">
        <button
          onClick={openLinkModal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          + Create New Link
        </button>
        <button
          onClick={openPlaylistModal}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
        >
          + Create New Playlist
        </button>
        <button
          onClick={openEditModal}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
        >
          - Edit Link (Test)
        </button>
      </div>

      {/* Display Cards */}
      <DisplayCard icon={<MdHome />} title='Dashboard' subTitle='Overview of your saved links'>
        <InfoCard />
      </DisplayCard>

      <DisplayCard icon={<MdTimelapse />} title='Most Visited' subTitle='Your top visited links'>
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>

      <DisplayCard icon={<MdTimelapse />} title='Recent' subTitle='Links you’ve added recently'>
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>

      {/* Modals */}
      <ModalLink show={showLinkModal} handleClose={closeLinkModal} />
      <ModalPlaylist
        isOpen={showPlaylistModal}
        onClose={closePlaylistModal}
        onCreate={handleCreatePlaylist}
      />
      <EditLinkModal
        isOpen={showEditModal}
        onClose={closeEditModal}
        onSave={handleSaveEditedLink}
        initialLinkData={initialLinkData}
      />
    </div>
  );
};

export default Dashboard;
