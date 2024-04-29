import React from 'react'
import OrdersBanner from '../../components/Admin/Orders/OrdersBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';
import OrdesComp from '../../components/Admin/Orders/OrdesComp';

const Orders = () => {
  return (
    <div>
      <OrdersBanner />
      <div className="flex">
        <AdminSideMenu />

        <div style={{ flex: "1 1 auto", minWidth: "0" }}>
          {" "}
          {/* Set min-width to ensure it doesn't shrink */}
          <OrdesComp />
        </div>
      </div>
    </div>
  );
}

export default Orders