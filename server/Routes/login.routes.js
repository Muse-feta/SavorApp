const router = require("express").Router();
const loginController = require("../Controllers/login.controller");

router.post("/api/login", loginController.login);
module.exports = router