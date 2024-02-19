import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { PiAddressBookBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const BillingInformation = () => {
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
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Billing Address
                        </button>
                      </h5>
                    </div>

                    <div className="md:w-8/12 lg:ml-6 lg:w-[500px] my-5">
                      <form>
                        {/* firstname input */}
                        <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                          <div className=" mt-[6px] opacity-[30%] mr-2">
                            {<FaUserEdit />}
                          </div>

                          <input
                            className="outline-none  bg-[#f7f7f7] "
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            // value={form.username}
                            // onChange={handleChange}
                          />
                        </div>
                        {/* lastname input */}
                        <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                          <div className=" mt-[6px] opacity-[30%] mr-2">
                            {<FaUserEdit />}
                          </div>

                          <input
                            className="outline-none  bg-[#f7f7f7] "
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            // value={form.username}
                            // onChange={handleChange}
                          />
                        </div>
                        {/* <!-- Email input --> */}
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
                        {/* <!--Password input--> */}
                        <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                          <div className=" mt-[6px] opacity-[30%] mr-2">
                            {<PiAddressBookBold />}
                          </div>
                          <input
                            className="outline-none  bg-[#f7f7f7]"
                            type="text"
                            name="adress"
                            placeholder="Adress"
                            //   value={form.password}
                            //   onChange={handleChange}
                          />
                        </div>
                        {/* Hello, how about our team meeting */}

                        {/* <!-- Remember me checkbox --> */}
                        {/* <!-- Submit button --> */}
                        {/* <TERipple rippleColor="light" className="w-full"> */}
                        <button
                          type="submit"
                          className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                          Place Order
                        </button>
                        {/* </TERipple> */}
                        {/* <!-- Divider --> */}

                        {/* <!-- Social login buttons --> */}
                        {/* <TERipple rippleColor="light" className="w-full"> */}

                        {/* </TERipple> */}
                      </form>
                    </div>
                    {/* <div>
                      <div class="card-body">
                        <div class="billing-address-form">
                          <form action="index.html" className="">
                            <p>
                              <input
                                className=" mb-3"
                                type="text"
                                placeholder="Name"
                              />
                            </p>
                            <p>
                              <input
                                className=" mb-3"
                                type="email"
                                placeholder="Email"
                              />
                            </p>
                            <p>
                              <input
                                className=" mb-3"
                                type="text"
                                placeholder="Address"
                              />
                            </p>
                            <p>
                              <input
                                className=" mb-3"
                                type="tel"
                                placeholder="Phone"
                              />
                            </p>
                            <p>
                              <textarea
                                className=" mb-3"
                                name="bill"
                                id="bill"
                                cols="30"
                                rows="10"
                                placeholder="Say Something"
                              ></textarea>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div> */}
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
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody class="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Total</td>
                    </tr>
                    <tr>
                      <td>Strawberry</td>
                      <td>$85.00</td>
                    </tr>
                    <tr>
                      <td>Berry</td>
                      <td>$70.00</td>
                    </tr>
                    <tr>
                      <td>Lemon</td>
                      <td>$35.00</td>
                    </tr>
                  </tbody>
                  <tbody class="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>$190</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$240</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInformation