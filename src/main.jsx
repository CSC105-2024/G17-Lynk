import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
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
    path: '/signin',
    element: <SignInPage/>
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
