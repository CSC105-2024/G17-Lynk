import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
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
      {/* <LandingPage /> */}
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
      {/* <SidebarProvider>
        <AppSidebar />
        <main className='text-[var(--text-color)]'>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider> */}
    </>
  );
};

export default App;
