import React, { useContext, useEffect, useState } from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';
import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';

import { dummyData } from '@/services/data.js';
import { UserContext } from '@/AppLayout';

const Dashboard = () => {
  const { links } = useContext(UserContext);
  console.log('links: ', links);
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
        subTitle='Your top 5 most visited links of all time'
      >
        {/* {link?.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))} */}
        {links
          ?.slice() // copy array to avoid mutating original
          .sort((a, b) => b.clickCount - a.clickCount) // descending order
          .slice(0, 5)
          .map((item) => (
            <LinkCard key={item.id} data={item} />
          ))}
      </DisplayCard>

      <DisplayCard
        icon={<MdTimelapse />}
        title='Recent'
        subTitle='Links you’ve added recently'
      >
        {links
          ?.slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5)
          .map((item) => (
            <LinkCard key={item.id} data={item} />
          ))}
      </DisplayCard>
    </div>
  );
};

export default Dashboard;
