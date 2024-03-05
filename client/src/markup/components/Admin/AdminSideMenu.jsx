import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { MdBookmarkAdd } from "react-icons/md";

const AdminSideMenu = () => {

  const [hide, setHide] = useState(true)
  return (
    <div
      className={`${
        hide ? "w-[100px]" : "w-[300px]"
      } p-3 text-center border shadow-2xl`}
    >
      <div className=" m-4">
        {hide ? (
          <TiThMenu
            className="text-3xl text-[#f4a53e] cursor-pointer"
            onClick={() => setHide(!hide)}
          />
        ) : (
          <IoMdCloseCircle
            className="text-3xl text-[#f4a53e] cursor-pointer"
            onClick={() => setHide(!hide)}
          />
        )}
      </div>
      <Link to="/admin/dashbored">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className="  text-3xl">
            <FaTachometerAlt />
          </div>
          {hide ? null : <h className=" md:block hidden">Dashbored</h>}
        </div>
      </Link>

      <Link to="/admin/add-catagory">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <MdBookmarkAdd />
          </div>
          {hide ? null : <h className=" md:block hidden">Add Catagory</h>}
        </div>
      </Link>

      <Link to="/admin/add-item">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaCalendarPlus />
          </div>
          {hide ? null : <h className=" md:block hidden">Add Item</h>}
        </div>
      </Link>

      <Link to="/admin/analytics">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <IoMdAnalytics />
          </div>
          {hide ? null : <h className=" md:block hidden">Analytics</h>}
        </div>
      </Link>

      <Link to="/admin/orders">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaShoppingBasket />
          </div>
          {hide ? null : <h className=" md:block hidden">Orders</h>}
        </div>
      </Link>

      <Link to="/admin/users">
        <div className=" md:hover:border-l-4 md:border-[#f4a53e] hover:text-[#f4a53e] text-lg font-extrabold hover:bg-[#f9f9f9] py-3 flex gap-3 justify-center border-b-2 mb-2">
          <div className=" text-3xl">
            <FaUsersCog />
          </div>
          {hide ? null : <h className=" md:block hidden">Users</h>}
        </div>
      </Link>
    </div>
  );
};

export default AdminSideMenu;
