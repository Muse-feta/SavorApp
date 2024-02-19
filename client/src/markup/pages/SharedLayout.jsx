import React from 'react'
// import outlet from react-router-dom
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Fotter from '../components/Fotter';

const SharedLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet />
        <Fotter/>
    </div>
  )
}

export default SharedLayout