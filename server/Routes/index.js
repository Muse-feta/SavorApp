const router = require('express').Router();

const userRoutes = require('./users.routes');
const loginRoutes = require('./login.routes');
const catagoryRoutes = require('./catagory.routes');
const menu_itemRoutes = require('./menu_item.routes');

router.use(userRoutes);
router.use(loginRoutes);
router.use(catagoryRoutes);
router.use(menu_itemRoutes);

module.exports = router;

