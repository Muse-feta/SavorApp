import React from 'react'
import EditCatBanner from '../../components/Admin/EditCatagory/EditCatBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';
import EditCatagoryComp from '../../components/Admin/EditCatagory/EditCatagoryComp';

const EditCatagory = () => {
  return (
    <div>
      <EditCatBanner/>
      <div className=" flex">
        <AdminSideMenu/>
        <EditCatagoryComp/>
      </div>
    </div>
  );
}

export default EditCatagory