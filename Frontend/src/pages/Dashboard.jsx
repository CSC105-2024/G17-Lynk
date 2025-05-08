import React, { useContext, useEffect, useState } from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';

import { dummyData } from '@/services/data.js';
import { UserContext } from '@/App';

const Dashboard = () => {
  const data = null;
  const { links } = useContext(UserContext);
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
        {data?.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>

      <DisplayCard
        icon={<MdTimelapse />}
        title='Recent'
        subTitle='Links you’ve added recently'
      >
        {links
          ?.map((item, idx) => <LinkCard key={idx} data={item} />)
          .sort((a, b) => a.createdAt - b.createdAt)}
      </DisplayCard>
    </div>
  );
};

export default Dashboard;
