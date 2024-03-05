const router = require('express').Router();

const userRoutes = require('./users.routes');
const loginRoutes = require('./login.routes');
const catagoryRoutes = require('./catagory.routes');

router.use(userRoutes);
router.use(loginRoutes);
router.use(catagoryRoutes);

module.exports = router;

