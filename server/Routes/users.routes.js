const router = require('express').Router();
const userController = require('../Controllers/users.controller');

router.post('/api/register', userController.register);

router.post('/api/forgot-password', userController.forgotPassword);

router.put('/api/reset-password/:token', userController.resetPassword);
module.exports = router