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




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/admin/dashbored" element={<Dashbored />} />
          <Route path="/admin/add-catagory" element={<AddCatagory/>} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App