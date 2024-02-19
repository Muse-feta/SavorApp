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


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/check-out' element={<CheckOut/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App