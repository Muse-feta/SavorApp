import React, { useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";import { Link, useNavigate } from "react-router-dom";
import registerService from '../../../services/register.service';
import getAuth from '../../../utils/auth';
import { setCredentils, setIsAdmin, setIsLogin } from '../../../features/auth/auth';
import { useDispatch } from "react-redux";

const SignupForm = () => {

  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    role: "customer",
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if(!form.username){
         toast.error("Username is required", {
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
        if (!form.phone) {
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

            if (!form.email) {
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
              });
              valid = false;
            }

                if (!form.password) {
                  toast.error("Password is required", {
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

                   if (!form.password.length > 6) {
                     toast.error("Password must be at least 6 characters", {
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
      const response = await registerService.register(form);
      console.log("response", response);
      if (response.token) {
        localStorage.setItem("token", response.token);
        const userData = getAuth();
        dispatch(setCredentils({ user: userData, token: response.token }));
        dispatch(setIsLogin(true));
      }
      const userData = getAuth();
      if (userData?.role === "admin") {
        dispatch(setIsAdmin(true));
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
        navigate("/");
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
          });
    }
  }
  return (
    <div className=" p-11 flex justify-center items-center">
      <div>
        <h1 className=" text-left text-3xl m-5 font-extrabold">
          Create New <span className="text-[#f4a53e]">Account</span>
        </h1>
        <div className="md:w-8/12 lg:ml-6 lg:w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* <!-- Username input --> */}
            <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<FaUserEdit />}
              </div>

              <input
                className="outline-none  bg-[#f7f7f7] "
                type="text"
                name="username"
                placeholder="User Name"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            {/* <!-- phone input --> */}
            <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<FaBlenderPhone />}
              </div>

              <input
                className="outline-none  bg-[#f7f7f7] "
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            {/* <!-- Email input --> */}
            <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<MdAttachEmail />}
              </div>

              <input
                className="outline-none  bg-[#f7f7f7] "
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {/* <!--Password input--> */}
            <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<RiLockPasswordFill />}
              </div>
              <input
                className="outline-none  bg-[#f7f7f7]"
                type="text"
                name="password"
                placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
              />
            </div>

            {/* <!-- Submit button --> */}

            {/* Hello, how about our team meeting */}
            <p className=" m-2 text-sm">
              <Link to="/login">
                alredy have an account <span> </span>
                <span className=" text-[#f4a53e] font-extrabold">Sign In</span>
              </Link>
            </p>
            {/* <!-- Remember me checkbox --> */}
            {/* <!-- Submit button --> */}
            {/* <TERipple rippleColor="light" className="w-full"> */}
            <button
              type="submit"
              className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Sign Up
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

export default SignupForm