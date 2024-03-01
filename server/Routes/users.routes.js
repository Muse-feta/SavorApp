const router = require('express').Router();
const userController = require('../Controllers/users.controller');

router.post('/api/register', userController.register);
// router.post('/login', userController.login);

module.exports = router