import React, { useState } from 'react'
import { MdAttachEmail } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';
import registerService from '../../../services/register.service';


const ForgotForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if(!email){
      toast.error("Email is required", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      valid = false
    }

    if (!valid) {
      return
    }

    try {
      const res = await registerService.forgotPassword(email);
      navigate("/login")
      console.log(res)
           if (res.success === true) {
        toast.success("Check your email if not found check in spam folder", {
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
      }else{
        toast.error(res.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }
  return (
    <div className=" p-11 flex justify-center items-center">
      <div>
        <h1 className=" text-left text-3xl m-5 font-extrabold">
          Enter Your <span className="text-[#f4a53e]">Email Address</span>
        </h1>
        <div className="md:w-8/12 lg:ml-6 lg:w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* <!-- Email input --> */}
            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<MdAttachEmail/>}
              </div>
              <input
                className="outline-none   bg-[#fbfbfb]  "
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            {/* Hello, how about our team meeting */}
            <p className=" m-2 text-sm">
              <Link to="/signup">
                Don't have an account <span> </span>
                <span className=" text-[#f4a53e] font-extrabold">
                  Register Here
                </span>
              </Link>
            </p>
            {/* <!-- Remember me checkbox --> */}
            {/* <!-- Submit button --> */}
            {/* <TERipple rippleColor="light" className="w-full"> */}
            <button
              type="submit"
              className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send Email 
            </button>
            {/* </TERipple> */}
            {/* <!-- Divider --> */}

            {/* <!-- Social login buttons --> */}
            {/* <TERipple rippleColor="light" className="w-full"> */}

            {/* </TERipple> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotForm