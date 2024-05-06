const router = require('express').Router();
const userController = require('../Controllers/users.controller');
const authMidleware = require("../Middlewares/auth.middleware");

router.post('/api/register', userController.register);

router.post('/api/forgot-password', userController.forgotPassword);

router.put('/api/reset-password/:token', userController.resetPassword);
module.exports = router

router.get(
  "/api/get-all-users",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  userController.getAllUsers
);
module.exports = router

router.get(
  "/api/search-users/:q",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  userController.searchUsers
);
module.exports = router

