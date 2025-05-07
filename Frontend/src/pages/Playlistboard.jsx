import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, dummyPlaylist } from '@/services/data';
import LinkCard from '@/components/App/LinkCard';
import APP_ICONS from '@/constants/icons.js';
import DisplayCard from '@/components/App/DisplayCard';
import { UserContext } from '@/App';

const Playlistboard = () => {
  const { playlists } = useContext(UserContext);
  const { playlistId } = useParams();

  // Find the playlist data
  const playlistData = playlists.find(
    (item) => item.id === parseInt(playlistId)
  );

  const IconComponent = APP_ICONS[playlistData?.iconLink];
  const [bookmarkData, setBookmarkData] = useState([]);

  useEffect(() => {
    if (playlistData?.links) {
      setBookmarkData(playlistData.links);
    }
  }, [playlistData]);

  console.log('playlistData: ', playlistData);
  console.log('bookmark: ', bookmarkData);
  // const iconLink = playlistData[playlistId - 1].iconLink;

  const handleDelete = (id) => {
    console.log('inside handle delete func');
    setBookmarkData((prevData) => prevData.filter((item) => item.id !== id));
    console.log('Bookmark data after delete:', bookmarkData);
  };

  if (!playlistData) {
    return <div>Loading playlists...</div>;
  }

  return (
    <div className='md:px-5'>
      {/* Testing playlist id: {playlistId} */}
      {console.log('render here')}
      <DisplayCard
        icon={IconComponent ? <IconComponent /> : null}
        title={playlistData.name}
        subTitle={playlistData.description}
        children={bookmarkData.map((item, idx) => (
          <LinkCard key={idx} data={item} onDelete={handleDelete} />
        ))}
      ></DisplayCard>
    </div>
  );
};

export default Playlistboard;
