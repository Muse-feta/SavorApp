const pool = require("../Config/db.Config");
require("dotenv").config();
const axios = require("axios");
const CHAPA_AUTH_KEY = process.env.CHAPA_AUTH_KEY //Put Your Chapa Secret Key 


const checkout = async (data) => {
    const query =
      "INSERT INTO orders (user_id, payment_method, phone, order_total_price, currency, order_status) VALUES (?, ?, ?, ?, ?, ?)";
    const rows = await pool.query(query, [
      data.user_id, 
      data.payment_method,
      data.phone,
      data.order_total_price,
      data.currency,
      data.order_status,
    ]);

    const order_id = rows[0].insertId;
    if(!order_id) {
        return false
    }
// use loop to items id
       const query2 =
         "INSERT INTO Order_Items (order_id, item_id, quantity, total_item_price) VALUES (?, ?, ?, ?)";
      for (const orderItems of data.Order_Items) {
        const rows3 = await pool.query(query2, [
          order_id,
          orderItems.item_id,
          orderItems.quantity,
          orderItems.total_item_price,
        ]);
      }

    return true
    
};

const chapaPayment = async (data) => {
 
  try {
    const body = {
      amount: data.order_total_price,
      currency: data.currency,
      phone_number: data.phone,
      tx_ref: data.tx_ref,
      first_name: data.first_name,
      last_name: data.last_name,
      return_url: "http://localhost:5173/order-status",
    };
    const header = {
      headers: {
        Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
    };
    let resp = "";
    await axios
      .post("https://api.chapa.co/v1/transaction/initialize", body, header)
      .then((response) => {
        resp = response;
      })
      .catch((error) => {
        //  console.log(error);
        console.log(error.response.data); // Prints the error response data
        console.log(error.response.status); // Prints the status code of the error response
        console.log(error.response.headers);
        return error;
      });


      
       const query =
         "INSERT INTO orders (user_id, payment_method, phone, order_total_price, currency, order_status) VALUES (?, ?, ?, ?, ?, ?)";
       const rows = await pool.query(query, [
         data.user_id,
         data.payment_method,
         data.phone,
         data.order_total_price,
         data.currency,
         data.order_status,
       ]);

       const order_id = rows[0].insertId;
       if (!order_id) {
         return false;
       }
       // use loop to items id
       const query2 =
         "INSERT INTO Order_Items (order_id, item_id, quantity, total_item_price) VALUES (?, ?, ?, ?)";
       for (const orderItems of data.Order_Items) {
         const rows3 = await pool.query(query2, [
           order_id,
           orderItems.item_id,
           orderItems.quantity,
           orderItems.total_item_price,
         ]);
       }

       const query3 =
         "INSERT INTO online_payments (order_id, amount, currency, transaction_id, payment_status) VALUES (?, ?, ?, ?, ?)";
       const rows4 = await pool.query(query3, [
         order_id,
         data.order_total_price,
         data.currency,
         data.tx_ref,
         "pending",
       ]);
       
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const acceptPayment = async(data) => {
  const body = {
    currency: data.currency,
    amount: data.amount,
    phone_number: data.phone,
    transaction_id: data.transaction_id,
    return_url: "http://localhost:5173/",
  };
  let resp = "";
  await axios
    .post("https://api.chapa.co/v1/transaction/initialize", body, header)
    .then((response) => {
      resp = response;
    }).catch((error) => {
      console.log(error);
    });
}

module.exports = {
  checkout,
  chapaPayment,
};
