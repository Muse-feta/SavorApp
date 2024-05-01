import React, { useEffect, useState } from 'react'
import orderServices from '../../../services/order.service'
import { useSelector } from "react-redux";
import { toast, Bounce } from "react-toastify";
import { format } from "date-fns";

import banner from "../../../assets/img/frenchnobg.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { button } from '@material-tailwind/react';

const OrderDetailComp = () => {
    const id = window.location.pathname.split("/")[2]
    const token = useSelector((state) => state.auth.token);
     const user = useSelector((state) => state.auth.user);
     const navigate = useNavigate();
    //  console.log(user)
    
    const [transactionId, setTransactionId] = useState(null)
    const [onlinePayementStatus, setOnlinePayementStatus] = useState(null)
    const [updatedOrderDetail, setUpdatedOrderDetail] = useState(null)
    // console.log(onlinePayementStatus)
    // console.log(transactionId)
    // console.log(updatedOrderDetail)

    let role = null;
    if (user) {
      role = user.role;
    }
    // console.log(role)

    // get active order detail
        useEffect(() => {
            const res = orderServices.getActiveOrderDetail(id).then((res) => {
                // console.log(res.data)
                if (res.data[0].transaction_id) {
                  setTransactionId(res.data[0].transaction_id);
                }
            }).catch((err) => {
                console.log(err)
            })
            
        },[])
       
        // verify transaction
        useEffect(() => {
            
            if (transactionId) {
              const res = orderServices
                .verifyTransaction(transactionId)
                .then((res) => {
                  // console.log(res.data.data);
                  setOnlinePayementStatus(res.data.data.status);
                })
                .catch((err) => {
                  console.log(err);
                });
            }

          
        },[transactionId])

        // updated payement status
        useEffect(() => {
            if (onlinePayementStatus) {
              const data = {
                payment_status: onlinePayementStatus,
              };
              const res = orderServices
                .updateTransactionStatus(id, data)
                .then((res) => {
                  // console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
        })
      // updated orders
        useEffect(() => {
         setTimeout(() => {
           const res = orderServices
             .getUpdatedActiveOrders(id)
             .then((res) => {
               console.log(res.data);
               setUpdatedOrderDetail(res.data);
             })
             .catch((err) => {
               console.log(err);
             });
         }, 2000);
        },[ onlinePayementStatus])

        const handleUpdateOrderStatus = () => {
          const res = orderServices
            .updateOrderStatus(id, token)
            .then((res) => {
              console.log(res.message);
              toast.success(res.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
              // navigate("/admin/orders");
            })
            .catch((err) => {
              console.log(err);
            });
        }

      
  return (
    <div>
      <div class="checkout-section mt-5 mb-150">
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
                          Active Order Summary
                        </button>
                      </h5>
                    </div>

                    <div>
                      <div class="fle justify-center items-center m-5">
                        {!updatedOrderDetail && <p>Loading...</p>}
                        {updatedOrderDetail && (
                          <div>
                            <h1>
                              <span className="font-bold">Order Items: </span>{" "}
                              <span>
                                {updatedOrderDetail.map(
                                  (item) =>
                                    item.name + " " + item.quantity + ", "
                                )}
                              </span>
                            </h1>
                            <h1>
                              <span className="font-bold">Username: </span>{" "}
                              <span>{updatedOrderDetail[0].username}</span>
                            </h1>
                            <h1>
                              <span className="font-bold">Phone Number: </span>{" "}
                              <span>{updatedOrderDetail[0].phone}</span>
                            </h1>
                            <h1>
                              <span className="font-bold">Total Price: </span>{" "}
                              <span>
                                {updatedOrderDetail[0].order_total_price}
                              </span>
                            </h1>
                            <h1>
                              <span className="font-bold">
                                Payment Method:{" "}
                              </span>{" "}
                              <span>
                                {updatedOrderDetail[0].payment_method}
                              </span>
                            </h1>

                            {updatedOrderDetail[0].order_status ===
                              "Pending" && (
                              <div>
                                {updatedOrderDetail[0].payment_method ===
                                "Online" ? (
                                  <h1>
                                    <span className="font-bold">
                                      Payement Status:{" "}
                                    </span>
                                    <span>
                                      {updatedOrderDetail[0].payment_status ===
                                      "success"
                                        ? "Paid"
                                        : "Unpaid"}
                                    </span>
                                  </h1>
                                ) : (
                                  <h1 className=" md:flex">
                                    <span className="font-bold">
                                      Payement Status:{" "}
                                    </span>{" "}
                                    <span className="md:mr-5">Unpaid</span>
                                  </h1>
                                )}
                              </div>
                            )}
                            {updatedOrderDetail[0].payment_method ===
                              "Online" && (
                              <h1>
                                <span className="font-bold">
                                  Transaction Id:{" "}
                                </span>
                                <span>
                                  {updatedOrderDetail[0].transaction_id}
                                </span>
                              </h1>
                            )}
                            <h1>
                              <span className="font-bold">Order Date: </span>
                              <span>
                                {" "}
                                {format(
                                  new Date(updatedOrderDetail[0].order_date),
                                  "MM/dd/yyyy"
                                )}
                              </span>
                            </h1>

                            <h1>
                              <span className="font-bold">Order Status: </span>
                              <span>{updatedOrderDetail[0].order_status}</span>
                            </h1>
                            {role === "admin" ? (
                              <Link
                                onClick={handleUpdateOrderStatus}
                                className=" text-center inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              >
                                Complete
                              </Link>
                            ) : (
                              <Link
                                to={"/order-status"}
                                className=" text-center inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              >
                                Back
                              </Link>
                            )}
                          </div>
                        )}
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
}

export default OrderDetailComp