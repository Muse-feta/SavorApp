import React from 'react'
import AddMenuBanner from '../../components/Admin/Menu_Items/AddMenuBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';
import AddMenuItemsCompo from '../../components/Admin/Menu_Items/AddMenuItemsCompo';

const AddMenuItems = () => {
  return (
    <div>
      <AddMenuBanner/>
      <div className=" flex">
        <AdminSideMenu/>
        <AddMenuItemsCompo/>
      </div>
    </div>
  );
}

export default AddMenuItems