import DefaultWelcomeCard from '@/components/App/DefaultWelcomeCard';
import LinkCard from '@/components/App/LinkCard';
import React from 'react';
import { dummyData } from '@/services/data.js';

const Pinboard = () => {
  const data = dummyData;
  if (!data || data.length === 0) {
    return (
      <DefaultWelcomeCard
        name='Pin Your Favourite Links Here!'
        description='You can Pin your favourite Links by clicking on the More Button on each Link and clicking Pin to Dashboard'
      />
    );
  }
  return (
    <>
      <h2>Pins</h2>
      {data.map((item, idx) => (
        <LinkCard key={idx} data={item} />
      ))}
    </>
  );
};

export default Pinboard;
