const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./Config/db.Config');
const { Users, Categories, Menu_Items, Orders, Order_Items, Online_Payments, Manual_Checkout_Information, Feedback, UserInfo, Users_Info } = require('./Model/model');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const router = require('./Routes');

app.use(cors());

app.use(express.json());

app.use(router);


const startApp = async () => {
  pool.getConnection();
  console.log("Database Connected Succefully");
  try {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    pool.query(Users);
    pool.query(Users_Info);
    pool.query(Categories);
    pool.query(Menu_Items);
    pool.query(Orders);
    pool.query(Order_Items);
    pool.query(Online_Payments);
    pool.query(Manual_Checkout_Information);
    pool.query(Feedback);
    console.log("all tables has been created");
  } catch (error) {
    console.log(error);
  }
};

startApp();

