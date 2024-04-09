import React, { useEffect, useState } from "react";
import catagoryServices from "../../../services/catagory.service";
const api_url = import.meta.env.VITE_API_URL;
import { MdEditSquare } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { useSelector } from "react-redux";

const Product = () => {

  const [catagory, setCatagory] = useState([]);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const token = useSelector((state) => state.auth.token);



   const fetchCategories = async () => {
     const res = await catagoryServices.getFiles();
     setCatagory(res.data);
   };

 useEffect(() => {
   fetchCategories();
 }, []);

   const handleDelete = async (id) => {
     const res = await catagoryServices.deleteCatagory(id, token);
      toast.success("Catagory Deleted Successfully", {
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
     if (res) {
       fetchCategories(); // Fetch updated categories after deletion
     }
   };

  


  return (
    <div className=" mt-[630px] md:mt-[450px]">
      <div class="product-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3 className=" font-extrabold">
                  <span class="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            {catagory?.map((catagory) => (
              <div class="col-lg-4 col-md-6 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="single-product.html">
                      <img
                        className=" h-[220px]"
                        src={`${api_url}/images/` + catagory.image_url}
                        alt=""
                      />
                    </a>
                  </div>
                  <h3>{catagory.name}</h3>

                  <Link to={`/menu-items/${catagory.category_id}`} class="cart-btn">
                    <i class="fas fa-shopping-cart"></i> See Details
                  </Link>

                  {isAdmin && (
                    <div className=" flex justify-evenly my-3 mx-32">
                      <Link
                        to={`/admin/add-menu-items/${catagory.category_id}`}
                        className=" text-3xl"
                      >
                        <MdAssignmentAdd />
                      </Link>
                      <Link
                        to={`/admin/edit-catagory/${catagory.category_id}`}
                        className=" text-3xl"
                      >
                        <MdEditSquare />
                      </Link>

                      <Link
                        className=" text-3xl"
                        onClick={() => handleDelete(catagory.category_id)}
                      >
                        <MdDeleteSweep />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* <div class="col-lg-4 col-md-6 text-center">
              <div class="single-product-item">
                <div class="product-image">
                  <a href="single-product.html">
                    <img className=" h-[220px]" src={chebshebsa} alt="" />
                  </a>
                </div>
                <h3>ChebChebsa</h3>
                <p class="product-price">
                  <span>Per plate</span> 60 ETB{" "}
                </p>
                <a href="cart.html" class="cart-btn">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div> */}
            {/* <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div class="single-product-item">
                <div class="product-image">
                  <a href="single-product.html">
                    <img
                      className=" h-[220px]"
                      src={coca}
                      alt=""
                    />
                  </a>
                </div>
                <h3>Coca</h3>
                <p class="product-price">
                  <span>Per liter</span> 100 ETB{" "}
                </p>
                <a href="cart.html" class="cart-btn">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
