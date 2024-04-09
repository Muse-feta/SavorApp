import React, { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { IoMdPricetags } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { toast, Bounce } from "react-toastify";
import { useSelector } from "react-redux";
import menuItemsServices from "../../../../services/menuItems.service";

const AddMenuItems = () => {
  const id = window.location.pathname.split("/")[3];
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category_id: id,
  });
  // console.log(catName);
  const [file, setFile] = useState("");
  const token = useSelector((state) => state.auth.token);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (!formData.name) {
      toast.error("Catagory name is required", {
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
    if (!formData.description) {
      toast.error("Item description is required", {
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
    if (!formData.price) {
      toast.error("Item price is required", {
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
    if (!file) {
      toast.error("Catagory image is required", {
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
    const formDataWithFile = new FormData();
    console.log(formData);
    // Append the file
    formDataWithFile.append("image", file);

    // Append each property of formData individually
    Object.keys(formData).forEach((key) => {
      formDataWithFile.append(key, formData[key]);
    });
    try {
      const res = await menuItemsServices.fileUpload(formDataWithFile, token);
      console.log(res);
      if (res.success === true) {
        toast.success("Catagory added successfully", {
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
        });
      }
      setFormData({
        name: "",
        description: "",
        price: "",
        catagory_id: id,
      });
      setFile("");
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
  };
  console.log(file);

  return (
    <div className=" p-3 md:p-11 flex justify-center items-center ">
      <div>
        <h1 className=" text-left text-3xl m-5 font-extrabold w-7/12">
          Add<span className="text-[#f4a53e]"> Menu Items</span>
        </h1>
        <div className=" w-7/12 md:w-8/12 lg:ml-6 lg:w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* <!-- Add Catagory input --> */}
            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">{<TfiWrite />}</div>
              <input
                className="outline-none   bg-[#fbfbfb]  "
                type="text"
                name="name"
                placeholder="Catagory Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<IoMdPricetags />}
              </div>
              <input
                className="outline-none   bg-[#fbfbfb]  "
                type="text"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                value={formData.price}
              />
            </div>

            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <input type="file" name="image_url" onChange={handleFile} />
            </div>

            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <div className=" mt-[6px] opacity-[30%] mr-2">
                {<MdDescription />}
              </div>
              <textarea
                className="outline-none   bg-[#fbfbfb]  "
                // type="text"
                name="description"
                rows="4"
                cols="50"
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>

            <button
              className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              type="submit"
            >
              ADD
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
};

export default AddMenuItems;
