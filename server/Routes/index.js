const router = require('express').Router();

const userRoutes = require('./users.routes');
const loginRoutes = require('./login.routes');

router.use(userRoutes);
router.use(loginRoutes);

module.exports = router;

