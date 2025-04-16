import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import NavBarCard from './components/App/NavBarCard';
import SideBarCard from './components/App/SideBarCard';
import { Separator } from '@/components/ui/separator';

const App = () => {
  return (
    <>
      {/* <LandingPage /> */}
      <div className='min-h-screen flex text-[var(--app-text-color)] bg-[var(--main-bg-color)]'>
        <SideBarCard />
        <div className='flex flex-col flex-grow bg-[var(--main-bg-color)]'>
          <NavBarCard />
          <Separator />
          <main className='flex-grow  bg-[var(--dashboard-bg-color)] p-5'>
            <Outlet />
          </main>
        </div>
      </div>
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
