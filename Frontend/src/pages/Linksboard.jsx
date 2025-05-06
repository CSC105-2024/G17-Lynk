import DefaultWelcomeCard from '@/components/App/DefaultWelcomeCard';
import LinkCard from '@/components/App/LinkCard';
import React from 'react';
import { dummyData } from '@/services/data.js';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';

const Linksboard = () => {
  const data = dummyData;
  if (!data || data.length === 0) {
    return (
      <DefaultWelcomeCard
        name='Save Your Links Here!'
        description='You can Pin your favourite Links by clicking on the More Button on each Link and clicking Pin to Dashboard'
      />
    );
  }
  return (
    <>
      <DisplayCard
        icon={<MdOutlineDatasetLinked />}
        title='All Links'
        subTitle={'All your saved links will be shown here'}
        children={data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      ></DisplayCard>
    </>
  );
};

export default Linksboard;
