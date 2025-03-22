import React from 'react'
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
const App = () => {
  return (
    <>
     <LandingPage/> 
      <Outlet/>
    </>
  )
}

export default App
