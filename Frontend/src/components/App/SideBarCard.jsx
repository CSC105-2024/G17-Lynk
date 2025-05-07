import React, { useContext } from 'react';
import { UserContext } from '@/App'; // Import context for playlists
import SideBarMenuLink from './SideBarMenuLink'; // Import custom component for sidebar menu links
import { MdHome, MdTimelapse } from 'react-icons/md'; // Import icons from react-icons
import { Separator } from '@/components/ui/separator'; // Import separator component for styling
import { TiPin } from 'react-icons/ti'; // Import pin icon
import { MdOutlineDatasetLinked } from 'react-icons/md'; // Import dataset icon
import { dummyPlaylist, dummyTags } from '@/services/data.js'; // Import dummy data for playlists and tags
import APP_ICONS from '@/constants/icons.js'; // Import constant icons for playlist items
import { Link } from 'react-router-dom'; // Import Link component for routing
import { FaXmark } from 'react-icons/fa6'; // Import close icon for sidebar
import Logo from '../Logo'; // Import Logo component for branding

// Sidebar component accepting onToggle and showSideBar as props
const SideBarCard = ({ onToggle, showSideBar }) => {
  const { playlists, links } = useContext(UserContext);
  // console.log('here is playlists: ', playlists);
  // console.log('here is links: ', links);
  const tags = dummyTags;

  // Conditional class for sidebar display based on showSideBar status
  const sideBarDisplayStatus = showSideBar
    ? 'min-w-full md:min-w-60 md:block fixed inset-0 z-50 overflow-y-auto'
    : 'hidden md:block min-w-60';

  return (
    <div
      className={`${sideBarDisplayStatus} bg-[var(--sidebar-bg-color)] text-lg md:min-h-screen md:text-md py-3 px-5`}
    >
      <div className='w-full flex justify-between items-center py-3'>
        {/* LOGO */}
        <Link to='/app/dashboard'>
          <Logo version='v2' className='w-30' /> {/* Render Logo component */}
        </Link>
        {/* Close button for the sidebar in mobile view */}
        <FaXmark className='text-4xl block md:hidden' onClick={onToggle} />{' '}
      </div>

      {/* Default 3 sidebar menu links */}
      <div className='mt-5 mb-8' onClick={onToggle}>
        <SideBarMenuLink
          icon={<MdHome />} // Icon for 'Dashboard'
          name='Dashboard' // Menu name
          link='/app/dashboard' // Link to the Dashboard page
        />
        <SideBarMenuLink
          icon={<MdOutlineDatasetLinked />} // Icon for 'All links'
          name='All links' // Menu name
          linkCount={links.length} // Placeholder number for the 'All links'
          link='/app/links' // Link to the All links page
        />
        <SideBarMenuLink
          icon={<TiPin />} // Icon for 'Pins'
          name='Pins' // Menu name
          linkCount='3' // Placeholder number for the 'Pins'
          link='/app/pins' // Link to the Pins page
        />
      </div>

      {/* Separator line for styling */}
      <Separator className='bg-[var(--seperator-color)]' />

      {/* Playlist section */}
      <div className='mt-3 mb-8' onClick={onToggle}>
        <h2 className='text-lg mb-3'>Playlists</h2>
        {playlists.map((playlist, index) => {
          {
            const IconComponent = APP_ICONS[playlist.iconLink]; // Get icon component dynamically from APP_ICONS
            return (
              <SideBarMenuLink
                key={index} // Unique key for each playlist link
                icon={IconComponent ? <IconComponent /> : null} // Display corresponding icon
                name={playlist.name} // Playlist name
                linkCount={playlist.linkCount} // Playlist number
                link={`/app/playlists/${playlist.id}`} // Link to specific playlist page
              />
            );
          }
        })}
      </div>

      {/* Separator line for styling */}
      <Separator className='bg-[var(--seperator-color)]' />

      {/* Tags section */}
      <div className='mt-3 mb-8'>
        <h2 className='text-lg'>Tags</h2>
        <div className='px-5 my-2 py-1 flex flex-col gap-2'>
          {tags.map((tag, index) => {
            return <p key={index}>{tag.name}</p>; // Display each tag name
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBarCard; // Export the sidebar component for use in other parts of the app
