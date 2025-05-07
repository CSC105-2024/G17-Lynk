import DefaultWelcomeCard from '@/components/App/DefaultWelcomeCard';
import LinkCard from '@/components/App/LinkCard';
import React, { useContext } from 'react';
import { dummyData } from '@/services/data.js';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';
import { UserContext } from '@/App';

const Linksboard = () => {
  const { links } = useContext(UserContext);
  console.log('links blah blah : ', links);

  if (!links || links.length === 0) {
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
        children={links.map(
          (item, idx) => (
            console.log('item: ', item), // Log the item to the console
            (<LinkCard key={idx} data={item} />)
          )
        )}
      ></DisplayCard>
    </>
  );
};

export default Linksboard;
