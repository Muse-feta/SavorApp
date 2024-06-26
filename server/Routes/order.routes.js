const order_controller = require("../Controllers/order.controller");
const authMidleware = require("../Middlewares/auth.middleware");

const router = require("express").Router();

router.get("/api/get-active-order/:id", order_controller.getOrderById);
router.get(
  "/api/get-all-active-orders",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  order_controller.getAllActiveOrders
);
router.get(
  "/api/get-all-completed-orders",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  order_controller.getAllCompletedOrders
);
router.get("/api/get-active-order-detail/:order_id", order_controller.getActiveOrderDetail);
router.get("/api/verify-payement/:transaction_id", order_controller.verifyTransaction);
router.put("/api/update-transaction-status/:order_id", order_controller.updateTransactionStatus);
router.put(
  "/api/update-order-status/:order_id",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  order_controller.updateOrderStatus
);

router.get(
  "/api/updated-active-order/:order_id",
  order_controller.getUpdatedActiveOrder
);
router.get("/api/search/order/:q", order_controller.searchOrder);
router.get(
  "/api/search-completed/order/:q",
  order_controller.searchCompletedOrders
);


module.exports = router;