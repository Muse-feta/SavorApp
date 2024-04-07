const router = require("express").Router();
const catagoryController = require("../Controllers/ctagory.controller");
const upload = require("../Utils/uploadUtil");
const authMidleware = require("../Middlewares/auth.middleware");

router.post("/api/catagory/upload", [authMidleware.verifyToken, authMidleware.isAdmin],upload, catagoryController.uploadFile);

router.get("/api/catagory", catagoryController.getFiles);

module.exports = router;
