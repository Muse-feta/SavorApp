import React from 'react'
import EditMenuBanner from '../../components/Admin/EditMenu/EditMenuBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';
import EditMenuComp from '../../components/Admin/EditMenu/EditMenuComp';

const EditMenu = () => {
  return (
    <div>
      <EditMenuBanner/>
      <div className=" flex">
        <AdminSideMenu/>
        <EditMenuComp/>
      </div>
    </div>
  );
}

export default EditMenu