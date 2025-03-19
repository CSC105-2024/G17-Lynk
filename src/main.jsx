import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Test from "./pages/Test.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,

  },
  {
    path: "/login",
    element: <LogInPage/>
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  },
  {
    path: '/test',
    element: <Test />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
