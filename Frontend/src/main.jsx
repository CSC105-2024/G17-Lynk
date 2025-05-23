import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Test from './pages/Test.jsx';
import App from './App';
import Dashboard from './pages/Dashboard';
import Pinboard from './pages/Pinboard';
import Linksboard from './pages/Linksboard';
import Playlistboard from './pages/Playlistboard';
import LogOutPage from './pages/LogOutPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/app', // Home route
    element: <App />, // Render the App component
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'pins',
        element: <Pinboard />,
      },
      {
        path: 'links',
        element: <Linksboard />,
      },
      {
        path: 'playlists/:playlistId',
        element: <Playlistboard />,
      },
    ],
  },
  ,
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
  {
    path: '/logout',
    element: <LogOutPage/>
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
