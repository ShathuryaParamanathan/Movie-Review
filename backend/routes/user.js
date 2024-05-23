const express = require("express");
const router = express.Router();
const User = require("../Controller/userController");

router.route("/signup").post(User.createUser);

router.route("/signin").post(User.authentication);

module.exports = router;
