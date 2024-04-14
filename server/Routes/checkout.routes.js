const router = require("express").Router();
const checkoutController = require("../Controllers/checkout.controller");

router.post("/api/checkout", checkoutController.checkout);
router.post("/api/online-payment", checkoutController.chapaPayment);
router.get("api/get-transaction", checkoutController.get_transaction);
router.get("/api/verify-transaction", checkoutController.verify_transaction);
router.post("/api/accept-payment", checkoutController.acceptPayment);


module.exports = router; 