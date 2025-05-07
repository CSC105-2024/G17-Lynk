import React, { useEffect, useState, createContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBarCard from './components/App/NavBarCard';
import SideBarCard from './components/App/SideBarCard';
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme-provider';
import BackToTop from './components/App/BackToTop';
import { getPlaylists } from './api/playlist';
import { getLinks } from './api/links';

export const UserContext = createContext();

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [links, setLinks] = useState([]);
  const location = useLocation();

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
    // console.log(showSideBar);
  };

  const fetchData = async () => {
    try {
      const [playlistsData, linksData] = await Promise.all([
        getPlaylists(),
        getLinks(),
      ]);

      if (playlistsData.success) setPlaylists(playlistsData.data.data);
      if (linksData.success) setLinks(linksData.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.pathname]); // Refetch when route changes

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='min-h-screen flex text-[var(--app-text-color)] bg-[var(--main-bg-color)] overflow-x-hidden'>
          <UserContext.Provider
            value={{ playlists, setPlaylists, links, setLinks }}
          >
            <SideBarCard showSideBar={showSideBar} onToggle={toggleSideBar} />
            <div className='flex flex-col flex-grow bg-[var(--main-bg-color)]'>
              <NavBarCard showSideBar={showSideBar} onToggle={toggleSideBar} />
              <Separator />
              <main className='flex-grow  bg-[var(--dashboard-bg-color)] p-5'>
                <Outlet />
              </main>
            </div>
            <BackToTop />
          </UserContext.Provider>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
