import React from 'react'
import AdminSideMenu from '../../components/Admin/AdminSideMenu'
import DashboredTopBanner from '../../components/Admin/Dashbored/DashboredTopBanner'
import DashboredRightSide from '../../components/Admin/Dashbored/DashboredRightSide';

const Dashbored = () => {
  return (
    <div>
      <DashboredTopBanner />
      <div className=' flex'>
        <AdminSideMenu />
        <DashboredRightSide/>
      </div>
    </div>
  );
}

export default Dashbored