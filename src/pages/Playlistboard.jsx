import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, dummyPlaylist } from '@/services/data';
import LinkCard from '@/components/App/LinkCard';
import APP_ICONS from '@/constants/icons.js';

const Playlistboard = () => {
  const bookmarkData = dummyData;
  const playlistData = dummyPlaylist;
  const { playlistId } = useParams();
  const iconLink = playlistData[playlistId].iconLink;
  const IconComponent = APP_ICONS[iconLink];
  return (
    <div>
      <div>{<IconComponent />}</div>
      <h2>{playlistData[playlistId].name}</h2>
      {bookmarkData.map((item, idx) => (
        <LinkCard key={idx} data={item} />
      ))}
      {playlistId}
    </div>
  );
};

export default Playlistboard;
