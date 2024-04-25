import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { BiSolidDetail } from "react-icons/bi";
import orderServices from "../../../../services/order.service";

const OrdesComp = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [currentPage, setCurrentPage] = useState(1);
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
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = activeOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div class="checkout-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="checkout-accordion-wrap">
                <div class="accordion" id="accordionExample">
                  <div class="card single-accordion">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Active Orders
                        </button>
                      </h5>
                    </div>

                    <div className="  overflow-y-auto scrollbar-w-2 scrollbar-track-gray-300 scrollbar-thumb-gray-600">
                      <div class="card-body">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Total Price
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Phone
                              </th>

                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Order Date
                              </th>

                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Payement Method
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Order Status
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            {currentOrders.map((order, i) => {
                              return (
                                <>
                                  <tr
                                    key={i}
                                    className="hover:bg-[#fafafa]"
                                    onClick={() => orderDetail(order.order_id)}
                                  >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                      {order.order_total_price}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                      {order.phone}
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                      {format(
                                        new Date(order.order_date),
                                        "MM/dd/yyyy"
                                      )}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                      {order.payment_method}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                      <p className=" bg-[#ffc83c] rounded-md text-center font-bold text-sm text-black px-3">
                                        {order.order_status}
                                      </p>
                                    </td>
                                  </tr>

                                  {/* Add more rows as needed */}
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                        
                      </div>
                    </div>
                  </div>
                  <div class="card single-accordion">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Completed Orders
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="shipping-address-form">
                          <p>Your shipping address form is here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdesComp;
