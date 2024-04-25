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
  const [hide, setHide] = useState(true);

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 md:m-4">
        {hide ? (
          <TiThMenu
            className="text-3xl text-[#f4a53e] cursor-pointer"
            onClick={() => setHide(!hide)}
          />
        ) : (
          <IoMdCloseCircle
            className="text-3xl text-[#f4a53e] cursor-pointer duration-300"
            onClick={() => setHide(!hide)}
          />
        )}
      </div>

      <div
        className={`absolute inset-y-0 h-full  w-[250px]  md:w-[350px] bg-white  shadow-md duration-300 ${
          hide ? "hidden" : " p-30 pl-5 pt-6"
        }`}
      >
        <IoMdCloseCircle
          className="text-3xl text-[#f4a53e] cursor-pointer duration-300 mb-3"
          onClick={() => setHide(!hide)}
        />
        <Link to="/admin/dashbored" className="">
          <MenuItem icon={<FaTachometerAlt />} text="Dashboard" />
        </Link>

        <Link to="/admin/add-catagory">
          <MenuItem icon={<MdBookmarkAdd />} text="Add Category" />
        </Link>

        <Link to="/admin/analytics">
          <MenuItem icon={<IoMdAnalytics />} text="Analytics" />
        </Link>

        <Link to="/admin/orders">
          <MenuItem icon={<FaShoppingBasket />} text="Orders" />
        </Link>

        <Link to="/admin/users">
          <MenuItem icon={<FaUsersCog />} text="Users" />
        </Link>
      </div>

      <div
        className={`ml-0 md:ml-52 transition-all duration-300 ${
          hide ? "" : "ml-0"
        }`}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <div className="hover:bg-[#f9f9f9] text-lg font-extrabold py-3 flex gap-3  border-b-2 mb-2">
    <div className=" text-2xl md:text-3xl">{icon}</div>
    <h className="block text-[12px] md:text-[17px]">{text}</h>
  </div>
);

export default AdminSideMenu;
