import React from 'react'
import AddCatTopBanner from '../../components/Admin/AddCatagory/AddCatTopBanner';
import AddCatagoryForm from '../../components/Admin/AddCatagory/AddCatagoryForm';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';

const AddCatagory = () => {
  return (
    <div>
      <AddCatTopBanner/>
      <div className=" flex">
        <AdminSideMenu/>
        <AddCatagoryForm/>
      </div>
    </div>
  );
}

export default AddCatagory