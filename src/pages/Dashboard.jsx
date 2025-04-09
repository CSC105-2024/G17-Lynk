import DisplayCard from '@/components/App/DisplayCard';
import InfoCard from '@/components/App/InfoCard';
import LinkCard from '@/components/App/LinkCard';
import React from 'react';
import { MdHome, MdTimelapse } from 'react-icons/md';

const Dashboard = () => {
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
        <LinkCard />
      </DisplayCard>
      <DisplayCard icon={<MdTimelapse />} title='Recent' subTitle='dkkdkdd'>
        <LinkCard />
      </DisplayCard>
    </div>
  );
};

export default Dashboard;
