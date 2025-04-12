import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData } from '@/services/data';
import LinkCard from '@/components/App/LinkCard';

const Playlistboard = () => {
  const data = dummyData;
  const { playlistId } = useParams();
  return (
    <div>
      <div>icon</div>
      <h2>name</h2>
      {data.map((item, idx) => (
        <LinkCard key={idx} data={item} />
      ))}
      {playlistId}
    </div>
  );
};

export default Playlistboard;
