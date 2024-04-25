const pool = require("../Config/db.Config");
require("dotenv").config();
const axios = require("axios");
const CHAPA_AUTH_KEY = process.env.CHAPA_AUTH_KEY //Put Your Chapa Secret Key 


const getOrderById = async (id) => {

    const query = `SELECT * FROM orders WHERE user_id = ? and order_status = ?`;
    const rows = await pool.query(query, [id, "pending"]);
    return rows[0];
};

const getAllActiveOrders = async () => {
    const query = `SELECT * FROM orders WHERE order_status = ?`;
    const rows = await pool.query(query, ["pending"]);
    return rows[0];
};

const getActiveOrderDetail = async (order_id) => {

    // select orders , order_items , online_payments using order_id
    const query = `SELECT * 
FROM orders 
INNER JOIN Order_Items ON orders.order_id = Order_Items.order_id 
INNER JOIN Menu_Items ON Order_Items.item_id = Menu_Items.item_id 
LEFT JOIN Online_Payments ON orders.order_id = Online_Payments.order_id 
WHERE orders.order_id = ?`;
    const rows = await pool.query(query, [order_id]);

    return rows[0];
};

const verifyTransaction = async (transaction_id) => {
    const header = {
      headers: {
        Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
    };
    let resp = "";
    try {
        const response = await axios.get(
          `https://api.chapa.co/v1/transaction/verify/${transaction_id}`,
          header
        );
        resp = response.data;
        return resp;
    } catch (error) {
      //  console.log(error);
      console.log(error.response.data); // Prints the error response data
      console.log(error.response.status); // Prints the status code of the error response
      console.log(error.response.headers);
      return error;
    }

};

const updateTransactionStatus = async (order_id, data) => {
    const query =  `UPDATE Online_Payments SET payment_status = ? WHERE order_id = ?`;
    const rows = await pool.query(query, [data.payment_status, order_id]);
    return rows[0].affectedRows;
}

const getUpdatedActiveOrder = async (order_id) => {
  const query = `SELECT * 
FROM orders 
INNER JOIN Order_Items ON orders.order_id = Order_Items.order_id 
INNER JOIN Menu_Items ON Order_Items.item_id = Menu_Items.item_id 
LEFT JOIN Online_Payments ON orders.order_id = Online_Payments.order_id 
WHERE orders.order_id = ?`;
  const rows = await pool.query(query, [order_id]);

  return rows[0];
}


const order_service = {
    getOrderById,
    getActiveOrderDetail,
    getAllActiveOrders,
    verifyTransaction,
    updateTransactionStatus,
    getUpdatedActiveOrder
}
module.exports = order_service