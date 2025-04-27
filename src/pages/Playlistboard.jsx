import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, dummyPlaylist } from '@/services/data';
import LinkCard from '@/components/App/LinkCard';
import APP_ICONS from '@/constants/icons.js';
import DisplayCard from '@/components/App/DisplayCard';
import { MdHome } from 'react-icons/md';

const Playlistboard = () => {
  const [bookmarkData, setBookmarkData] = useState(dummyData);
  const playlistData = dummyPlaylist;
  const { playlistId } = useParams();
  const iconLink = playlistData[playlistId - 1].iconLink;
  const IconComponent = APP_ICONS[iconLink];

  const handleDelete = (id) => {
    console.log('inside handle delete func');
    setBookmarkData((prevData) => prevData.filter((item) => item.id !== id));
    console.log('Bookmark data after delete:', bookmarkData);
  };
  return (
    <div className='md:px-5'>
      {/* Testing playlist id: {playlistId}
      {console.log('render here')} */}
      <DisplayCard
        icon={IconComponent ? <IconComponent /> : null}
        title={playlistData[playlistId - 1].name}
        subTitle={playlistData[playlistId - 1].description}
        children={bookmarkData.map((item, idx) => (
          <LinkCard key={idx} data={item} onDelete={handleDelete} />
        ))}
      ></DisplayCard>
    </div>
  );
};

export default Playlistboard;
