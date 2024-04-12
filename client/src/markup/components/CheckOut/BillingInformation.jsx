import React, { useState } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { PiAddressBookBold } from "react-icons/pi";
import { CartProvider, useCart } from "react-use-cart";
import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";

const BillingInformation = () => {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
      useCart();
      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const [onlineOpen, setOnlineOpen] = useState(false);
      const [manualOpen, setManualOpen] = useState(false);
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
                        <div className="flex">
                          <button
                            className=""
                            onClick={() => {
                              setManualOpen(!manualOpen), setOnlineOpen(false);
                            }}
                          >
                            Manual Payment
                          </button>
                          <button
                            onClick={() => {
                              setOnlineOpen(!onlineOpen), setManualOpen(false);
                            }}
                          >
                            Online Payment
                          </button>
                        </div>
                      </h5>
                    </div>

                    {!onlineOpen && !manualOpen && (
                      <div
                        className="   text-center bg-green-100 border  px-4 py-3 rounded relative mt-2"
                        role="alert"
                      >
                        <p className="border-green-400 text-green-700 text-lg">
                          Welcome to the checkout! To complete your order,
                          please select your preferred payment method.
                        </p>
                      </div>
                    )}

                    {manualOpen && (
                      <div className="md:w-8/12 lg:ml-6 lg:w-[500px] my-5">
                        <form>
                          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                            <div className=" mt-[6px] opacity-[30%] mr-2 ">
                              {<FcCurrencyExchange />}
                            </div>

                            <select
                              className="outline-none  bg-[#f7f7f7] md:w-[480px]"
                              // onChange={handleChange}
                              // value={employeeData.company_role_id}
                              name="company_role_id"
                            >
                              <option value={1}>ETB</option>
                              <option value={2}>Dollar</option>
                              <option value={3}>Euro</option>
                              <option value={3}>Pound</option>
                              <option value={3}>Yen</option>
                            </select>
                          </div>

                          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                            <div className=" mt-[6px] opacity-[30%] mr-2">
                              {<FaBlenderPhone />}
                            </div>

                            <input
                              className="outline-none  bg-[#f7f7f7] "
                              type="text"
                              name="phone_number"
                              placeholder="Phone Number"
                              // value={form.username}
                              // onChange={handleChange}
                            />
                          </div>

                          <button
                            type="submit"
                            className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            Place Order
                          </button>
                        </form>
                      </div>
                    )}

                    {onlineOpen && (
                      <div className="md:w-8/12 lg:ml-6 lg:w-[500px] my-5">
                        <form>
                          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                            <div className=" mt-[6px] opacity-[30%] mr-2 ">
                              {<FcCurrencyExchange />}
                            </div>

                            <select
                              className="outline-none  bg-[#f7f7f7] md:w-[480px]"
                              // onChange={handleChange}
                              // value={employeeData.company_role_id}
                              name="company_role_id"
                            >
                              <option value={1}>ETB</option>
                              <option value={2}>Dollar</option>
                              <option value={3}>Euro</option>
                              <option value={3}>Pound</option>
                              <option value={3}>Yen</option>
                            </select>
                          </div>

                          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                            <div className=" mt-[6px] opacity-[30%] mr-2">
                              {<FaBlenderPhone />}
                            </div>

                            <input
                              className="outline-none  bg-[#f7f7f7] "
                              type="text"
                              name="phone_number"
                              placeholder="Phone Number"
                              // value={form.username}
                              // onChange={handleChange}
                            />
                          </div>
                          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                            <div className=" mt-[6px] opacity-[30%] mr-2">
                              {<FaBlenderPhone />}
                            </div>

                            <input
                              className="outline-none  bg-[#f7f7f7] "
                              type="text"
                              name="phone_number"
                              placeholder="Phone Number"
                              // value={form.username}
                              // onChange={handleChange}
                            />
                          </div>

                          <button
                            type="submit"
                            className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            Place Order
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="order-details-wrap">
                <table class="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      {/* <th>Quantity</th> */}
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.name}</td>
                          {/* <td>{item.quantity}</td> */}
                          <td>{item.itemTotal}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td>Total</td>
                      {/* <td>-</td> */}
                      <td>{total}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="cart-buttons">
                  {/* <a href="cart.html" class="boxed-btn">Update Cart</a> */}
                  <Link to="/cart" class="boxed-btn black">
                    Check Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInformation