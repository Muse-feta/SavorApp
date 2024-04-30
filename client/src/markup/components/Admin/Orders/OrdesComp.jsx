import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { BiSolidDetail } from "react-icons/bi";
import orderServices from "../../../../services/order.service";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CircularPagination } from "./CircularPagination";
 

const OrdesComp = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [currentPage, setCurrentPage] = useState(1);
  // const [active, setActive] = useState(1);
  const [ordersPerPage] = useState(5);
  console.log(user);
  let id = null;
  if (user) {
    id = user.id;
  }
  console.log(id);
  const [order_id, setOrderId] = useState(null);
  const navigate = useNavigate();
  // console.log(order_id);

  const orderDetail = (id) => {
    navigate(`/order-detail/${id}`);
  };

  useEffect(() => {
    const fetchAllActiveOrders = async () => {
      if (id) {
        const data = await orderServices.getAllActiveOrders();
        console.log(data.data);
        setActiveOrders(data.data);
        setOrderId(data.data[0].order_id);
      }
    };
    fetchAllActiveOrders();
  }, [id]);

  // Pagination
  // Calculate current page's orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = activeOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="checkout-section mt-[30px] mb-[30px]">
      <div className="container mx-auto xl:w-3/4 2xl:w-1/2">
        <h2 className="text-xl font-bold mb-4">Active Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((order, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#fafafa] cursor-pointer"
                  onClick={() => orderDetail(order.order_id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.order_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.order_total_price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(order.order_date), "MM/dd/yyyy")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.payment_method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="bg-[#ffc83c] rounded-md text-center font-bold text-sm text-black px-3">
                      {order.order_status}
                    </p>
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
              totalPages={Math.ceil(activeOrders.length / ordersPerPage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdesComp;
