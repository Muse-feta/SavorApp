const checkoutService = require('../Services/checkout.service');

const checkout = async (req, res) => {
    const result = await checkoutService.checkout(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Order created successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Order not created",
      });
    }
    };

  const chapaPayment = async (req, res) => {
    const result = await checkoutService.chapaPayment(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Payment successful",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Payment not successful",
      });
    }
  };

  const get_transaction = async (req, res) => {
    const result = await checkoutService.get_transaction(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Transaction retrieved successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Transaction not retrieved",
      });
    }
  }

  const verify_transaction = async (req, res) => {
    const isVerifyPayment = await checkoutService.isVerifyPayment(req.body);
    const result = await checkoutService.verify_transaction(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Transaction verified successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Transaction not verified",
      });
    }
  }

  const acceptPayment = async (req, res) => {
    const result = await checkoutService.acceptPayment(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Payment accepted successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Payment not accepted",
      });
    }
  }
    
    module.exports = {
      checkout,
      chapaPayment,
      verify_transaction,
      get_transaction,
      acceptPayment,
    };