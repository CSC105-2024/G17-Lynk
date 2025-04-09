import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import NavBarCard from './components/App/NavBarCard';
import SideBarCard from './components/App/SideBarCard';

const App = () => {
  return (
    <>
      {/* <LandingPage /> */}
      <div className='min-h-screen'>
        <NavBarCard />
        <SideBarCard />
        <main className='text-[var(--text-color)] bg-[var(--dashboard-bg-color)]'>
          <Outlet />
        </main>
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
