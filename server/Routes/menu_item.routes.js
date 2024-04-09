const router = require("express").Router();
const menu_item_controller = require("../Controllers/menu_item_controller");
const authMidleware = require("../Middlewares/auth.middleware");
const upload = require("../Utils/uploadUtil");


router.post(
  "/api/menu_item/upload",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  upload,
  menu_item_controller.uploadFile
);
router.get(
  "/api/menu-item/:catagory_id",
  menu_item_controller.getFilesByCatagoryId
);
router.put(
  "/api/menu-item-update/:id",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  upload,
  menu_item_controller.updateMenuItem
);
router.get(
  "/api/single-menu-item/:id",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  menu_item_controller.getFilesByMenuId
);

router.delete(
  "/api/delete-menu-item/:id",
  [authMidleware.verifyToken, authMidleware.isAdmin],
  menu_item_controller.deleteMenuItem
);


module.exports = router