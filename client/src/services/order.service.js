const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";


const getActiveOrders = async (id) => {
    try {
        const response = await axios.get(
          `${api_url}/api/get-active-order/${id}`
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const getAllActiveOrders = async () => {
    try {
        const response = await axios.get(
          `${api_url}/api/get-all-active-orders`,
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const getAllCompletedOrders = async () => {
    try {
        const response = await axios.get(
          `${api_url}/api/get-all-completed-orders`,
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const getActiveOrderDetail = async (order_id) => {
    try {
        const response = await axios.get(
          `${api_url}/api/get-active-order-detail/${order_id}`
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const verifyTransaction = async (transaction_id) => {
    try {
        const response = await axios.get(`${api_url}/api/verify-payement/${transaction_id}`);
        return response.data;
    } catch (error) {
        return error
    }
};

const updateTransactionStatus = async (order_id, data) => {
    try {
        const response = await axios.put(
          `${api_url}/api/update-transaction-status/${order_id}`,
          data
        );
        return response.data;
    } catch (error) {
        return error
    }
}

const getUpdatedActiveOrders = async (order_id) => {
    try {
        const response = await axios.get(
          `${api_url}/api/updated-active-order/${order_id}`
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const updateOrderStatus = async (order_id, token) => {
    try {
        const response = await axios.put(
          `${api_url}/api/update-order-status/${order_id}`,
          {},
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        return response.data;
    } catch (error) {
        return error
    }
}

const searchOrder = async (q) => {
    try {
        const response = await axios.get(`${api_url}/api/search/order/${q}`);
        return response.data;
    } catch (error) {
        return error
    }
}
const searchCompletedOrders = async (q) => {
  try {
    const response = await axios.get(
      `${api_url}/api/search-completed/order/${q}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};



const orderServices = {
    getActiveOrders,
    getAllActiveOrders,
    getActiveOrderDetail,
    verifyTransaction,
    updateTransactionStatus,
    getUpdatedActiveOrders,
    updateOrderStatus,
    searchOrder,
    getAllCompletedOrders,
    searchCompletedOrders
};
export default orderServices