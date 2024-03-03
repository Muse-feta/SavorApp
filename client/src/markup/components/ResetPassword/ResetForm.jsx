import React, { useState } from 'react'
import { toast, Bounce } from 'react-toastify';
import registerService from '../../../services/register.service';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const ResetForm = () => {

    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
      setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      let valid = true;
      if(!Password){
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
        })
        valid = false
      }

      if (!valid) {
        return
      }

      try {
        const token = window.location.pathname.split("/")[2];
        const res = await registerService.resetPassword(Password, token);
        navigate("/login")
        console.log(res)
             if (res.success === true) {
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
               })
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
      }catch (err) {
        console.log(err)
        toast.error(err.message, {
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
          Reset<span className="text-[#f4a53e]"> Your Password</span>
        </h1>
        <div className="md:w-8/12 lg:ml-6 lg:w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* <!-- Email input --> */}
            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<RiLockPasswordFill/>}
              </div>
              <input
                className="outline-none   bg-[#fbfbfb]  "
                type="input"
                name="password"
                placeholder="Password"
                value={Password}
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
              Reset
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

export default ResetForm