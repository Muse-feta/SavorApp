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
      <div className="list-section p-32 ">
        <div className="">
          <div className="row">
            {currentOrders.map((order, index) => (
              <div
                className="col-lg-4 col-md-6 m-4 mb-lg-0"
                key={index}
                onClick={() => orderDetail(order.order_id)}
              >
                <div className="list-box d-flex align-items-center">
                  <div className="list-icon">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <div className="content">
                    <h3>{order.order_id}</h3>
                    <p>{order.order_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdesComp;
