const order_service = require("../Services/order.service");

const getOrderById = async (req, res) => {
    const { id } = req.params;
    const result = await order_service.getOrderById(id);
     if (result) {
       return res.status(200).json({
         success: true,
         data: result,
       });
     } else {
       return res.status(500).json({
         success: false,
         message: "No files found",
       });
     }
}

const getAllActiveOrders = async (req, res) => {
  const result = await order_service.getAllActiveOrders();
  if (result) {
    return res.status(200).json({
      success: true,
      data: result,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "No Orders found",
    });
  }
}

const getActiveOrderDetail = async (req, res) => {
  const order_id = req.params.order_id;
  const result = await order_service.getActiveOrderDetail(order_id);
  if (result) {
    return res.status(200).json({
      success: true,
      data: result,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "No Orders found",
    });
  }
};

const verifyTransaction = async (req, res) => {
  const transaction_id = req.params.transaction_id;
  const result = await order_service.verifyTransaction(transaction_id);
  if (result) {
    return res.status(200).json({
      success: true,
      data: result,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Transaction not verified",
    });
  }
}

const updateTransactionStatus = async (req, res) => {
  const order_id = req.params.order_id;
  const result = await order_service.updateTransactionStatus(order_id, req.body);
  if (result) {
    return res.status(200).json({
      success: true,
      message: "Transaction status updated successfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Transaction status not updated",
    });
  }
}

const getUpdatedActiveOrder = async (req, res) => {
  const order_id = req.params.order_id;
  const result = await order_service.getUpdatedActiveOrder(order_id);
  if (result) {
    return res.status(200).json({
      success: true,
      data: result,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "No Orders found",
    });
  }
}

const updateOrderStatus = async (req, res) => {
  const order_id = req.params.order_id;
  const result = await order_service.updateOrderStatus(order_id);
  if (result) {
    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Order status not updated",
    });
  }
}


const order_controller = {
  getOrderById,
  getActiveOrderDetail,
  verifyTransaction,
  updateTransactionStatus,
  getUpdatedActiveOrder,
  getAllActiveOrders,
  updateOrderStatus
};
module.exports = order_controller