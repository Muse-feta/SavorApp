import React, { useState } from 'react'
import { TfiWrite } from "react-icons/tfi";
import catagoryServices from '../../../../services/catagory.service';
import { toast, Bounce } from 'react-toastify';

const AddCatagoryForm = () => {

  const [catName, setCatName] = useState('');
  console.log(catName)
  const [file, setFile] = useState('');

   const handleFile = (e) => {
     setFile(e.target.files[0]);
   };
   const handleChange = (e) => {
     setCatName(e.target.value);
   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if(!catName){
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
      })
      valid = false
    }
    if(!file){
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
      })
      valid = false
    }
    if (!valid) {
      return
    }
    const formData = new FormData();
    console.log(formData)
    formData.append("image", file); 
    formData.append("name", catName);  
    try {
      const res = await catagoryServices.fileUpload(formData);
      console.log(res)
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
          transition: Bounce,})
      }
      setCatName('')
      setFile('')
    } catch (error) { 
      console.log(error)
    }
  }
  console.log(file)

 
  return (
    <div className=" p-11 flex justify-center items-center">
      <div>
        <h1 className=" text-left text-3xl m-5 font-extrabold">
          Add<span className="text-[#f4a53e]"> Catagory</span>
        </h1>
        <div className="md:w-8/12 lg:ml-6 lg:w-[500px]">
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
                value={catName}
              />
            </div>

            <div className="flex border-l-4 border-[#f4a53e] p-4 bg-[#fbfbfb] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
              <input type="file" name="image_url" onChange={handleFile} />
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
}

export default AddCatagoryForm