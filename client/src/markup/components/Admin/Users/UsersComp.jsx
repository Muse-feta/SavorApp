import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { IoSearchSharp } from "react-icons/io5";
import { CircularPagination } from '../Orders/CircularPagination';
import usersServices from '../../../../services/users.service';
import { format } from "date-fns";
import { SwitchColors } from '../../../../utils/ToggleSwitch';



const UsersComp = () => {
  const [users, setUsers] = useState([]);
  //  const [isChecked, setIsChecked] = useState(false);
  const [originalUsers, setOriginalUsers] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // State to store checked status for each user
  const [checkedUsers, setCheckedUsers] = useState({});

  // Handler for toggling individual user's checkbox
  const handleCheckboxChange = (userId) => {
    setCheckedUsers((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId], // Toggle the checked status for the user
    }));
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await usersServices.getAllUsers();
      console.log(data.data);
      setUsers(data.data);
      setOriginalUsers(data.data);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const searchUser = async () => {
      if (searchTerm) {
        const result = await usersServices.searchUsers(searchTerm);
        setUsers(result.data);
      } else {
        // If search term is empty, reset to original data
        setUsers(originalUsers);
      }
    };
    searchUser();
  }, [searchTerm, originalUsers]);

  // Pagination
  // Calculate current page's orders
  const indexOfLastOrder = currentPage * usersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - usersPerPage;
  const currentOrders = users.slice(indexOfFirstOrder, indexOfLastOrder);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="checkout-section mt-[30px] mb-[30px]">
      <div className="container mx-auto xl:w-3/4 2xl:w-1/2">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <div className="overflow-x-auto">
          {/* code the searchbar */}
          <div className="flex border border-gray-300 rounded-md p-2 my-2">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Search Orders"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="p-2">
              <IoSearchSharp />
            </p>
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* name of customer join our platform  */}
                  Registration Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Update Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((user, index) => (
                <tr key={index} className="hover:bg-[#fafafa] cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.user_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(user.date), "MM/dd/yyyy")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.role === "admin" ? (
                      <span className="text-red-500 bg-red-50 px-3 py-1 font-extrabold rounded-lg">
                        Admin
                      </span>
                    ) : (
                      <span className="text-green-500 bg-green-50 px-3 py-1 font-extrabold rounded-lg">
                        Customer
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checkedUsers[user.user_id] || false}
                          onChange={() => handleCheckboxChange(user.user_id)}
                        />
                        <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition ${
                            checkedUsers[user.user_id]
                              ? "transform translate-x-6 bg-green-500"
                              : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <CircularPagination
              active={currentPage}
              setActive={setCurrentPage}
              totalPages={Math.ceil(users.length / usersPerPage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersComp

