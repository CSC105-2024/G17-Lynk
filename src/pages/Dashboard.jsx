import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';
import React from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';
import { dummyData } from '@/services/data.js';

const Dashboard = () => {
  const data = dummyData;
  return (
    <div className='bg-[var(--dashboard-bg-color)]'>
      <DisplayCard icon={<MdHome />} title='Dashboard' subTitle='dkkdkdd'>
        <InfoCard />
      </DisplayCard>
      <DisplayCard
        icon={<MdTimelapse />}
        title='Most Visited'
        subTitle='dkkdkdd'
      >
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>
      <DisplayCard icon={<MdTimelapse />} title='Recent' subTitle='dkkdkdd'>
        {data.map((item, idx) => (
          <LinkCard key={idx} data={item} />
        ))}
      </DisplayCard>
    </div>
  );
};

export default Dashboard;
