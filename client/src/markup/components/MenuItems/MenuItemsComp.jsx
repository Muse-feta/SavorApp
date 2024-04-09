import React, { useEffect, useState } from 'react'
const api_url = import.meta.env.VITE_API_URL;
import { MdEditSquare } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { useSelector } from "react-redux";
import menuItemsServices from '../../../services/menuItems.service';

const MenuItemsComp = () => {
      const [menuItem, setMenuItem] = useState([]);
      const isAdmin = useSelector((state) => state.auth.isAdmin);
      const token = useSelector((state) => state.auth.token);
      // console.log(token)
      const catagory_id = window. location.pathname.split("/")[2];
      const [openItemIndex, setOpenItemIndex] = useState(null);

         const fetchCategories = async () => {
          const res = await menuItemsServices.getFilesBymenuItemId(catagory_id);
          setMenuItem(res.data);
         };

          useEffect(() => {
            fetchCategories();
          }, []);

            const handleDelete = async (id) => {
              const res = await menuItemsServices.deleteMenuItem(id, token);
              toast.success("Item Deleted Successfully", {
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

   

       const handleOpenToggle = (index) => {
         setOpenItemIndex(openItemIndex === index ? null : index);
       };
  return (
    <div className=" mt-[100px] md:mt-[0px]">
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
            {menuItem?.map((menuItem, index) => (
              <div class="col-lg-4 col-md-6 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="single-product.html">
                      <img
                        className=" h-[220px]"
                        src={`${api_url}/images/` + menuItem.image_url}
                        alt=""
                      />
                    </a>
                  </div>
                  <h3>{menuItem.name}</h3>
                  <h3>{menuItem.price}</h3>
                  <button
                    className="mb-3"
                    onClick={() => handleOpenToggle(index)}
                  >
                    <FaAngleDoubleDown />
                  </button>{" "}
                  <br />
                  {openItemIndex === index && <p>{menuItem.description}</p>}
                  <Link to="/manu-items" class="cart-btn">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                  </Link>
                  {isAdmin && (
                    <div className=" flex justify-evenly my-3 mx-32">
                      <Link
                        to={`/admin/add-menu-items/${menuItem.category_id}`}
                        className=" text-3xl"
                      >
                        <MdAssignmentAdd />
                      </Link>
                      <Link
                        to={`/admin/edit-menu-item/${menuItem.item_id}`}
                        className=" text-3xl"
                      >
                        <MdEditSquare />
                      </Link>

                      <Link
                        className=" text-3xl"
                        onClick={() => handleDelete(menuItem.item_id)}
                      >
                        <MdDeleteSweep />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemsComp