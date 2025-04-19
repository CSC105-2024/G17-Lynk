import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBarCard from './components/App/NavBarCard';
import SideBarCard from './components/App/SideBarCard';
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme-provider';

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
    console.log(showSideBar);
  };

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='min-h-screen flex text-[var(--app-text-color)] bg-[var(--main-bg-color)] overflow-x-hidden'>
          <SideBarCard showSideBar={showSideBar} onToggle={toggleSideBar} />
          <div className='flex flex-col flex-grow bg-[var(--main-bg-color)]'>
            <NavBarCard showSideBar={showSideBar} onToggle={toggleSideBar} />
            <Separator />
            <main className='flex-grow  bg-[var(--dashboard-bg-color)] p-5'>
              <Outlet />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
