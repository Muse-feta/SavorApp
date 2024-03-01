const router = require('express').Router();

const userRoutes = require('./users.routes');

router.use(userRoutes);

module.exports = router;

