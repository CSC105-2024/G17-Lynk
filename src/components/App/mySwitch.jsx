import React from 'react';
import { Switch } from '@/components/ui/switch';

const mySwitch = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
    </div>
  );
};

export default mySwitch;
