import React, { useEffect, useState } from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';

import { dummyData } from '@/services/data.js';
import { getPlaylists } from '@/api/playlist';

const Dashboard = () => {
  const data = dummyData;

  // const fetchPlaylists = async () => {
  //   const data = await getPlaylists();
  //   if (data.success) {
  //     // console.log(data.data.data);
  //     setPlaylists(data.data.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchPlaylists();
  // }, []);

  // const [playlists, setPlaylists] = useState([]);
  // console.log(playlists);

  return (
    <div className='bg-[var(--dashboard-bg-color)] min-h-screen'>
      {/* Display Cards */}
      <DisplayCard
        icon={<MdHome />}
        title='Dashboard'
        subTitle='Overview of your saved links'
      >
        <InfoCard />
      </DisplayCard>

      <DisplayCard
        icon={<MdTimelapse />}
        title='Most Visited'
        subTitle='Your top visited links'
      >
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>

      <DisplayCard
        icon={<MdTimelapse />}
        title='Recent'
        subTitle='Links you’ve added recently'
      >
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>
    </div>
  );
};

export default Dashboard;
