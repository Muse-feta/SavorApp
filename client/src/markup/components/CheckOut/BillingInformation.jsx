import React, { useEffect, useState } from 'react'
import { FaBlenderPhone } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { FcCurrencyExchange } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import checkoutService from '../../../services/checkout.service';
import { toast, Bounce } from "react-toastify";


const BillingInformation = () => {
  // const id = useSelector((state) => state.auth.user.id);
  const [buttonText, setButtonText] = useState("Place Order");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const {firstname, lastname, id} = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const tx_ref = `${firstname}-${Date.now()}`;
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // console.log(items);
  const Order_Items = items.map((item, index) => {
    return {
      item_id: item.item_id,
      quantity: item.quantity,
      total_item_price: item.itemTotal,
    };
  });
    // console.log(Order_Items);
  // const [payementMethod, setPayementMethod] = useState("Manual");
  // console.log(payementMethod);
  const [checkOutData, setCheckOutData] = useState({
    user_id: id,
    payment_method: "Manual",
    phone: "",
    order_total_price: total,
    currency: "ETB",
    order_status: "Pending",
    Order_Items: Order_Items,
    tx_ref: tx_ref,
    first_name: firstname,
    last_name: lastname,
  });

  useEffect(() => {
    setButtonText("Place Order");
    setButtonDisabled(false);
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
     if (!checkOutData.payment_method) {
       toast.error("Payement method is required", {
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
       valid = false;
     }
     if (!checkOutData.phone) {
       toast.error("Phone number is required", {
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
       valid = false;
     }
     if (!valid) {
       return;
     }

     try {
       if(checkOutData.payment_method === "Manual"){
        const response = await checkoutService.checkOut(checkOutData);
        setButtonDisabled(true);
        console.log(response);
        // Clear cart after successful checkout
    if (response.success === true) {
      items.forEach((item) => removeItem(item.id));
      setCheckOutData({
        ...checkOutData,
        payment_method: "Manual",
        phone: "",
        order_total_price: 0,
        currency: "ETB",
        order_status: "Pending",
        Order_Items: [],
      });
      navigate("/order-status");
    }

        if (response.success === true) {
          toast.success(response.message, {
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
        } else {
          toast.error(response.message, {
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
        }
       }else if(checkOutData.payment_method === "Online"){
        setButtonText("Please wait...");
        setButtonDisabled(true);
       const response = await checkoutService.onlineCheckOut(checkOutData);
       // Clear cart after successful checkout

    
        if(response.success === true){
           items.forEach((item) => removeItem(item.id));
           setCheckOutData({
             ...checkOutData,
             payment_method: "Manual",
             phone: "",
             order_total_price: 0,
             currency: "ETB",
             order_status: "Pending",
             Order_Items: [],
           });
        }
       
        window.location.href = response.data.data.checkout_url;
        //  window.location.reload();
         
         //  if (response.success === true) {
      //    toast.success(response.message, {
      //      position: "top-center",
      //      autoClose: 5000,
      //      hideProgressBar: false,
      //      closeOnClick: true,
      //      pauseOnHover: true,
      //      draggable: true,
      //      progress: undefined,
      //      theme: "light",
      //      transition: Bounce,
      //    });
      //  } else {
      //    toast.error(response.message, {
      //      position: "top-center",
      //      autoClose: 5000,
      //      hideProgressBar: false,
      //      closeOnClick: true,
      //      pauseOnHover: true,
      //      draggable: true,
      //      progress: undefined,
      //      theme: "light",
      //      transition: Bounce,
      //    });
      //  }
       }
     } catch (error) {
      console.log(error);
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
                        <div className="flex">
                          <button className="">Payement Information</button>
                        </div>
                      </h5>
                    </div>

                    <div className="md:w-8/12 lg:ml-6 lg:w-[500px] my-5">
                      {checkOutData.payment_method === "Manual" ? (
                        <h1 className="font-extrabold text-xl text-center mb-2">
                          Manual <span className="text-[#f4a53e]">Payment</span>
                        </h1>
                      ) : (
                        <h1 className="font-extrabold text-xl text-center mb-2">
                          Online <span className="text-[#f4a53e]">Payment</span>
                        </h1>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                          <div className=" mt-[6px] opacity-[30%] mr-2 ">
                            {<FcCurrencyExchange />}
                          </div>

                          <select
                            className="outline-none  bg-[#f7f7f7] w-[280px] md:w-[480px]"
                            onChange={(e) =>
                              setCheckOutData({
                                ...checkOutData,
                                payment_method: e.target.value,
                              })
                            }
                            value={checkOutData.payment_method}
                            name="payment_method"
                          >
                            <option value="Manual">Pay Manualy</option>
                            <option value="Online">Pay Online</option>
                          </select>
                        </div>

                        <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                          <div className=" mt-[6px] opacity-[30%] mr-2">
                            {<FaBlenderPhone />}
                          </div>

                          <input
                            className="outline-none  bg-[#f7f7f7] "
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={checkOutData.phone}
                            onChange={(e) => {
                              setCheckOutData({
                                ...checkOutData,
                                phone: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={buttonDisabled}
                          className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                          {buttonText}
                        </button>
                      </form>
                    </div>
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