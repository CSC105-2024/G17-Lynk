import DefaultWelcomeCard from '@/components/App/DefaultWelcomeCard';
import LinkCard from '@/components/App/LinkCard';
import React, { useContext } from 'react';
import { dummyData } from '@/services/data.js';
import DisplayCard from '@/components/App/DisplayCard';
import { TiPin } from 'react-icons/ti';
import { UserContext } from '@/App';

const Pinboard = () => {
  const { links } = useContext(UserContext);
  const data = links.filter((link) => link.isPinned);
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
      <DisplayCard
        icon={<TiPin />}
        title='Pins'
        subTitle={'Your pinned links will be shown here'}
        children={data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      ></DisplayCard>
    </>
  );
};

export default Pinboard;
