import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/App';
import { deletePlaylist } from '@/api/playlist';

const DisplayCard = ({
  icon,
  title,
  subTitle,
  children,
  canDelete,
  playlistId,
}) => {
  const { playlists, setPlaylists } = useContext(UserContext);
  console.log('this id', playlistId);
  const handleDelete = async () => {
    console.log('deleting this playlist', playlistId);
    try {
      const [playlistsData] = await deletePlaylist(playlistId);
      if (playlistsData.success) {
        console.log('here bar insdie');
        setPlaylists(playlistsData.data.data);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    setPlaylists([...playlists, playlist]);
  };

  return (
    // A reusable card component that displays:
    // - an icon, title, and subtitle at the top
    // - any custom content (children) below
    // Layout uses flexbox for structure and spacing.
    <div className='mb-10 w-full'>
      <div className='flex mb-5 items-center'>
        <div className='text-3xl py-0.5 mr-3'>{icon}</div>
        <div>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <h3 className='text-xs font-light'>{subTitle}</h3>
        </div>
        {canDelete && (
          <Button
            variant='destructive'
            className=' ml-auto mr-10 cursor-pointer'
            onClick={handleDelete}
          >
            Delete this playlist
          </Button>
        )}
      </div>
      <div className='flex flex-col gap-5 items-center'>{children}</div>
    </div>
  );
};

export default DisplayCard;
