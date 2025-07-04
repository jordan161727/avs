import Navbar from '../components/Navbar'
import {Outlet }

 from 'react-router-dom'
import React from 'react'


function MainLayout() {
  return (
    <>
    <Navbar />
     <Outlet/>
    </>
  )
}

export default MainLayout