import React from 'react'
import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage";
import LandingPage from './pages/LandingPage';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <LandingPage/>
      <Outlet/>
    </>
  )
}

export default App
