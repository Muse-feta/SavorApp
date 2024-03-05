const router = require("express").Router();
const catagoryController = require("../Controllers/ctagory.controller");
const upload = require("../Utils/uploadUtil");

router.post("/api/catagory/upload",upload, catagoryController.uploadFile);

router.get("/api/catagory", catagoryController.getFiles);

module.exports = router;
