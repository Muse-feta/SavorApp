import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import SharedLayout from './markup/pages/SharedLayout';
import "./assets/css/all.min.css";
import './assets/bootstrap/css/bootstrap.min.css';
import "./assets/css/owl.carousel.css";
// import "./assets/css/scss/base/"
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import Home from './markup/pages/Home';
import Cart from './markup/pages/Cart';
import CheckOut from './markup/pages/CheckOut';
import Login from './markup/pages/Login';
import SignUp from './markup/pages/SignUp';
import Dashbored from './markup/pages/Admin/Dashbored';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPass from './markup/pages/ForgotPass';
import ResetPassword from './markup/pages/ResetPassword';
import AddCatagory from './markup/pages/Admin/AddCatagory';
import { useDispatch, useSelector } from 'react-redux';
import getAuth from './utils/auth';
import { setCredentils, setIsAdmin, setIsLogin } from './features/auth/auth';
import PrivateAuthRoute from './markup/components/Authorization/PrivateAuthRoute';
import Unauthorized from './markup/pages/Unauthorized';
import EditCatagory from './markup/pages/Admin/EditCatagory';
import AddMenuItems from './markup/pages/Admin/AddMenuItems';
import MenuItems from './markup/pages/MenuItems';
import EditMenu from './markup/pages/Admin/EditMenu';
import EmptyCart from './markup/pages/EmptyCart';
import OrderStatus from './markup/pages/OrderStatus';
import OrderDetail from './markup/pages/OrderDetail';



const App = () => {
  const dispatch = useDispatch();
   const userData = getAuth();
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    if (token) {
      dispatch(setCredentils({ user: userData, token: token }));
      dispatch(setIsLogin(true));
      if (userData.role === "admin") {
        dispatch(setIsAdmin(true));
      }
    }
  }, [token, dispatch]);
   
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/empty-cart" element={<EmptyCart />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/order-status" element={<OrderStatus/>} />
          <Route path="/order-detail/:id" element={<OrderDetail/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/menu-items/:category_id" element={<MenuItems />} />
          <Route
            path="/admin/dashbored"
            element={
              <PrivateAuthRoute roles={["admin"]}>
                <Dashbored />
              </PrivateAuthRoute>
            }
          />
          <Route
            path="/admin/add-catagory"
            element={
              <PrivateAuthRoute roles={["admin"]}>
                <AddCatagory />
              </PrivateAuthRoute>
            }
          />
          <Route
            path="/admin/edit-catagory/:id"
            element={
              <PrivateAuthRoute roles={["admin"]}>
                <EditCatagory />
              </PrivateAuthRoute>
            }
          />
          <Route
            path="/admin/add-menu-items/:id"
            element={
              <PrivateAuthRoute roles={["admin"]}>
                <AddMenuItems />
              </PrivateAuthRoute>
            }
          />
          <Route
            path="/admin/edit-menu-item/:id"
            element={
              <PrivateAuthRoute roles={["admin"]}>
                <EditMenu />
              </PrivateAuthRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App