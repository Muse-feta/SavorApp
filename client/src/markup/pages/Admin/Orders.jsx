import React from 'react'
import OrdersBanner from '../../components/Admin/Orders/OrdersBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';
import OrdesComp from '../../components/Admin/Orders/OrdesComp';

const Orders = () => {
  return (
    <div>
      <OrdersBanner/>
      <div className=" flex">
        <AdminSideMenu />
        <OrdesComp/>
      </div>
    </div>
  );
}

export default Orders