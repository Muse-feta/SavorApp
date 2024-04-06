import React, { useEffect, useState } from 'react'
import sav_logo from "../../assets/img/sav_logo.png"
import { Link } from 'react-router-dom';
import { setCredentils, setIsAdmin, setIsLogin } from '../../features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
   const [show, handleShow] = useState(false);
   const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

   const logout = () => {
     localStorage.clear();
     dispatch(setCredentils(null));
     dispatch(setIsLogin(false));
     dispatch(setIsAdmin(false));
   };
   
  

   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.scrollY > 80) {
         handleShow(true);
       } else handleShow(false);
     });
     return () => {
       window.removeEventListener("scroll", useEffect);
     };
   }, []);
	
  return (
    <div className="sticky top-0 z-10 ">
      <div
        class={`top-header-area ${show ? " bg-[#051922] h-[90px]" : null}`}
        id="sticker"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="main-menu-wrap ">
                {/* <!-- logo --> */}
                <div class="site-logo">
                  <Link to="/">
                    <img
                      className=" w-[70px] mt-[-20px] ml-3"
                      src={sav_logo}
                      alt=""
                    />
                  </Link>
                </div>
                {/* <!-- logo --> */}

                {/* <!-- menu start --> */}
                <nav class="main-menu ">
                  <ul className="">
                    <li class="current-list-item">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>

                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    {isAdmin && (
                      <li>
                        <Link to="/admin/dashbored">Admin</Link>
                      </li>
                    )}

                    <li>
                      <div class="header-icons">
                        <Link class="shopping-cart" to="/cart">
                          <i class="fas fa-shopping-cart"></i>
                        </Link>

                        {isLogin ? (
                          <Link
                            className=" bg-[#f4a53e] rounded-3xl py-2 hover:bg-[#fff] hover:text-white hover:scale-105"
                            to="/login"
                            onClick={logout}
                          >
                            LogOut
                          </Link>
                        ) : (
                          <Link
                            className=" bg-[#f4a53e] rounded-3xl py-2 hover:bg-[#fff] hover:text-white hover:scale-105"
                            to="/login"
                          >
                            Login
                          </Link>
                        )}
                      </div>
                    </li>
                  </ul>
                </nav>

                <div class="mobile-menu"></div>
                {/* <!-- menu end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header