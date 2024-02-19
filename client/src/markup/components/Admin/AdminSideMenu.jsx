import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

const AdminSideMenu = () => {
  return (
    <div className=" md:w-[300px] p-3 text-center border shadow-2xl">
      <Link to="/admin/dashbored">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className="  text-3xl">
            <FaTachometerAlt />
          </div>
          <h className=" md:block hidden">Dashbored</h>
        </div>
      </Link>

      <Link to="/admin/add-item">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaCalendarPlus />
          </div>
          <h className=" md:block hidden">Add Item</h>
        </div>
      </Link>

      <Link to="/admin/analytics">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <IoMdAnalytics />
          </div>
          <h className=" md:block hidden">Analytics</h>
        </div>
      </Link>

      <Link to="/admin/orders">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaShoppingBasket />
          </div>
          <h className=" md:block hidden">Orders</h>
        </div>
      </Link>

      <Link to="/admin/users">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaUsersCog />
          </div>
          <h className=" md:block hidden">Users</h>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideMenu;
