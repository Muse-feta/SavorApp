import React from 'react'
import UsersComp from '../../components/Admin/Users/UsersComp';
import UserBanner from '../../components/Admin/Users/UserBanner';
import AdminSideMenu from '../../components/Admin/AdminSideMenu';

const Users = () => {
  return (
    <div>
      <UserBanner/>
      <div className="flex">
        <AdminSideMenu/>

        <div style={{ flex: "1 1 auto", minWidth: "0" }}>
          {" "}
          {/* Set min-width to ensure it doesn't shrink */}
          <UsersComp />
        </div>
      </div>
    </div>
  );
}

export default Users