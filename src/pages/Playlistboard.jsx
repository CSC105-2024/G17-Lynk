import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, dummyPlaylist } from '@/services/data';
import LinkCard from '@/components/App/LinkCard';
import APP_ICONS from '@/constants/icons.js';

const Playlistboard = () => {
  const bookmarkData = dummyData;
  const playlistData = dummyPlaylist;
  const { playlistId } = useParams();
  const iconLink = playlistData[playlistId - 1].iconLink;
  const IconComponent = APP_ICONS[iconLink];
  return (
    <div>
      <div>{IconComponent ? <IconComponent /> : null}</div>
      <h2>{playlistData[playlistId - 1].name}</h2>
      {bookmarkData.map((item, idx) => (
        <LinkCard key={idx} data={item} />
      ))}
      {playlistId}
    </div>
  );
};

export default Playlistboard;
