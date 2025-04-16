import React, { useState } from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';

import { dummyData } from '@/services/data.js';

const Dashboard = () => {
  const data = dummyData;

  return (
    <div className='bg-[var(--dashboard-bg-color)] min-h-screen py-2 px-3'>
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
